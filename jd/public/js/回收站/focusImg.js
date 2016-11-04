
define(function(require,exports,module){
	
	var getByClass=require('common.js').getByClass;
	var move=require('move.js').move;
	
	exports.focusImg=function(id){
		var oDiv=document.getElementById(id);
		var aHead=oDiv.children[1].getElementsByTagName('li');
		var aContent=oDiv.children[0].getElementsByTagName('li');
		var oPointer=getByClass(oDiv,'fi_pointer')[0];	
		oPointer.style.zIndex=99999;
		
		var now=0;
		
		for(var i=0;i<aHead.length;i++){
			(function(index){
				aHead[i].onclick=function(){
					now=index;
					tab();	
				};	
			})(i);
		}
		
		function tab(){
			for(var i=0;i<aContent.length;i++){
				//aContent[i].style.opacity=0;
				move(aContent[i],{opacity:0},{time:1000});
			}
			//oPointer.style.left=this.offsetLeft+'px';
			move(oPointer,{left:aHead[now].offsetLeft});
			//aContent[index].style.opacity=1;
			move(aContent[now],{opacity:1},{time:1000});	
		}
		
		setInterval(next,2000);
		function next(){
			now++;
			now%=aHead.length;
			tab();	
		}
	};	
});