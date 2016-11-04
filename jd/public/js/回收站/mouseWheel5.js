

define(function(require,exports,module){
	
	var getByClass=require('common.js').getByClass;
	
	exports.drag=function(obj){
		
		var oWrap=obj;
		var oBar=getByClass(oWrap,'rollBar')[0];
		var oBarParent=getByClass(oWrap,'rollBox')[0];
		var oUp=getByClass(oWrap,'rollBarUp')[0];
		var oDown=getByClass(oWrap,'rollBarDown')[0];
		var oContent=oWrap.children[1];
		var timer=null;
		
		oBar.onmousedown=function(ev){
			var oEvt=ev||event;
			var disY=oEvt.clientY-oBar.offsetTop;
			document.onmousemove=function(ev){
				var oEvt=ev||event;
				var t=oEvt.clientY-disY;
				
				scrollTop(oWrap,t);
				
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
	};	
	
	exports.addMouseWheel=function(){
		if(typeof arguments[0]=='string'){
			var oWrap=document.getElementById(arguments[0]);	
		}else if(typeof arguments[0]=='object'){
			var oWrap=arguments[0];	
		}
		
		var oBar=getByClass(oWrap,'rollBar')[0];
		var oBarParent=getByClass(oWrap,'rollBox')[0];
		var oUp=getByClass(oWrap,'rollBarUp')[0];
		var oDown=getByClass(oWrap,'rollBarDown')[0];
		var oContent=oWrap.children[1];
		
		if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
			//ff
			oWrap.addEventListener('DOMMouseScroll',fnWheel,false);	
		}else{
			//other	
			oWrap.onmousewheel=fnWheel;
		}
		
		function fnWheel(ev){
			var oEvt=ev||event;
			
			if(oEvt.wheelDelta){
				var down=oEvt.wheelDelta<0?true:false;	
			}else{
				var down=oEvt.detail>0?true:false;
			}
			//alert(down);
			
			var t=oBar.offsetTop;
			if(down){
				t+=10;	
			}else{
				t-=10;
			}
			scrollTop(oWrap,t);
			
			oEvt.preventDefault && oEvt.preventDefault();
			return false;
		}
	};
	
	exports.initScroll=function(sClass){
		var aScroll=getByClass(document,sClass);
		for(var i=0;i<aScroll.length;i++){
			exports.drag(aScroll[i]);
			exports.addMouseWheel(aScroll[i]);	
		}	
	};	
	
	function scrollTop(oWrap,t){
		var oBar=getByClass(oWrap,'rollBar')[0];
		var oBarParent=getByClass(oWrap,'rollBox')[0];
		var oUp=getByClass(oWrap,'rollBarUp')[0];
		var oDown=getByClass(oWrap,'rollBarDown')[0];
		var oContent=oWrap.children[1];
		
		if(t<oUp.offsetHeight) t=oUp.offsetHeight;//限定
		if(t>oBarParent.offsetHeight-oBar.offsetHeight-oUp.offsetHeight)
			t=oBarParent.offsetHeight-oBar.offsetHeight-oUp.offsetHeight;
		oBar.style.top=t+'px';	//使用
		
		//控制内容	a/b=c/d
		
		oContent.style.top=(oBar.offsetTop-oUp.offsetHeight)/(oBar.offsetTop-oBarParent.offsetHeight)*(oContent.offsetHeight-oWrap.offsetHeight)+'px';	
	}
	
});