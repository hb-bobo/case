	var oCent=document.getElementById('content');
	var oOdd=getByClassName(oCent,'odd');
	var oEven=getByClassName(oCent,'even');
	for(var i=0;i<oOdd.length;i++){
		showLeft(oOdd[i]);
	}
	
	for(var i=0;i<oEven.length;i++){
		showRight(oEven[i]);
	}
	
	
	function showLeft(oOdd){
		var oShowLeft=getByClassName(oOdd,'show-left')[0];
		var oddTwo=getByClassName(oShowLeft,'two')[0];
		oShowLeft.onmouseover=function(){
			//oMg.style.left="150px";
			animate(oddTwo,{left:150},{duration:1000})
		}
		oShowLeft.onmouseout=function(){
			//oMg.style.left="0";
			animate(oddTwo,{left:0},{duration:1000})
		}
	}
	function showRight(oEven){
		var oShowRight=getByClassName(oEven,'show-right')[0];
		var evenTwo=getByClassName(oShowRight,'two')[0];
		oShowRight.onmouseover=function(){
			//oMg.style.left="150px";
			animate(evenTwo,{right:150},{duration:1000})
		}
		oShowRight.onmouseout=function(){
			//oMg.style.left="0";
			animate(evenTwo,{right:3},{duration:1000})
		}
	}

function animate(obj,json,optional){
	//1整理可选参数
	optional=optional||{};
	optional.duration=optional.duration||300;
	optional.complete=optional.complete||null;
	optional.easing=optional.easing||'ease-out';
	//2整理start/dis
	var start={};
	var dis={};
	for(var key in json){
		start[key]=parseFloat(getStyle(obj,key));//getStyle?
		dis[key]=parseFloat(json[key])-start[key];	
	}
	var count=Math.round(optional.duration/30);
	var n=0;
	
	//3.定时器跑起来	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		
		n++;
		
		for(var key in json){
			switch(optional.easing){
				case 'linear':
					var a=n/count;
					var cur=start[key]+dis[key]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[key]+dis[key]*a*a*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[key]+dis[key]*(1-a*a*a);
					break;
			}
		
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+cur*100+')';	
			}else{
				obj.style[key]=cur+'px';
			}
		}
		
		
		if(n==count){
			clearInterval(obj.timer);
			optional.complete && optional.complete();	
		}
	},30);
};
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];	
	}else{
		return getComputedStyle(obj,false)[attr];//高	
	}
};
function getByClassName(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var aEle=oParent.getElementsByTagName('*');
		var result=[];
		for(var i=0;i<aEle.length;i++){
			var arr=aEle[i].className.split(' ');
			for(var j=0;j<arr.length;j++){
				if(arr[j]==sClass){
					result.push(aEle[i]);
					break;
				}	
			}
		}
		return result;
	}
};		