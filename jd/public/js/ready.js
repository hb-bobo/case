function ready(fn){
	if(document.addEventListener){//高版本
            document.addEventListener("DOMContentLoaded",fn,false);

    }else{//低版本ie678
        document.onreadystatechange=function(){
            if(document.readyState=='complete'){
				fn();
			}
        }
    }
}
