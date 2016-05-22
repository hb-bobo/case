define(function(require,exports,module){
	//分类栏目数据写入（onmouseenter后加载一次）
	exports.category_main=function(id){
		var oDrog=document.getElementById(id);
		var okk=false;
		oDrog.onmouseenter=function(){
			require("seajs/jsonp.js").jsonp({
				"url":"public/js/categoryData.js",
				"cbkey":"getCategoryCallback",
				"success":function(json){
					if(require("seajs/getCategoryDate.js").getCategoryDate(json)){
						okk=true;
					}			
				}
			});	
			oDrog.onmouseenter=null;
		}
		//categorys 分类栏目
		oDrog.onmouseover=function(){
			if(okk){//数据加载完才可以执Li的事件,不然aContent抓不到
				require("seajs/categoryTab.js").cateDrog("cateDrog");				
			}
		}	
	}

})