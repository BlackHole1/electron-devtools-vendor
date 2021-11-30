var _gaq = _gaq || [];

var _ = {
	selectorParser:{
		_Expr: {
			order:["ID", "CLASS", "NAME", "TAG"],
			filter:["PSEUDO", "CHILD", "ID", "TAG", "CLASS", "ATTR", "POS"],
			match:{
				ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?![^\[]*\])(?![^\(]*\))/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?![^\[]*\])(?![^\(]*\))/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\](?![^\[]*\])(?![^\(]*\))/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\](?![^\[]*\])(?![^\(]*\))/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)(?![^\[]*\])(?![^\(]*\))/,
				CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?(?![^\[]*\])(?![^\(]*\))/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)(?![^\[]*\])(?![^\(]*\))/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?(?![^\[]*\])(?![^\(]*\))/,
				globalPOS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/
			},
			leftMatch:{
				ID: /(^(?:.|\r|\n)*?)#((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?![^\[]*\])(?![^\(]*\))/,
				CLASS: /(^(?:.|\r|\n)*?)\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?![^\[]*\])(?![^\(]*\))/,
				NAME: /(^(?:.|\r|\n)*?)\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\](?![^\[]*\])(?![^\(]*\))/,
				ATTR: /(^(?:.|\r|\n)*?)\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\4|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\](?![^\[]*\])(?![^\(]*\))/,
				TAG: /(^(?:.|\r|\n)*?)^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)(?![^\[]*\])(?![^\(]*\))/,
				CHILD: /(^(?:.|\r|\n)*?):(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?(?![^\[]*\])(?![^\(]*\))/,
				POS: /(^(?:.|\r|\n)*?):(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)(?![^\[]*\])(?![^\(]*\))/,
				PSEUDO: /(^(?:.|\r|\n)*?):((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\3\))?(?![^\[]*\])(?![^\(]*\))/
			},
			chunker: /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
		},
		parse3: function(expr){
			var match, type, left, right;
			var Expr = _.selectorParser._Expr;

			if ( expr ) {
				for ( var i = 0; i < Expr.filter.length; i++ ) {
					type = Expr.filter[i];
					if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
					
						left = match[1];

						if ( left.substr( left.length - 1 ) !== "\\" ) {
							var current = Expr.match[ type ].exec(expr);
							//expr = expr.replace( Expr.match[ type ], "" );
							right = expr.substring(left.length + current[0].length);
							
							if(type == 'PSEUDO')
							{
								//if this is a :not() || :has()
								if(current[1] === "not" || current[1] === "has")
								{
									current[0] = [0].concat(_.selectorParser.parse1(current[3]));
								}
							}
							return _.selectorParser.parse3(left).retPush(current[0]).concat(_.selectorParser.parse3(right));
						}
					}
				}
			}
			return [];
		},
		//gets expression and parse it by stage 2. returns array of the parsed expressions
		parse2: function(expr){
			var Expr = _.selectorParser._Expr;
			if ( expr ) {
				for ( var i = 0, len = Expr.order.length; i < len; i++ ) {
					var type = Expr.order[i],match,left,right;

					if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
						left = match[1];
						////left is all the expr that from the left to the current dettected type
						//match.splice( 1, 1 );

						if ( left.substr( left.length - 1 ) !== "\\" && left.indexOf(':not') == -1 && left.indexOf(':has') == -1) {
							//match[1] = (match[1] || "").replace( rBackslash, "" );
							//set = Expr.find[ type ]( match, context, isXML );

							//if ( set != null ) {
								/*expr = expr.replace( Expr.match[ type ], "" );
								////the rest of the expresion(left,right) need to be parsed by stage 2.
								right = expr.substring(left.length);
								return _.selectorParser.parse2(left).retPush( match[0] ).concat(_.selectorParser.parse2(right));*/
								
								var current = Expr.match[ type ].exec(expr)[0];
								//expr = expr.replace( Expr.match[ type ], "" );
								right = expr.substring(left.length + current.length);
								
								return _.selectorParser.parse2(left).retPush(current).concat(_.selectorParser.parse2(right));
								
							//}
						}
					}
				}
				//if passes all the for loop and not match any of the types, than try parse by stage 3.
				return _.selectorParser.parse3(expr);
			}
			return [];
		},
		parse1: function(selector, prevResult){
			var Expr = _.selectorParser._Expr;
			var parts = [], soFar = selector;
			prevResult = prevResult || [];
			// Reset the position of the chunker regexp (start from head)
			do {
				Expr.chunker.exec( "" );
				var m = Expr.chunker.exec( soFar );

				if ( m ) {
					soFar = m[3];
					
					var tmp = _.selectorParser.parse2(m[1]);
					if(tmp && tmp.length)
						parts.push( tmp );
					
					if ( m[2] ) {
						var extra = m[3];
						//$("#out")[0].innerText += "\n,";
						return _.selectorParser.parse1(extra,prevResult.retPush(parts));
						break;
					}
				}
			} while ( m );
			return prevResult.retPush(parts);
		}
	},
	inspector:{
		inspectSelector: function(selector,color,handler){
			//inspect the selector in the window.
			chrome.devtools.inspectedWindow.eval(
				//add the find(':visible') to ensure the visual inspector
				"if(!jQuery('jqueryClones').length) jQuery('<jqueryClones></jqueryClones>').appendTo('body');jQuery('jQueryClone"+color.i+"').remove();var tmp = jQuery('"+selector+"').filter(':visible').each(function(){var offset = jQuery(this).offset();jQuery('<jQueryClone"+color.i+"></jQueryClone"+color.i+">').css({width:jQuery(this).outerWidth(),height:jQuery(this).outerHeight(),top:offset.top-3,left:offset.left-3,position:'absolute',zIndex:99999999999999999,opacity:0.3,background:'"+color.c+"',border:'3px dashed white'}).appendTo('body jqueryClones');});JSON.stringify({visible:tmp.length, total: tmp.end().length});",
					function(result, isException) {
						if (isException)
							handler(result,isException);
						else {
							var resObj = JSON.parse(result);
							handler(resObj,isException);
						}
				 }
			);
		},
		clearInspectedSelector: function(colorIndex){
			chrome.devtools.inspectedWindow.eval(
				"jQuery('jQueryClone" + colorIndex + "').remove();"
			);
		},
		inspectDelegator: function(delegatorIndex){
			//inspect the delegator in the window by the window.jqueryDebugger[delegatorIndex] element.
			chrome.devtools.inspectedWindow.eval(
				"jQuery('jQueryEventsClones').remove();jQuery('<jQueryEventsClones></jQueryEventsClones>').appendTo('body');var tmp = jQuery(window.jqueryDebugger[" + delegatorIndex + "]).filter(':visible').each(function(){var offset = jQuery(this).offset();jQuery('<jQueryEventsClone></jQueryEventsClone>').css({width:jQuery(this).outerWidth(),height:jQuery(this).outerHeight(),top:offset.top-3,left:offset.left-3,position:'absolute',zIndex:99999999999999999,opacity:0.3,background:'red',border:'3px dashed white'}).appendTo('body jQueryEventsClones');});",
					function(result, isException) {
						// TODO: Make this delegated random color, not only red.
						//		 Or make it blink!!
					}
			);
		},
		clearInspectedDelegator: function(){
			chrome.devtools.inspectedWindow.eval(
				"jQuery('jQueryEventsClones').remove();"
			);
		},
		inspectSelectorInDelegator: function(delegatorIndex, selector){
			if(delegatorIndex == -1)
				return;
			//inspect the delegator in the window by the window.jqueryDebugger[delegatorIndex] element.
			chrome.devtools.inspectedWindow.eval(
				"jQuery('jQueryEventsClones').remove();jQuery('<jQueryEventsClones></jQueryEventsClones>').appendTo('body');var tmp = jQuery(window.jqueryDebugger[" + delegatorIndex + "]).find('" + selector + "').filter(':visible').each(function(){var offset = jQuery(this).offset();jQuery('<jQueryEventsClone></jQueryEventsClone>').css({width:jQuery(this).outerWidth(),height:jQuery(this).outerHeight(),top:offset.top-3,left:offset.left-3,position:'absolute',zIndex:99999999999999999,opacity:0.3,background:'red',border:'3px dashed white'}).appendTo('body jQueryEventsClones');});",
					function(result, isException) {
					}
			);
		},
		triggerEvent: function(type){
			//inspect the delegator in the window by the window.jqueryDebugger[delegatorIndex] element.
			chrome.devtools.inspectedWindow.eval(
				"jQuery($0).trigger('" + type + "');",
					function(result, isException) {
					}
			);
		},
		hideAll: function(){
			chrome.devtools.inspectedWindow.eval(
				"jQuery('jqueryClones').hide();"
			);
		},
		showAll: function(){
			chrome.devtools.inspectedWindow.eval(
				"jQuery('jqueryClones').show();"
			);
		},
		setSelectorsInStorage: function(selectorsArr){
			localStorage.setItem('selectorsArr', JSON.stringify(selectorsArr));
		},
		getSelectorsFromStorage: function(){
			return JSON.parse(localStorage.getItem('selectorsArr')) || ['a', 'table tr td, ul li :not(ul li span)', 'table:has(tr th)'];
		}
	}/*,
	injectJquery: function(){
		chrome.tabs.executeScript(chrome.devtools.inspectedWindow.tabId, { file: "jquery-1.7.1.min.js" },function(){alert('jQuery 1.7.1 is injected');});
	}*/,
	analytics:{
		init: function(dontTrackPageview){
			_.analytics.setPageTitle();
		
			_gaq.push(['_setAccount', 'UA-29383238-1']);
			if( !dontTrackPageview )
				_gaq.push(['_trackPageview']);

			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = 'https://ssl.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		},
		setPageTitle: function(){
			//get the title from the inspected page and set it as my title..
			chrome.devtools.inspectedWindow.eval(
				"document.title",
					function(result, isException) {
						if (isException)
							document.title = "~;~ title error";
						else {
							document.title = result;
						}
				 }
			);
		}
	},
};

Array.prototype.retPush = function(x){
	this.push(x);
	return this;
}

/* jquery injection (function() {
	var s = document.createElement('script');s.type = 'text/javascript'; s.async = true;
	s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
	var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(s, sc);
})();*/