try{_.analytics.init();}
catch(e){}

$('#selectorInput').autoGrowInput({
	comfortZone: 30,
	maxWidth: 1200
});

var selectorList = document.getElementById('selectorsList');
var statisticsSpan = document.getElementById('statistics');
var selectorInput = document.getElementById('selectorInput');
var colors = [{c:'#f00',inUse:false,i:0},{c:'#0f0',inUse:false,i:1},{c:'#00f',inUse:false,i:2},{c:'#0cc',inUse:false,i:3}
	,{c:'#c0c',inUse:false,i:4},{c:'#cc0',inUse:false,i:5}];

/*document.getElementById('helpBtn').addEventListener('click',function(){
	_gaq.push(['_trackEvent', 'helpBtn', 'clicked','']);
	chrome.tabs.create({url:'http://jquerydebugger.moonsitesoftware.com/?utm_source=helpBtn'},function (tab){});
});*/
	
document.getElementById('refreshBtn').addEventListener('click',function(){
	var liArray = selectorList.querySelectorAll('li');
	var i = liArray.length;
	_.analytics.setPageTitle();
	_gaq.push(['_trackEvent', 'refreshBtn', 'clicked','', i]);
	while(i--)
		if(liArray[i].isClicked)//refreash only the selected li
			inspectSelector(liArray[i].jQueryClonesSelector,colors[liArray[i].jQueryClonesColor]);
});

selectorInput.addEventListener('keypress',function(e){
	if(e.keyCode == 13)
		addSelectorHandler();
});

document.getElementById('plusBtn').addEventListener('click',addSelectorHandler);

function addSelectorHandler(e)
{
	var selector = selectorInput.value.trim();
	if(selector.length){
		_.analytics.setPageTitle();
		_gaq.push(['_trackEvent', 'addSelector', 'clicked', (!e)?'keyboard':'mouse', selector.length]);
		generateLi(_.selectorParser.parse1(selector),selector);
		
		selectorInput.value = "";
		
		//save the selectors in storage
		setSelectorsInStorage();
	}
}

//load the selectors from storage
var selectorsArr = _.inspector.getSelectorsFromStorage();
var i = selectorsArr.length;
while(i--)
	generateLi(_.selectorParser.parse1(selectorsArr[i]),selectorsArr[i]);

function setSelectorsInStorage()
{
	var liArray = selectorList.querySelectorAll('li');
	var i = liArray.length;
	var selectorsArr = [];
	while(i--)
		selectorsArr.push(liArray[i].selector);
	_.inspector.setSelectorsInStorage(selectorsArr);
}

function generateLi(array,selector){
	var li = document.createElement('li');
	li.selector = selector;
	
	//backgroundSpan must be the first child of li.
	var backgroundSpan = document.createElement('span');
	backgroundSpan.className = "background";
	li.appendChild(backgroundSpan);
	
	//add edit button to the li.
	var editButton = document.createElement('span');
	editButton.className = 'editBtn';
	editButton.title = 'Edit this selector';
	li.appendChild(editButton);
	
	editButton.addEventListener('click',function(e){
		// Set the current selector to the selectorInput.
		selectorInput.value = this.parentElement.selector;
		
		// Set focus to selectorInput.
		selectorInput.focus();
		
		e.stopPropagation();
	});
	
	//add minus button to the li.
	var minusButton = document.createElement('span');
	minusButton.className = 'minusBtn';
	minusButton.title = 'Remove this selector from the list';
	li.appendChild(minusButton);
	
	minusButton.addEventListener('click',function(e){
		this.parentNode.parentNode.removeChild(this.parentNode);
		//if the li was clicked clear the li.isClicked variable.
		if(this.parentNode.isClicked)
			clearSelectedSpan(this.parentNode);
		
		//save the selectors in storage
		setSelectorsInStorage();
		
		e.stopPropagation();
	});
	
	var selectorObj = {str:selector,offsets:[]};
	for(var i = 0; i < array.length; i++)
	{
		if(i>0){
			var span = document.createElement('span');
			span.innerText = " , ";
			li.appendChild(span);
			selectorObj.str = selectorObj.str.substring(selectorObj.str.indexOf(",")+1);
		}
		li.appendChild(generateSpan(array[i],selectorObj,true));
	}
	
	li.addEventListener('mouseout',function(e){
		var rel = e.relatedTarget;
		while (rel && rel.tagName != 'BODY' && rel != this)
			rel = rel.parentNode;
		if(rel != this || (" " + e.relatedTarget.className + " ").indexOf("minusBtn") != -1 )
		{
			if(!this.isClicked){
				clearSelectedSpan(this);
				//free the color to reuse
				if(this.jQueryClonesColor !== undefined){
					colors[this.jQueryClonesColor].inUse = false;
					this.jQueryClonesSelector = this.jQueryClonesColor = undefined;
				}
			}
			e.stopPropagation();
		}
	});
	li.addEventListener('click',function(e){
		if(this.isClicked)
			clearSelectedSpan(this);
			
		e.stopPropagation();
	});
	
	selectorList.appendChild(li);
}

function generateSpan(data,selectorObj,isOffset)
{
	var span = document.createElement('span');
		
	if(isOffset){
		span.className = "offset";
		selectorObj.offsets.unshift(selectorObj.str);
	}
		
	while(typeof(data) === "object" && data.length === 1)
		data = data[0];
		
	if(typeof(data) === "string"){
		var index = selectorObj.str.indexOf(data) + data.length;
		span.innerText =  selectorObj.str.substring(0,index);
		selectorObj.str = selectorObj.str.substring(index);
		//save the selector
		span.selector = selectorObj.offsets[0].substring(0,selectorObj.offsets[0].length - selectorObj.str.length);
	}
	else if(typeof(data) === "object" && data.length > 0 && typeof(data[0]) === "number"){//this is an ':not()' or ':has()' array. all the items in this array are offset items.
		//print ':not(' or ':has(' in the start of the span
		var index = Number.MAX_VALUE, strings = [":not(", ":has("], i = strings.length;
		while (i--) {
			var tmpIndex = selectorObj.str.indexOf(strings[i])
			if (tmpIndex >= 0 && tmpIndex + strings[i].length < index)
				index = tmpIndex + strings[i].length;
		}
		
		span.appendChild(document.createTextNode(selectorObj.str.substring(0, index)));
		selectorObj.str = selectorObj.str.substring(index);
		
		//starts from 1 to skip the first item(that is a number)
		for(var i = 1; i < data.length; i++){
			if(i>1){
				var span2 = document.createElement('span');
				span2.innerText = " , ";
				span.appendChild(span2);
				selectorObj.str = selectorObj.str.substring(selectorObj.str.indexOf(",")+1);
			}
			span.appendChild(generateSpan(data[i],selectorObj,true));
		}
		
		//print ')' in the end of the span
		var index = selectorObj.str.indexOf(")") + 1;
		span.appendChild(document.createTextNode(selectorObj.str.substring(0,index)));
		selectorObj.str = selectorObj.str.substring(index);
		
		//save the selector
		span.selector = selectorObj.offsets[0].substring(0,selectorObj.offsets[0].length - selectorObj.str.length);
	}
	else{
		for(var i = 0; i < data.length; i++){
			span.appendChild(generateSpan(data[i],selectorObj));
		}
	}
	
	if(isOffset){
		selectorObj.offsets.shift();
	}
	
	span.addEventListener('mouseover',function(e){
		setSelectedSpan(this);
		e.stopPropagation();
	});
	span.addEventListener('click',function(e){
		setSelectedSpan(this,true);
		e.stopPropagation();
	});
	return span;
}

function clearSelectedSpan(li)
{				
	li.firstElementChild.className = "background";
	li.firstElementChild.style.width = "0px";
	li.firstElementChild.style.left = "32px";
	
	if(typeof(li.jQueryClonesColor) != "undefined"){
		clearInspectedSelector(li.jQueryClonesColor);
		//free the color to reuse
		colors[li.jQueryClonesColor].inUse = false;
		li.jQueryClonesSelector = li.jQueryClonesColor = undefined;
	}
	li.isClicked = false;
}

function setSelectedSpan(span, setIsClick)
{
	//find the offset parent
	var offset = span;
	while((" "+offset.className+" ").indexOf("offset") == -1)
		offset = offset.parentNode;
		
	//find the background element
	var background = offset;
	while(background.nodeName != "LI")
		background = background.parentNode;
		
	var li = background;
	background = background.firstElementChild;
	
	if(!li.isClicked)
	{
		var color;
		//select color.
		if((" "+background.className+" ").indexOf("show") == -1){
			//get random color.
			
			if(li.jQueryClonesColor)
			{
				color = colors[li.jQueryClonesColor];
			}
			if(color === undefined){
				color = getRandEmptyColor();
				if(!color)
				{
					_.analytics.setPageTitle();
					_gaq.push(['_trackEvent', 'getRandEmptyColor', 'noMoreEmptyColor', colors.length, colors.length]);
					//alert('too much selectors');
					return;
				}
				colors[color.i].inUse = true;
				//save the color index in the LI.
				li.jQueryClonesColor = color.i;
				li.jQueryClonesSelector = span.selector;
			}
		}
		else
		{
			var cssColor = background.style.backgroundColor;
			var i;
			for(i = 0; i < colors.length; i++)
			{
				background.style.backgroundColor = colors[i].c;
				if(cssColor == background.style.backgroundColor)
					break;
			}
			color = colors[i];
			li.jQueryClonesColor = color.i
		}
		
		if(setIsClick)
		{
			li.isClicked = true;
		}
		
		background.style.backgroundColor = color.c;
		//animate the background to soround the hovered selector.
		background.style.width = (span.offsetWidth + span.offsetLeft - offset.offsetLeft) + 'px';
		background.style.left = offset.offsetLeft + 'px';
		background.className = "background show";
	
		//inspect the selector in the window.
		inspectSelector(span.selector,color);
	}
	else if(setIsClick)//if the li is clicked and the trigger of this function is click too, than clear the selection
		clearSelectedSpan(li);
}

function getRandEmptyColor(){
	var avilable = [];
	for(var i = 0; i < colors.length; i++)
		if(!colors[i].inUse)
			avilable.push(colors[i]);
	if(avilable.length == 0)
		return null;
	return avilable[Math.floor(Math.random()*avilable.length)];
}

function clearInspectedSelector(colorIndex){
	_.inspector.clearInspectedSelector(colorIndex);
	statisticsSpan.innerText = "";
}

function inspectSelector(selector,color){
	try{
		_.inspector.inspectSelector(selector,color,function(result,isException){
			if (isException)
			{
				///////todo: alert if there is no jQuery or if the selector is broken.
				statisticsSpan.innerText = ("error: " + result);
			}	
			else {
				statisticsSpan.innerText = "total: " + result.total + " visible: " + result.visible;
			}
		});
		}
	catch (e){
		statisticsSpan.innerText = ("error: " + e);
	}
}