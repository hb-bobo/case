define(function(require,exports,module){
	exports.getCategoryDate=function(json){		
		var arr=json.data;
		var oCat=document.getElementById('categorys');
		var oDorp=oCat.children[1].children[1];		
		var category="";			
		//console.log(arr)
		for(var i=0;i<arr.length;i++){
			var arr2=arr[i].s;
			var arrChannels=arr[i].t;
			var arrBrands=arr[i].b;
			var arrPromotions=arr[i].p;
			var dl="";	
			var channels="";
			var subitems="";
			var brands="";
			var promotions=""; 	
			//var liContent='';
			//console.log(arr2);
			for(var j=0,len=arrChannels.length;j<len;j++){
				var strChannels=arrChannels[j].split("|")[1];
				//console.log(strChannels);
				channels+='<a href="javascript:;">'+strChannels+'<i>></i></a>'
			}
			for(var j=0,len=arrBrands.length;j<len;j++){
				var strBrandsSrc=arrBrands[j].split("|")[2].match(/\/[A-z0-9]{1,}\.\w{3}/g).join("");
				brands+='<a href="javascript:;"><img src="./img'+strBrandsSrc+'" alt=""></a>';
			}
			for(var j=0,len=arrPromotions.length;j<len;j++){
				var strPromotionsSrc=arrPromotions[j].split("|")[2].match(/\/[A-z0-9]{1,}\.\w{3}/g).join("");
				promotions+='<a href="javascript:;"><img src="./img'+strPromotionsSrc+'" alt=""></a>';
			}
			for(var j=0;j<arr2.length;j++){
				var arrLi=arr2[j];
				
				//console.log(arrLi);
				for(var t=0,Tlen=arrLi.s.length;t<Tlen;t++){
					var strDt=arrLi.s[t].n.split("|")[1];
					var dt="";
					var dd="";
					dt='<dt><a href="javascript:;">'+strDt+'<i>></i></a></dt>'
					//console.log(strDt);
					//console.log(arrLi.s[t]);
					for(var d=0,Dlen=arrLi.s[t].s.length;d<Dlen;d++){
						var strDd=arrLi.s[t].s[d].n.split("|")[1];
						//var dd=arrLi.s[t].s[d];
						//console.log(strDd);
						dd+='<a href="javascript:;">'+strDd+'</a>'
					}
					dl+='<dl class="fore'+(t+1)+'">'+dt+'<dd>'+dd+'</dd></dl>';
				}
				
			}
			category+='<div id="category-item-'+(i+1)+'">\
						<div class="item-channels">'+channels+'</div>\
						<div class="subitems">'+dl+'</div>\
						<div class="brands">'+brands+'</div>\
						<div class="promotions">'+promotions+'</div>\
					</div>';
		}
		
		oDorp.innerHTML=category;
		return true;

	}
})