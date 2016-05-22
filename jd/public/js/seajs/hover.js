define(function(require,exports,module){
	var getByClassName=require('seajs/common.js').getByClassName;
	exports.show=function(){
		var oHead=getObj(arguments[0]);
		var oContent=getObj(arguments[1]);
		oHead.onmouseenter=function(ev){
			/*var oEvt=ev||event;
			var oFrom=oEvt.fromElement||oEvt.relatedTarget;
			if(oFrom && oHead.contains(oFrom)) return;*/
			oContent.style.display="block";
		}
		oHead.onmouseleave=function(ev){
			/*var oEvt=ev||event;
			var oTo=oEvt.toElement||oEvt.relatedTarget;
			if(oTo && oHead.contains(oTo)) return;*/
			oContent.style.display="none";
		}
	}
	exports.showAll=function(sClass){
		var aHead=getByClassName(document,sClass);
		for(var i=0;i<aHead.length;i++){
			exports.hover(aHead[i]);	
		}
	}
	function getObj(){
		if(typeof arguments[0]=='string'){
			return document.getElementById(arguments[0]);
		}else if(typeof arguments[0]=='object'){
			return arguments[0];	
		}
	}

})