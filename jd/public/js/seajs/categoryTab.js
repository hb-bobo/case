
define(function(require,exports,module){	
	exports.cateDrog=function(){
		if(typeof arguments[0]=='string'){
			var oDiv=document.getElementById(arguments[0]);
		}else if(typeof arguments[0]=='object'){
			var oDiv=arguments[0];	
		}
		var aLi=oDiv.children[0].getElementsByTagName('li');
		var oDorpdown_layer=oDiv.children[1];
		var aContent=oDorpdown_layer.children;
		var timer=null;
		for(var i=0;i<aLi.length;i++){
			(function(index){
				aLi[i].onmouseover=function(){					
					aLi[index].className='hover';
					oDorpdown_layer.style.display='block';
					aContent[index].style.display='block';
					var aA=aLi[index].getElementsByTagName("a");
				}
				aLi[i].onmouseout=function(){
					aLi[index].className="";
					oDorpdown_layer.style.display='none';
					aContent[index].style.display='none';
					var aA=aLi[index].getElementsByTagName("a");
					
				}
				aContent[index].onmouseover=aLi[index].onmouseover;
				aContent[index].onmouseout=aLi[index].onmouseout;
				
			})(i);
		}

	};	
	exports.cateDrogAll=function(sClass){
		var aTab=getByClassName(document,sClass);
		for(var i=0;i<aTab.length;i++){
			exports.tab(aTab[i]);	
		}
	};
});