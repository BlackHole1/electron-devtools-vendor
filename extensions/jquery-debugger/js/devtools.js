// The function below is executed in the context of the inspected page. $0 is the selected element
var page_getProperties = function() {
	try{
		var $ = window.jQuery;
		if(!$)
			return {error:"This site use no jQuery",__proto__: null};
		
		var jqueryVersion = $.fn.jquery.split('.');
		if(parseInt(jqueryVersion[0]) == 1 && parseInt(jqueryVersion[1]) < 4)
			return {error:"this site use jquery "+$.fn.jquery+". please use jquery 1.4 or newer.",__proto__: null};
			
		//gets the data of the selected element
		var data = ($0 ? $.data($0) : {}) || {};
		// Make a shallow copy with a null prototype, so that sidebar does not expose prototype.
		var props = Object.getOwnPropertyNames(data);
		var copy = { __proto__: null };
		for (var i = 0; i < props.length; ++i){
			if(props[i] != 'events' && props[i] != 'handle' && props[i].indexOf('_') != 0 && props[i].indexOf('jQuery') != 0)
			{
				copy[props[i]] = data[props[i]];
			}
		}
		
		//load the data from the html 5's data attribute only if the data is not exist already
		/////only for jquery less than 1.4.3 because it ignores HTML5-data.
		/////if(parseInt(jqueryVersion[0]) == 1 && parseInt(jqueryVersion[1]) == 4 && parseInt(jqueryVersion[2]) < 3)
		
		if ($0.attributes) { // Will privent error if $0 is textNode or commentNode for example.
			for(i = 0; $0 && i < $0.attributes.length; i++)
			{
				if($0.attributes[i].name.indexOf("data-") == 0)
				{
					var name = $0.attributes[i].name.substring(5).toLowerCase().replace(/-[a-z]/g, function(letter) {
						return letter.toUpperCase();
					}).replace(/-/g,'');
					if(copy[name] == undefined)
						copy[name] = isNumeric($0.attributes[i].value) ? parseInt($0.attributes[i].value) : $0.attributes[i].value;//use eval to cast the string value to it's correct type.
				}
			}
		}
		
		return copy;
	}
	catch(err){/*console.error(err);*/ return {error:"General error",__proto__: null};}
	
	function isNumeric( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	}
}

//add new sidebar to the elements' tab
chrome.devtools.panels.elements.createSidebarPane(
	"jQuery Data",
	function(sidebar) {
		function updateElementProperties() {
			//use the setExpression in order to apply page_getProperties in context of the inspected page, so the $0 equals to the selected element.
			sidebar.setExpression("(" + page_getProperties.toString() + ")()");
		}
		updateElementProperties();
		chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
	}
);

// The function below is executed in the context of the inspected page. $0 is the selected element
var page_getEvents = function(LiveDelegate) {
	try{
		var $ = window.jQuery;
		if(!$)
			return {error:"this site use no jQuery",__proto__: null};
		
		var jqueryVersion = $.fn.jquery.split('.');
		if(parseInt(jqueryVersion[0]) == 1 && parseInt(jqueryVersion[1]) < 4)
			return {error:"this site use jquery "+$.fn.jquery+". please use jquery 1.4 or newer.",__proto__: null};
		
			var createObject = function (name,srcObj) {
			  var x = function(){};
			  var code = "x = function "+name+"() {};";
			  eval(code);
			  x.prototype = {};
			  var res = new x();
			  for(var key in srcObj)
				res[key] = srcObj[key];
			  res.__proto__ = null;
			  res.length = 0;
			  res.splice = function(){};
			  return res;
			};
		
		//gets the event list of the selected element
		var data = ($0 ? $.data($0,"events") : {}) || {};

		// Make a shallow copy with a null prototype, so that sidebar does not expose prototype.
		var props = Object.getOwnPropertyNames(data);
		var copy = { __proto__: null };

		for (var i = 0; i < props.length; ++i)
		{
			var tmpHandlers = getHandlers(data[props[i]],$0); 
			if(tmpHandlers.length > 0)
				copy[props[i]] = tmpHandlers;
		}
		
		//delegate and live events are registered on ancestor element
		var currentElement;
		/*switch(LiveDelegate)
		{
			case 'hide':
				currentElement = null;//$0.parentNode;
				break;
			case 'liveOnly':
				currentElement = document;//$0.parentNode;
				break;
			default:*/
				currentElement = $0 ? $0.parentNode : null;
				/*break;
		}*/
		while(currentElement)
		{
			var liveData = (($.data(currentElement, "events") || {}));
			var liveProps = Object.getOwnPropertyNames(liveData);
			
			//for each event
			for (var i = 0; i < liveProps.length; ++i)
			{
				var curData = liveData[liveProps[i]];
				
				for(var j = 0; j < curData.length; j++)
				{
					//get the current handler
					var handleObj = curData[j];
					
					//for jquery 1.6 and below
					if(liveProps[i] === "live")
					{
						continue;
						liveProps[i] = handleObj.origType;
					}
					
					//check if the curent element mathces the live's selector
					if($($0).is(handleObj.selector))
					{
						//if this is the first live event in this event type
						if(copy[liveProps[i]] == undefined)
							copy[liveProps[i]] = getHandlers([handleObj],undefined,currentElement);
						else
							copy[liveProps[i]] = copy[liveProps[i]].concat(getHandlers([handleObj],undefined,currentElement));
					}
				}
			}
			currentElement = currentElement.parentNode;
		}
		
		return copy;
	  
		function getHandlers(obj, elem, delegator)
		{
			var res = [];
			for(var i = 0; i < obj.length; i++)
				if(elem == undefined || obj[i].selector == null || $(elem).is(obj[i].selector))
				{
				var handler = (obj[i].origHandler || obj[i].handler).toString().replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");
					if(!delegator)//regular event
						res.push(new regular(handler,obj[i].namespace,obj[i].data));
					else if(delegator.parentNode == null)
						res.push(new live(handler,obj[i].namespace,obj[i].selector,obj[i].data));
					else
						res.push(new delegate(handler ,delegator,obj[i].namespace,obj[i].selector,obj[i].data));
				}
			return res;
		}
		
		function regular(code,namespace,data)
		{
			this.code = code;
			if(namespace && namespace.length > 0)
				this.namespace = namespace;
			if(data)
				this.data = data;
			this.__proto__ = null;
		}
		
		function delegate(code,delegator, namespace, selector,data)
		{
			this.code = code;
			this.delegator = delegator;
			if(namespace && namespace.length > 0)
				this.namespace = namespace;
			if(data)
				this.data = data;
			this.selector = selector;
			this.__proto__ = null;
		}
		
		function live(code, namespace, selector,data)
		{
			this.code = code;
			if(namespace && namespace.length > 0)
				this.namespace = namespace;
			if(data)
				this.data = data;
			this.selector = selector;
			this.__proto__ = null;
		}
	}
	catch(err){/*console.error(err);*/ return {error:"General error",__proto__: null};}
}
/*
//add new sidebar to the elements' tab
chrome.devtools.panels.elements.createSidebarPane(
	"jQuery Events",
	function(sidebar) {
		function updateElementProperties() {				
			sidebar.setExpression("(" + page_getEvents.toString()+ ")('"+localStorage["LiveDelegate"]+"')");
		}
		updateElementProperties();
		chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
	}
);
*/

//add new sidebar to the elements' tab
chrome.devtools.panels.elements.createSidebarPane(
	"jQuery Events",
	function(sidebar) {
		function updateElementProperties() {				
			sidebar.setPage("../pages/eventSidebar.html");
		}
		updateElementProperties();
		chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
	}
);

//add new panel: 'jQuery Selector Inspector'
chrome.devtools.panels.create("jQuery Selector Inspector", '../images/selectorInspecer_24_24_40_32.png', '../pages/selectorInspecer.html',
	function(panel){
		/*panel.createStatusBarButton('testIcon_64_24.png', 'refresh selectors', false).onClicked.addListener(function() {
			alert('click: ' + e);
		});*/
		panel.onHidden.addListener(function() {
			_.inspector.hideAll();
		});
		panel.onShown.addListener(function() {
			_.inspector.showAll();
		});
	}
);

//the old way, 'jQuery Selector Inspector' as sidebar
/*
//add new sidebar to the elements' tab
chrome.devtools.panels.elements.createSidebarPane(
	"jQuery Selector Inspector",
	function(sidebar) {
		function updateElementProperties() {
			sidebar.setPage('selectorInspecer.html');
		}
		updateElementProperties();
		//chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
	}
);*/