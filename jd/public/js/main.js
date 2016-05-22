seajs.config({
    alias: { '$': 'jquery-1.7.2.js' }
});
define(function(require,exports,module){
    var $=require("$");
  	var getByClassName=require("seajs/common.js").getByClassName;
  	var animate=require("seajs/animate.js").move;
    var getPos=require("seajs/common.js").getPos;

    /*lazy*/
      var aLazy=getByClassName(document,"lazy-fn");
      var aLazyH=[];//把每个lazy-fn 的obj和top存起来
      for(var i=0,len=aLazy.length;i<len;i++){
          aLazyH.push({obj:aLazy[i],top:getPos(aLazy[i]).top,height:aLazy[i].offsetHeight});
      }
      window.onscroll=window.onresize=function(){
          var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
          var clientH=document.documentElement.clientHeight;
          var nH=scrTop+clientH;//窗口高加滚动高
          //console.log(aLazyH+"|"+nH)
          //console.log(nH+"|"+aLazyH[0])
          for(var i=0;i<aLazyH.length;i++){
              if(aLazyH[i].top<nH && aLazyH[i].top>scrTop-aLazyH[i].height){//判断是否暴露在窗口
                  require("data/data.js")[aLazyH[i].obj.getAttribute("data-id")](aLazyH[i].obj);
                  aLazyH.splice(i,1);//加载完数据从数组中删除
              }
          }
          if(aLazyH.length==0){//加载完就清除时间
              window.onscroll=window.onresize=null;
          }
      }




  	/*index*/
  	//top下拉
  	if(window.navigator.userAgent.toLowerCase().indexOf('msie 6') != -1){
  		  require("seajs/dorpdown.js").dorpAll("dropdown");
  	}
  	//热词
  	require("seajs/getData.js").hotword();
  	//focus 加载category数据完成后给li加onmouseover事件
  	require("seajs/category-main.js").category_main("cateDrog");

  	//slider focus轮播图 
  	var oSlider=document.getElementById('focus');
  	var aCli=getByClassName(oSlider,"slider-main")[0].children;
  	var aHli=getByClassName(oSlider,"slider-nav")[0].children;
  	var oExtra=getByClassName(oSlider,"slider-extra")[0];
  	var oPage=oExtra.children[1];
  	var oPrev=oPage.children[0];
  	var oNext=oPage.children[1];
  	var num=0;
    var arrFocus=['<a target="_blank" href="javascript:;"><img src="./img2/571d8e44N9f041e2d.jpg" alt=""/></img></a>',
                   '<a href="javascript:;"><img src="./img2/5721bd89N78d959df.jpg" alt=""></img></a>',
                   '<a href="javascript:;"><img src="./img2/5721ed7fN9813fe04.jpg" alt=""></img></a>',
                   '<a href="javascript:;"><img src="./img2/572303caNb8af94ed.jpg" alt=""></img></a>',
                   '<a href="javascript:;"><img src="./img2/57198611N2f564ca8.jpg" alt=""></img></a>',
                   '<a href="javascript:;"><img src="./img2/57232932N4df4c058.jpg" alt=""></img></a>'
                ]
  	tab();
    var timer=null;
  	oPrev.onclick=function(){
  		    num--;
          if(num<0) num=aCli.length-1;
          tab();
  	}
  	oNext.onclick=function(){
  		  num++;
     		num=num%aCli.length;
     		tab();
    }
  	function tab(){
    		for(var i=0;i<aCli.length;i++){
            	aCli[i].style.zIndex=0;
            	aHli[i].style.background="#3e3e3e";
            	animate(aCli[i],{"opacity":0},{"duration":200});	
        		aHli[i].onclick=function(){
        			num=this.innerHTML-1;
        			tab();
        		}       	
        }
        if(!aCli[num].src) aCli[num].innerHTML=arrFocus[num];//为了性能src不存在才加载图片
        aHli[num].style.background="#b61b1f";
        aCli[num].style.zIndex=1;
        animate(aCli[num],{"opacity":1},{"duration":400});
  	}
  	timer=setInterval(oNext.onclick,5000);
    oExtra.onmouseover=function(){
        clearInterval(timer);
        oPage.style.display="block";        
    }
    oExtra.onmouseout=function(){
        timer=setInterval(oNext.onclick,5000);
        oPage.style.display="none";
    }
    /*生活图标定位*/
    var aI=getByClassName(document.getElementById("lifeserv"),"ci-left");
    for (var i = 0; i < aI.length; i++) {
    	aI[i].style.backgroundPosition="0 "+-25*i+"px";
    }

    
})