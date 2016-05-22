define(function(require,exports,module){
	exports.ajax=function (optional){//url,data,type,timeout,sucFn,failFn
    optional=optional||{};
    optional.data = optional.data || {};
    optional.type = optional.type || "get";
    optional.timeout = optional.timeout || 0;

    var arr = [];
    optional.data.t=Math.random();
    for(var key in optional.data){//optional.data{act:"add",user:XXX,pass:XXX}
        arr.push(key+"="+encodeURIComponent(optional.data[key]))//encodeURIComponent转编码，中文
    }
    var str=arr.join("&")//str ="act:"add"&user:XXX&pass:XXX"
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");//ie56
    }
    alert(optional.url)
    if(optional.type=="get"){
        oAjax.open("get",optional.url/*+"?"+str*/,true);
        oAjax.send();
    }else{
        oAjax.open("post",optional.url,true);
        oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        oAjax.send(str);
    }
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4) {
            if ((oAjax.status >= 200 && oAjax.status < 300) || oAjax.status == 304) {
                clearTimeout(timer);//成功了就清除超时
                optional.sucFn&&optional.sucFn(oAjax.responseText);

            } else {
                optional.failFn && optional.failFn(oAjax.status);
            }
        }
    }
    if (optional.timeout) {
        var timer = setTimeout(function () {
            alert("超时了");
            oAjax.abort(); //终止加载
        }, optional.timeout)
    }


}
})