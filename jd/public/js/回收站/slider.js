define(function(require,exports,module){
	var getByClassName=require("seajs/common.js").getByClassName;
	var animate=require("seajs/animate.js").move;
	var show=require("seajs/hover.js").show;
	exports.slider=function(oDiv){
		var oUl=getByClassName(oDiv,"slider-main")[0];
		var aLi=oUl.children;
		var aLiW=aLi[0].offsetWidth
		var oPage=getByClassName(oDiv,"slider-page")[0];
		var oPrev=oPage.children[0];
		var oNext=oPage.children[1];
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=aLiW*aLi.length+"px";
		var ready=true;
		var num=0;
		show(oDiv,oPage);
		oPrev.onclick=function(){
			if(!ready) return;
			ready=false;
			num--;
			if(num<0) {
				oUl.style.left=-oUl.offsetWidth/2+"px";
				num=aLi.length/2-1;	
			}						
			tab();
		}
		oNext.onclick=function(){
			if(!ready) return;
			ready=false;
			num++;
			tab();
		}
		function tab(){
			animate(oUl,{"left":-num*aLiW},{"duration":1000,"complete":function(){
				if(num==aLi.length/2){
					oUl.style.left=0;
					num=0;
				}
				ready=true;
			}})
		}
	}
})