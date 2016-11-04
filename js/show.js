 !function show(){
 		var $aDiv=$("#show .portfolio-item");
		var count=0;
		var data=[
				{img:"cube.png",herf:"css3/cube.html",content:"立方体"},		
				{img:"clock.png",herf:"css3/clock.html",content:"css3时钟"},
				{img:"yingyongtuozhuai.png",herf:"other/yingyongtuozhuai.html",content:"app拖拽"},
				{img:"fanye.png",herf:"css3/fanye.html",content:"翻页效果"},				
				{img:"screensave.png",herf:"css3/screensave.html",content:"屏保"},								
				{img:"taiyangyinying.png",herf:"tab/taiyangyinying.html",content:"太阳阴影"},
				{img:"wenzisaomiao.png",herf:"css3/wenzisaomiao.html",content:"文字扫描"},
				{img:"3Dtab.png",herf:"css3/3Dtab.html",content:"3D轮播"},
				{img:"lagou.png",herf:"css3/lagou.html",content:"拉钩官网"},
				{img:"3Dhuanrao.png",herf:"css3/3Dhuanrao.html",content:"3D环绕"},
				{img:"yuanxingjindutiao.png",herf:"css3/yuanxingjindutiao.html",content:"圆形进度条"},
				{img:"fantan.png",herf:"other/fantan.html",content:"反弹导航"},
				{img:"fangdalunbo.png",herf:"tab/fangdalunbo.html",content:"放大轮播"},
				{img:"yuan.png",herf:"other/yuan.html",content:"圆菜单"},
				{img:"appleMenu.png",herf:"other/appleMenu.html",content:"苹果菜单"},
				{img:"football.png",herf:"other/football.html",content:"反弹运动"},
				{img:"koufenqin.png",herf:"tab/koufenqin.html",content:"口风琴"},
				{img:"fangdajing.png",herf:"other/fangdajing.html",content:"放大镜"},				

				];
		var temp='<div class="hover-bg">\
                            <a href="./demo/'+data[count].herf+'">\
                                <div class="hover-text">\
                                    <h5>'+data[count].content+'</h5>\
                                     <p class="lead">'+data[count].content+'</p>\
                                    <div class="hline"></div>\
                                </div>\
                                <img src="./demo/img/'+data[count].img+'" class="img-responsive" alt="...">\
                            </a>\
                        </div>';
        tabNext();
		function tabNext(){//换数据
			$aDiv.each(function(){
				if(count==data.length) count=0;
				$(this).html(
					'<div class="hover-bg">\
                            <a href="./demo/'+data[count].herf+'">\
                                <div class="hover-text">\
                                    <h5>'+data[count].content+'</h5>\
                                     <p class="lead">'+data[count].content+'</p>\
                                    <div class="hline"></div>\
                                </div>\
                                <img src="./demo/img/'+data[count].img+'" class="img-responsive" alt="...">\
                            </a>\
                        </div>');
				count++;
			})				
		}
		$("#btnTab").click(function(){
			tabNext();
		})
 }()