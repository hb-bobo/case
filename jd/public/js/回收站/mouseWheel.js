

define(function(require,exports,module){
	var getByClass=require('common.js').getByClass;
	exports.drag=function(id){
		var oWrap=document.getElementById(id);
		var oBar=getByClass(oWrap,'rollBar')[0];
		var oBarParent=getByClass(oWrap,'rollBox')[0];
		var oUp=getByClass(oWrap,'rollBarUp')[0];
		var oDown=getByClass(oWrap,'rollBarDown')[0];
		var oContent=getByClass(oWrap,'movieBox_msg')[0];
		var timer=null;
		
		oBar.onmousedown=function(ev){
			var oEvt=ev||event;
			var disY=oEvt.clientY-oBar.offsetTop;
			document.onmousemove=function(ev){
				var oEvt=ev||event;
				var t=oEvt.clientY-disY;
				
				scrollTop(t);
				
			};	
			document.onmouseup=function(){
				document.onmousemove=document.onmouseup=null;	
			};
			
			return false;
		};
		
		oDown.onmousedown=function(){
			timer=setInterval(function(){
				var t = oBar.offsetTop;	
				t+=10;
				scrollTop(t);	
			},30);
		};
		oDown.onmouseup=oUp.onmouseup=function(){
			clearInterval(timer);
		};
		oUp.onmousedown=function(){
			timer=setInterval(function(){
				var t = oBar.offsetTop;	
				t-=10;
				scrollTop(t);
			},30);
		};

		function scrollTop(t){
			if(t<oUp.offsetHeight) t=oUp.offsetHeight;//限定
			if(t>oBarParent.offsetHeight-oBar.offsetHeight-oUp.offsetHeight)
				t=oBarParent.offsetHeight-oBar.offsetHeight-oUp.offsetHeight;
			oBar.style.top=t+'px';	//使用
			
			//控制内容	a/b=c/d
			
			oContent.style.top=(oBar.offsetTop-oUp.offsetHeight)/(oBar.offsetTop-oBarParent.offsetHeight)*(oContent.offsetHeight-oWrap.offsetHeight)+'px';	
		}
	};	
});