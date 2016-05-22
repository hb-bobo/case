/*调用格式jsonp({
                "url":"http://xxxx",
                "data":{"wd":"keyword"},
                "cdkey":"xx",
                "time":1000, 选填
                "success":function(){},
                "error":function(){}
                })*/
define(function(require,exports,module){
    exports.jsonp=function (optional){
        optional=optional||{};
        if(!optional.url) return;
        optional.cbkey=optional.cbkey||"cd";
        optional.time=optional.time||0;
        optional.success=optional.success||null;
        optional.error=optional.error||null;
        
        //var cbValue="jsonp"+Math.random();
        //cbValue=cbValue.replace(".","") 字符串一但创建无法改变，得赋值，所以下面加括号
        //optional.data[optional.cdkey]=("jsonp"+Math.random()).replace(".","");//去随机数小数点不然报错
        window[optional.cbkey]=function(json){//网络返回一个json，window.是为了此函数执行完后可以调用传进来的success函数
            optional.success&&optional.success(json);
            document.getElementsByTagName('head')[0].removeChild(oScript)//移除刚刚被创建的<script>节点
            //window[optional.cbkey]=null;//为了性能
            clearTimeout(timer);
        }
        var arr=[];
        for(var key in optional.data){
            arr.push(key+"="+encodeURIComponent(optional.data[key]));
        }

        //创建<script>并每次的Url不一样才会每次都请求
        //optional.url+="?"+arr.join("&");
        var oScript=document.createElement("script");
        oScript.src=optional.url;
        document.getElementsByTagName('head')[0].appendChild(oScript);
        if(optional.time){
            var timer=setTimeout(function(){
                window[optional.cbkey]=function(){//如果超时回调会找不到此函数，所以要把window[optional.data[optional.cdkey]]引到这个函数
                    optional.error && optional.error();
                    document.getElementsByTagName('head')[0].removeChild(oScript)//移除刚刚被创建的<script>节点
                    window[optional.cbkey]=null;//为了性能
                    clearTimeout(timer);
                }
            },optional.time)
        }
    }
})