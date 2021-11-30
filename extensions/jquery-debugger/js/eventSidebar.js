$(document).ready(function(){
	$("#accordion").delegate(".expendable", "click", function (){
		$(this).toggleClass("expend");
	}).delegate(".delegator", "mouseenter", function (){
		_.inspector.inspectDelegator($(this).data('index'));
	}).delegate(".delegator", "mouseleave", function (){
		_.inspector.clearInspectedDelegator();
	}).delegate(".selector", "mouseenter", function (){
		var selector = $(this).find('.red').text();
		selector = selector.substring(1,selector.length-1);
		_.inspector.inspectSelectorInDelegator($(this).data('index'),selector);
	}).delegate(".selector", "mouseleave", function (){
		_.inspector.clearInspectedDelegator();
	}).delegate(".triggerBtn", "click", function (){
		//report to analytics
		var type = $(this).data("type");
		_.analytics.setPageTitle();
		_gaq.push(['_trackEvent', 'triggerBtn', 'click', type]);
		
		//trigger
		_.inspector.triggerEvent(type);
		
		return false;
	}).delegate(".code", "dblclick", function(){
		alert($(this).find('.red').text());
	});
	
	_.analytics.init(true);
});

var page_getEvents = function() {
	try{
		var $ = window.jQuery;
		if(!$)
			return {error:"this site use no jQuery",__proto__: null};
		
		var jqueryVersion = $.fn.jquery.split('.');
		var is_1_8_or_newer = !(parseInt(jqueryVersion[0]) == 1 && parseInt(jqueryVersion[1]) < 8);
		var is_less_than_1_4 = (parseInt(jqueryVersion[0]) == 1 && parseInt(jqueryVersion[1]) < 4);
		
		if(is_less_than_1_4)
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
		
		// Gets the event list of the selected element
		// In version 1.8+, the events are registered under $._data function.
		var data;
		if(is_1_8_or_newer)
			data = ($0 ? $._data($0, "events") : {}) || {};
		else
			data = ($0 ? $.data($0, "events") : {}) || {};

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
			// In version 1.8+, the events are registered under $._data function.
			var liveData;
			if(is_1_8_or_newer)
				liveData = (($._data(currentElement, "events") || {}));
			else
				liveData = (($.data(currentElement, "events") || {}));
				
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
				var handler = (obj[i].origHandler || obj[i].handler).toString();
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
			this.type = 'regular';
			this.code = code;
			if(namespace && namespace.length > 0)
				this.namespace = namespace;
			/*if(data)
				this.data = data;*/
			this.__proto__ = null;
		}
		
		function delegate(code, delegator, namespace, selector,data)
		{
			this.code = code;
			this.type = 'delegate';
			//save the delegator in the page and referance it by index.
			window.jqueryDebugger = window.jqueryDebugger || [];
			this.delegatorIndex = window.jqueryDebugger.length;
			this.delegatorType = delegator.tagName + (delegator.id ? "#" + delegator.id : "");
			window.jqueryDebugger.push(delegator);
			
			if(namespace && namespace.length > 0)
				this.namespace = namespace;
			/*if(data)
				this.data = data;*/
			this.selector = selector;
			this.__proto__ = null;
		}
		
		function live(code, namespace, selector,data)
		{
			this.type = 'live';
			this.code = code;
			if(namespace && namespace.length > 0)
				this.namespace = namespace;
			/*if(data)
				this.data = data;*/
			this.selector = selector;
			this.__proto__ = null;
		}
	}
	catch(err){/*console.error(err);*/ return {error:"General error",__proto__: null};}
};

//get the event from the $0.
chrome.devtools.inspectedWindow.eval(
	"("+page_getEvents.toString()+")()",
		function(result, isException) {
			if (isException)
				console.error("Exception: " + result);
			else {
				parseEventsToHTML(result);
			}
	 }
);


function parseEventsToHTML(events)
{
	if(events.error)
	{
		$("#accordion").html('<span>error<span class="saperator">: </span><span class="red">'+htmlEncode(events.error)+'</span></span>');
		return;
	}
	
	var html = '<ol>';
	for(var eventType in events)
	{
		var event = events[eventType];
		html += ('<li class="expend expendable"><span><span class="triengle"></span>'+htmlEncode(eventType)+'<span class="saperator">: </span><span class="black">['+htmlEncode(event.length)+']</span><span class="triggerBtn" title="trigger this handler" data-type="' + htmlEncode(eventType) + '">trigger</span></span></li><ol>');
		for(var i = 0; i < event.length; i++)
		{
			var cur = event[i];
			var tmpHTML = '<li class="expendable"><span><span class="triengle"></span>'+i+'<span class="saperator">: </span><span class="black">'+cur.type+'</span></span></li><ol>';
			
			if(cur.code)
				tmpHTML += ('<li class="code"><span>code<span class="saperator">: </span><span class="red" title="' + titleEncode(cur.code) + '">"' + htmlEncode(cur.code.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ")) + '"</span></span></li>');
			
			if(cur.delegatorType)
				tmpHTML += ('<li class="delegator" data-index="' + cur.delegatorIndex + '"><span>delegator<span class="saperator">: </span><span class="black">' + htmlEncode(cur.delegatorType) + '</span></span></li>');
			
			if(cur.namespace)
				tmpHTML += ('<li><span>namespace<span class="saperator">: </span><span class="red">"' + htmlEncode(cur.namespace) + '"</span></span></li>');
				
			if(cur.selector) {//data-index is -1 if the event is live.
				var delegatorIndex = cur.delegatorIndex;
				if (delegatorIndex === undefined)
					delegatorIndex = -1;
				tmpHTML += ('<li class="selector" data-index="' + delegatorIndex + '"><span>selector<span class="saperator">: </span><span class="red">"' + htmlEncode(cur.selector) + '"</span></span></li>');
			}
			
			tmpHTML += '</ol>';
			
			html += tmpHTML;
		}
		html+='</ol>';
	}
	html+='</ol>';
	
	if(html.length == 0)//if there is no events
		html = '<div class="noProperties">No Properties</div>';
		
	$("#accordion").html(html);
}

function titleEncode(value){
	return htmlEncode(value).replace(/"/g,'&quot;');
}

function htmlEncode(value){
	return $('<div/>').text(value).html();
}