define(function(require,exports,module){
	var jsonp=require("seajs/jsonp.js").jsonp;
	exports.hotword=function(){
		var oHotWord=document.getElementById('hotwords');
		
		jsonp({
			"url":"http://ai.jd.com/index/hotWords.php?callback=cathot&pin=0&uuid=109911794",
			"cbkey":"cathot",
			"success":function(json){
				var arr=json.data;
				var str="";
				//console.log(arr)
				for (var i = 0; i < 9; i++) {
					if(arr[i].c==1){
						c='style="color:rgb(200, 22, 35);;"';
					} 
					else{
						c="";
					}
					str+=' <a '+c+'href="javascritp:;" target="_blank"> '+arr[i].n+' </a>  ';			
					
				}
				oHotWord.innerHTML=str;
			}
		})
	}
})