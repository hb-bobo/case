define(function(require,exports,module){
	var getByClassName=require("seajs/common.js").getByClassName;
	exports.clock=function(){
			var oDiv=document.getElementById('clock');
			var oHour=getByClassName(oDiv,"hour")[0];
			var oMin=getByClassName(oDiv,"min")[0];
			var oSec=getByClassName(oDiv,"sec")[0];
			function setTime(){
				var date=new Date();
				var t=date.getTime();
				var hour=date.getHours();
				var minute=date.getMinutes();
				var second=date.getSeconds();
				var millisecond=date.getMilliseconds();
				//console.log(hour,minute,second)
				//30=360/12刻度  6=360/60;
				exports.setStyle3(oHour,"transform","rotate("+(hour*30+minute/60*12)+"deg)");
				exports.setStyle3(oMin,"transform","rotate("+(minute*6+second/60*6)+"deg)");
				exports.setStyle3(oSec,"transform","rotate("+(second*6+millisecond/1000*6)+"deg)");
			}
			setTime();
			setInterval(setTime,100)
	}

	exports.setStyle3=function(obj,name,value){
		var str=name.charAt(0).toUpperCase()+name.substring(1);
		//var str=name.replace(name.charAt(0),function(s){s.toUpperCase()})
		//console.log(value)
		obj.style["Webkit"+str]=value;
		obj.style["Moz"+str]=value;
		obj.style["ms"+str]=value;
		obj.style["O"+str]=value;
		obj.style[name]=value;

	}
})