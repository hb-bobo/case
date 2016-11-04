 /*计算大小*/
  var deviceWidth=document.documentElement.clientWidth;
  var deviceHeight=document.documentElement.clientHeight;
  if(deviceWidth>deviceHeight && /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)){
    deviceWidth=deviceHeight;
  }
 
  function rem(){
    var newWidth=document.documentElement.clientWidth,
        newHeight=document.documentElement.clientHeight;
    //旋转屏幕后取高的宽
    if(newWidth>newHeight && newWidth!=deviceWidth) newWidth=deviceWidth;
    newWidth>750?newWidth=750:newWidth=newWidth;   
    document.documentElement.style.fontSize = Math.round(100/750*newWidth)+ "px";

  }
  rem();
  window.onresize=function(){
    rem();
  }
