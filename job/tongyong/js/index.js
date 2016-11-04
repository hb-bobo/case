/*取localStorage*/

/*$(".photo-list>img").each(function(index,item){
    if(localStorage.getItem("defectPhoto"+index)!=""){
        this.src=localStorage.getItem("defectPhoto"+index);
    }
})*/    
/*取cookie*/
/*$(".mustInput").each(function(index,item){
    if(getCookie(this.id)!=""){
        this.value=getCookie(this.id);         
    }else{
        return false;
    }
 }) */
/*表单提醒*/
function remind(option){
    var obj=option.obj.parentNode.querySelector(".input-remind");
    var span=obj.children[0];
    var text=option.text||"";
    span.innerHTML=text;
    obj.style.opacity="1";
    obj.style.display="block"; 
    setTimeout(function(){
        obj.style.opacity="0";
        setTimeout(function(){
            obj.style.display="none";
        },1000)
    },1500);        

}
function city2(option){
    var cityData=option.cityData,
        parentCode=option.parentCode,
        list=[];
    if(cityData && parentCode){
        for(var i=0;i<cityData.length;i++){
            if(parentCode==cityData[i].parentCode){
                list.push(cityData[i]);
            }
        }
    }else{
        list.push({name:""});
    }
    return list;
}

/*阻止微信下拉*/
function preventTouch(ev) {
    if(this.scrollTop<0){
        ev.preventDefault();
        return false;
    }
}
document.addEventListener('touchmove', function(ev){
    preventTouch.call(this,ev)
},false);

/*var overscroll = function(el) {
  el.addEventListener('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight;
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      el.scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
  });
  el.addEventListener('touchmove', function(evt) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true;
  });
}
overscroll(document.querySelector('.scroll'));
document.body.addEventListener('touchmove', function(evt) {
  //In this case, the default behavior is scrolling the body, which
  //would result in an overflow.  Since we don't want that, we preventDefault.
  if(!evt._isScroller) {
    evt.preventDefault();
  }
});*/

/*轮播图*/ 
jQuery.fn.slider=function(){
    var $sliderMain=$(this).find(".slider-main"),//"ul"
        $sliderLi=$sliderMain.children(),
        $sliderNav=$(this).find(".slider-nav").children(),
        rem=parseInt($("html").css("fontSize")),
        //x=$(".wrap").offset().left/rem;
        x=0;
    $sliderMain.on("touchstart",function(ev){
        //再次触摸的时候去掉动画
        $sliderMain.css({transition:"none"});
        //算出rem为单位的偏移量
        var disX=ev.targetTouches[0].pageX/rem-x;
        function fnMove(ev){   
            x = ev.targetTouches[0].pageX/rem - disX;            
            $sliderMain.css({"transform":"translateX("+x+"rem)"});
        }
        function fnEnd(ev){
            $sliderMain.off("touchmove",fnMove,false);
            $sliderMain.off("touchend",fnEnd,false);
            /*确定显示第几个*/
            var n = Math.round(-x/($sliderLi.eq(0).width()/rem));
            if(n < 0){
                n = 0;
            } else if(n >= $sliderLi.length){
                n = $sliderLi.length - 1;
            }
            $sliderMain.css({"transition":"transform 0.7s ease"});
            x = -n*($sliderLi.eq(0).width()/rem);
            $sliderMain.css({"transform":"translateX("+x+"rem)"});
            /*原点样式*/
            $sliderNav.removeClass("act");
            $sliderNav.eq(n).addClass("act");      
        }
        $sliderMain.on("touchmove",fnMove,false);
        $sliderMain.on("touchend",fnEnd,false);
        return false;
    })
}
/*tap*/
jQuery.fn.tap=function(fn){
    var start =0,stop=0,count=0,dis=0;
    $(this).each(function(index,item){
        item.addEventListener("touchstart",fnStar,false);
        item.addEventListener("touchmove",fnMove,false);
        item.addEventListener("touchend",fnEnd,false);
        function fnStar(ev){
            start = Date.now();
            dis=0;                
        }
        function fnMove(){
            dis++;
        }
        function fnEnd(ev){
            stop = Date.now();
            var oSrc=ev.srcElement||ev.target;
            if(dis<2 && count==0){
                count++;
                item.removeEventListener("touchstart",fnStar);
                item.removeEventListener("touchmove",fnMove);
                item.removeEventListener("touchend",fnEnd);
                fn.call(item);                
            }

        }
    })
}
/*提醒框*/
function forbidBox(arg){
    if(arg=="show"){
        this.parentNode.style.border="1px solid red";
    }else{
        this.parentNode.style.border="none";
        this.parentNode.style.borderBottom="1px solid rgba(234,234,234,1)";
    }
}
/*弹出框/模态框(h5)*/
function modal(obj){
    "use strict";
    this.modal=obj||console.log("未传obj");
    this.modalContent=obj.querySelector(".modal-content");
    this.rem=parseInt(getComputedStyle(document.querySelector("html"),false).fontSize);
    var _this=this;
    this.modal.addEventListener("touchstart",function(ev){
        _this.hide(ev); 
        ev.preventDefault();
        return false;               
    },false);
}
modal.prototype={
    constructor:modal,
    hide:function(ev){
        /*srcElement*/
        var oSrc=ev.srcElement||ev.target;
        if(!this.modalContent.contains(oSrc)){
            this.modal.style.display="none";
        }
        return false;  
    },
    show:function(){
        this.modal.style.display="block";
    }
}
/*滑动选框*/
function slideModal(obj){
    modal.call(this,obj);
    this.oUl=obj.querySelector(".modal-option");
    this.aLi=this.oUl.children;
    this.y=0;//Y轴便宜距离
    this.disY=0;
    var  _this=this;//构造函数
    this.oUl.addEventListener("touchstart",function(ev){               
        _this.drop(ev);
    },false)

}
/*指正构造函数和继承modal构造函数的方法*/
inheritPrototype(modal,slideModal);

slideModal.prototype.drop=function(ev){
    this.disY=ev.targetTouches[0].pageY/this.rem-this.y; 
    this.oUl.style.transition="none";
    var start1=ev.targetTouches[0].pageY,
        start2=0,
        _this=this,//构造函数      
        lastY=0,
        speedY=0,
        /*向上最大偏移量*/
        maxY=this.oUl.offsetHeight/this.rem-this.oUl.parentNode.offsetHeight/this.rem+0.4;    
    function fnMove(ev){
        /*记录偏移距离*/        
        _this.y = ev.targetTouches[0].pageY/_this.rem - _this.disY;
        /*到达最大偏移量就==最大偏移量，向上为负数*/ 
        restriction(); 
        _this.oUl.style.transform="translateY("+_this.y+"rem)";
        start2=ev.targetTouches[0].pageY;
        /*求速度*/
        speedY = _this.y-lastY;
        lastY=_this.y;
               
    }
    function fnEnd(ev){
        /*解除事件绑定，不然会多次运行*/
        _this.oUl.removeEventListener("touchmove",fnMove,false);
        _this.oUl.removeEventListener("touchend",fnEnd,false);

        _this.oUl.style.transition="transform 0.7s ease-out";         
       var disMove=start2-start1;//判断移动方向
       /*惯性移动，小于0为上*/
        disMove<0?(_this.y=_this.y+speedY*5):(_this.y=_this.y+speedY*5);
        restriction(); 
        if(_this.y>0.2){          
          _this.oUl.style.transform="translateY(0rem)"; 
          _this.y=0;
        }else if(-_this.y>maxY){
          _this.y=-maxY;
        }
        _this.oUl.style.transform="translateY("+_this.y+"rem)"; 
    }
    function restriction(){
        -_this.y>maxY?_this.y=-maxY-0.5:null; //下拉限制
        _this.y>0.5?_this.y=0.5:null; 
    }
    this.oUl.addEventListener("touchmove",fnMove,false);
    this.oUl.addEventListener("touchend",fnEnd,false);
    ev.preventDefault();
    return false;
}

/*返回上一页*/
var aBack=document.querySelectorAll(".btn-prev");
	for(var i=0,len=aBack.length;i<len;i++){
		aBack[i].onclick=function(){
			window.history.back(-1);
			return false;
		}
	}


/*获取当前时间*/
function getTime(){
    var d=new Date();			    
    var year=d.getFullYear();
    var month=d.getMonth()+1;
    month=fillZero(month);
    var date=d.getDate();
    date=fillZero(date);
    return year+"-"+month+"-"+date;
}
function fillZero(n){
    return n<10?"0"+n:""+n;
}
/*设置cookie*/
/*function getCookie(name){
    var str = document.cookie;
    if(str=="") return false;
    var arr=str.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('='); 
        if(arr2[0]==name){
            return unescape(arr2[1]);
        }
    }
    return '';
}*/

function setCookie(name,value,timeout){
    var d=new Date();
    d.setDate(d.getDate()+timeout);//timeout为天数
    document.cookie=name+'='+value+';expires='+d;
}
/*寄生组合式继承*/
function inheritPrototype(superType,subType){     
    var prototype = object(superType.prototype);    //是创建超类型原型的一个副本
    prototype.constructor = subType;              //增强对象,是为创建的副本添加 constructor 属性性，从而弥补因重写原型而失去的默认的 constructor 属性     
    subType.prototype = prototype;               //指定对象,将新创建的对象（即副本）赋值给子类型的原型
} 
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}
