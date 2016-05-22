define(function(require,exports,module){
	var getByClassName=require('seajs/common.js').getByClassName;
	exports.dorp=function(){
		if(typeof arguments[0]=='string'){
			var oDiv=document.getElementById(arguments[0]);
		}else if(typeof arguments[0]=='object'){
			var oDiv=arguments[0];	
		}
		var oContent=oDiv.children[1];
		oDiv.onmouseover=function(){
			oContent.style.display="block";
			oDiv.style.backgroundColor="#FFFFFF";
		}
		oDiv.onmouseout=function(){
			oContent.style.display="none";
			oDiv.style.backgroundColor="#F1F1F1";
		}
	}
	exports.dorpAll=function(sClass){
		var aDorp=getByClassName(document,sClass);
		for(var i=0;i<aDorp.length;i++){
			exports.dorp(aDorp[i]);	
		}
	}
})