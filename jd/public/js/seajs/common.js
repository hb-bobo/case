

define(function(require,exports,module){
	
	exports.getStyle=function(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];	
		}else{
			return getComputedStyle(obj,false)[attr];//高	
		}
	};
	
	exports.getByClassName=function(oParent,sClass){
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
	exports.addEvent=function(){
       function removeEvent(obj,sEvt,fn){
            if(obj.removeEventListener){
                obj.removeEventListener(sEvt,fn,false);
            }else{
                obj.detachEvent('on'+sEvt,fn);//ie低
            }
        }

        function addEvent(obj,sEvt,fn){
            if(obj.addEventListener){
                obj.addEventListener(sEvt,fn,false);
            }else{
                obj.attachEvent('on'+sEvt,fn);//ie低
            }
        }
    }
    exports.getPos=function(obj){
        var l=0,t=0;
        while(obj){
            //for(;obj;){
            //找    累加 l
            l+=obj.offsetLeft; //取到定位父级的距离
            t+=obj.offsetTop;  //取到定位父级的距离
            obj=obj.offsetParent;  //把obj的定位父级变成obj

        }
        return {left:l,top:t};
    }
    exports.addClass=function(obj,sClass){
    	var re=new RegExp('\\b'+sClass+'\\b');
	    if(!re.test(obj.className)){
	        obj.className=obj.className+' '+sClass;

	    }
    }
    exports.removeClass=function(obj,sClass){
    	var re = new RegExp('\\b'+sClass+'\\b');
	    if(re.test(obj.className)){
	        obj.className=obj.className.replace(re,'');
	        //obj.className=obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');   
	         obj.className=obj.className.match(/\S+/g).join(' ');
	    }
    }
    exports.addEvent=function(){
       function removeEvent(obj,fn,sEvt){
            if(obj.removeEventListener){
                obj.removeEventListener(sEvt,fn,false);
            }else{
                obj.detachEvent('on'+sEvt,fn);//ie低
            }
        }

        function addEvent(obj,fn,sEvt){
            if(obj.addEventListener){
                obj.addEventListener(sEvt,fn,false);
            }else{
                obj.attachEvent('on'+sEvt,fn);//ie低
            }
        }
    }
});