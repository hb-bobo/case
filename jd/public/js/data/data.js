define(function(require,exports,module){
	var $=require("$");
	var getByClassName=require("seajs/common.js").getByClassName;
	var animate=require("seajs/animate.js").move;
	//var addClass=require("seajs/common.js").addClass;
	exports.today=function(obj){
		var today='<div id="todays"><div class="mt mouse_p"><div class="clock-wrap"><div id="clock"><div class="hour"></div><div class="min"></div><div class="sec"></div><div class="cap"></div></div></div></div><div class="mc clearfix slider"><ul class="slider-main"style="width: 6000px; position: absolute; left: 0px;"><li><div><a href="javascript:;"><img src="img/57303b8cNf409d4fb.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/572c60faN4223ffc9.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/5735ac40Nda68632f.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/573456caNabf5d526.jpg"alt=""></a></div></li><li><div><a href="javascript:;"><img src="img/572b021dN6b0371c3.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/572b017dNbaf38379.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/56fdd89eN9085e00d.png"alt=""></a></div><div><a href="javascript:;"><img src="img/56f4fda6Ne0d3589c.jpg"alt=""></a></div></li><li><div><a href="javascript:;"><img src="img/572b0246Nb1196321.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/572b01a9Na7249e3d.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/56f50e6cN397e3416.jpg"alt=""></a></div><div><a href="javascript:;"><img src="img/5510e394N7d91092f.jpg"alt=""></a></div></li></ul><div class="slider-page"><a class="slider-prev"href="javascript:;"><</a><a class="slider-next"href="javascript:;">></a></div></div></div>';
		obj.innerHTML=today;
		$(obj).addClass("lazy-fn-done");//加载完成下面是事件

		/*today  时钟*/
	    var today=document.getElementById("todays");
	   	if(window.applicationCache){
	   		require("seajs/css3.js").clock();
	   	}else{
	   		getByClassName(today,"clock-wrap")[0].style.display="none";
	   		
	   	}
	   	var oSlider=getByClassName(today,"slider")[0];
    	require("seajs/slider.js").slider(oSlider);

	}

	exports.like=function(obj){
		var like={"encode":"gbk","success":true,"error_msg":"","latency":12,"data":[{"w":0.1105,"sku":1088243,"itemid":"","t":"统一 冰红茶（柠檬味红茶饮料） 250ml*24/箱 整箱装","jp":"25.9","mp":"","img":"jfs/t2434/205/2151491342/95729/cbf85c40/56f4e8c9N5592bfed.jpg","bn":"","spu":1088243,"tips":[],"subsku":[],"c3":1602,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1088243$index=0$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=ee26da9f75f38d968c7625569eff41c98749a66d","impr":"1","rt":"0","turl":""},{"w":0.0527,"sku":1151209,"itemid":"","t":"加多宝凉茶植物饮料利乐包250ml*16 整箱","jp":"36.9","mp":"","img":"jfs/t1960/176/1348199691/121728/b201b9d/5695fda9Na107feaf.jpg","bn":"","spu":923621,"tips":[],"subsku":[],"c3":1602,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1151209$index=1$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=7d2dee89d2a1fc290f3cb5887150a4c65231179a","impr":"1","rt":"0","turl":""},{"w":0.0431,"sku":1039795,"itemid":"","t":"威露士 有氧倍净洗洗衣液 3kg","jp":"44.9","mp":"","img":"jfs/t1492/232/999577321/81042/1ff10942/55b6e065Nace9fe65.jpg","bn":"","spu":1039795,"tips":[],"subsku":[],"c3":1662,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1039795$index=2$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=a1fd079b797a2fac08167f79f8efd101d0d763b7","impr":"1","rt":"0","turl":""},{"w":0.0406,"sku":329873,"itemid":"","t":"蓝月亮 亮白增艳洗衣液（自然清香）3kg/瓶","jp":"39.9","mp":"","img":"g15/M08/1D/1A/rBEhWlK0BZwIAAAAAAFowXHJ6SYAAHB8QJRgA8AAWjZ019.jpg","bn":"","spu":329873,"tips":[],"subsku":[],"c3":1662,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=329873$index=3$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=db254d6f1be285420a10498462d97e3319f20f1e","impr":"1","rt":"0","turl":""},{"w":0.0344,"sku":1238332,"itemid":"","t":"TP-LINK TL-WR886N 450M无线路由器（宝蓝） WIFI无线穿墙王","jp":"99.0","mp":"","img":"jfs/t307/220/1450051860/64638/1190275f/543b419eN78c7cbb0.jpg","bn":"","spu":1255738,"tips":[],"subsku":[],"c3":700,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1238332$index=4$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=eb59f14e954a7bdf8c3fba4dba69e870a9f213c3","impr":"1","rt":"0","turl":""},{"w":0.0317,"sku":1745115,"itemid":"","t":"水星（MERCURY）MW325R 300M智能wifi无线路由器增强四天线","jp":"55.0","mp":"","img":"jfs/t2878/68/552789439/49137/7dffe21b/5719d85fN62531c3b.jpg","bn":"","spu":1745115,"tips":[],"subsku":[],"c3":700,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1745115$index=5$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=c71e9379892bee9e663713bce20e1e1c0a1d4910","impr":"1","rt":"0","turl":""},{"w":0.0296,"sku":851326,"itemid":"","t":"苏菲弹力贴身棉质纤巧日用洁翼型（新）34片（新老包装加量装随机发货）","jp":"24.9","mp":"","img":"jfs/t709/263/256786866/180366/2c28e809/549a2582N1aad899b.jpg","bn":"","spu":851326,"tips":[],"subsku":[],"c3":1408,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=851326$index=6$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=6f4ff599123151cdeb97f932c88b768cdf06ea41","impr":"1","rt":"0","turl":""},{"w":0.0295,"sku":1312317,"itemid":"","t":"日本花王（Merries）婴儿纸尿裤 小号S82片（4-8kg）（日本原装进口）","jp":"109.0","mp":"","img":"jfs/t2452/103/2131037640/325648/f06d8748/569606aaN5c834057.jpg","bn":"","spu":1312316,"tips":[],"subsku":[],"c3":7057,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1312317$index=7$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=1b1ea30a3585e8a3b9a55ce95604e06688dab5aa","impr":"1","rt":"0","turl":""},{"w":0.0292,"sku":695467,"itemid":"","t":"帮宝适 Pampers 超薄干爽 婴儿纸尿裤 大号L164片【9-14kg】","jp":"199.0","mp":"","img":"jfs/t2344/288/413741291/135184/c502311f/5608b901N7f95121d.jpg","bn":"","spu":695469,"tips":[],"subsku":[],"c3":7057,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=695467$index=8$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=1739006203c4198ebe23cf9c87e5f1944780bfe1","impr":"1","rt":"0","turl":""},{"w":0.0246,"sku":923559,"itemid":"","t":"福临门 苏北米 清香米 中粮出品 大米 5kg","jp":"29.9","mp":"","img":"jfs/t2428/81/501495/81881/e5dbfd5d/55e554d4N1ed7b588.jpg","bn":"","spu":418657,"tips":[],"subsku":[],"c3":2675,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=923559$index=9$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=6662dfd1268bfe0e11b2bdf6a5b55238e506dc2c","impr":"1","rt":"0","turl":""},{"w":0.0246,"sku":885987,"itemid":"","t":"金龙鱼 东北大米 蟹稻共生 盘锦大米5KG","jp":"29.9","mp":"","img":"jfs/t1258/40/17387560/108696/aced445f/54e011deN3ae867ae.jpg","bn":"","spu":885987,"tips":[],"subsku":[],"c3":2675,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=885987$index=10$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=5db375dca3ee98a5f54122e23d6fa6856c174589","impr":"1","rt":"0","turl":""},{"w":0.0245,"sku":1058010,"itemid":"","t":"奥克斯（AUX）FS-40-A1613 电风扇/酷黑五扇叶落地扇","jp":"99.0","mp":"","img":"jfs/t2128/103/2775247823/180781/d9534da9/56f4dbc4N6e94e255.jpg","bn":"","spu":1058010,"tips":[],"subsku":[],"c3":751,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1058010$index=11$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=c857e42ce78962f5cd80256bf71eeb732b74710a","impr":"1","rt":"0","turl":""},{"w":0.0226,"sku":595936,"itemid":"","t":"艾美特(Airmate) FSW52R 遥控落地扇/电风扇","jp":"189.0","mp":"","img":"jfs/t2311/195/2183198875/75751/967d4200/56a0a245N2ee1a5b5.jpg","bn":"","spu":595936,"tips":[],"subsku":[],"c3":751,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=595936$index=12$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=13ea098877a179c18508a8eaf922a69b4bbfc648","impr":"1","rt":"0","turl":""},{"w":0.0223,"sku":10312097240,"itemid":"","t":"兰诗缇娜2016    夏季新品韩版印花蕾丝拼接雪纺衫短裤两件套- 白色. L","jp":"158.0","mp":"","img":"jfs/t2056/229/2903651014/85129/52becdf2/5721ed77Nb5949362.jpg","bn":"","spu":10312097240,"tips":[],"subsku":[],"c3":9719,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=10312097240$index=13$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=4334ed770ccb3f0dbe93f34e4edc67ce316e29b7","impr":"1","rt":"0","turl":""},{"w":0.0202,"sku":10231212177,"itemid":"","t":"首句2016夏季新品时尚文艺碎花棉麻衬衫 671 红色花 L","jp":"108.0","mp":"","img":"jfs/t2662/145/906212568/336070/99d13177/572af041N24d96366.jpg","bn":"","spu":10231212176,"tips":[],"subsku":[],"c3":9719,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=10231212177$index=14$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=63de5709204e064b39246bbb0fe30fb8b502340b","impr":"1","rt":"0","turl":""},{"w":0.0196,"sku":1142621,"itemid":"","t":"狮王（Lion）CLINICA酵素洁净立式牙膏(清新薄荷)130g","jp":"42.9","mp":"","img":"jfs/t1975/230/1440936840/54598/7cf93f18/56581c2cN6ff8a947.jpg","bn":"","spu":1142621,"tips":[],"subsku":[],"c3":1405,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1142621$index=15$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=b81e72a4bb702c51201d25e7c58b62a34627bdec","impr":"1","rt":"0","turl":""},{"w":0.0184,"sku":1415976959,"itemid":"","t":"zuom 5S手机壳/水钻花语系列手机套/苹果5硅胶软壳 适用于iPhone5S/5se 玫瑰边粉花(5/5s通用)","jp":"24.0","mp":"","img":"jfs/t2527/313/566273411/312535/c2b683b5/5656a14eN9fb970a9.jpg","bn":"","spu":1415976959,"tips":[],"subsku":[],"c3":866,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1415976959$index=16$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=2610dbee47beecc83bcb3019f5493928e002449a","impr":"1","rt":"0","turl":""},{"w":0.0173,"sku":1745208,"itemid":"","t":"蒙牛 纯甄常温酸奶 200g*6 随享装","jp":"33.0","mp":"","img":"jfs/t2191/236/1478391639/245622/d162de7c/56b4a94aN5e759966.jpg","bn":"","spu":1089807,"tips":[],"subsku":[],"c3":9434,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1745208$index=17$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=15e8e1f1088b2e67f211a014e1ad126cc9820295","impr":"1","rt":"0","turl":""},{"w":0.017,"sku":1302677,"itemid":"","t":"伊利 安慕希希腊风味酸牛奶常温酸牛奶礼盒装12*205g","jp":"53.8","mp":"","img":"jfs/t2734/15/680373407/215934/3abaa748/572057daNc09b5da7.jpg","bn":"","spu":1302677,"tips":[],"subsku":[],"c3":9434,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1302677$index=18$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=a076661f0054490c32054c114710ee9c2e87b652","impr":"1","rt":"0","turl":""},{"w":0.0162,"sku":1241849,"itemid":"","t":"维达 卷纸 蓝色经典3层140g卷纸*27卷（整箱销售）","jp":"49.9","mp":"","img":"jfs/t469/14/1455928470/202694/71d0d71f/54f3c274Nad03e9a4.jpg","bn":"","spu":1813205,"tips":[],"subsku":[],"c3":1671,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1241849$index=19$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=f2b3c36de7030ef5fc0f8b0a47747cb8b63a1208","impr":"1","rt":"0","turl":""},{"w":0.015,"sku":1125276,"itemid":"","t":"清风（APP） 卷筒卫生纸 原木纯品 3层270段27卷整箱装","jp":"45.9","mp":"","img":"jfs/t2446/334/703711352/170484/1b2a12fe/56244995N94da3e99.jpg","bn":"","spu":1022141,"tips":[],"subsku":[],"c3":1671,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=1125276$index=20$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=21c9f56c714a9722cb791c8be2a958912234c597","impr":"1","rt":"0","turl":""},{"w":0.0138,"sku":206737,"itemid":"","t":"海飞丝去屑洗发水丝质柔滑型400ml（男女通用 洗发露）","jp":"49.9","mp":"","img":"jfs/t2041/134/1362760293/70020/a0a4c40f/56541554N679c007e.jpg","bn":"","spu":206750,"tips":[],"subsku":[],"c3":11922,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=206737$index=21$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=db33265aa533c8eec560728d19e91ecfa9a63dbb","impr":"1","rt":"0","turl":""},{"w":0.0136,"sku":848859,"itemid":"","t":"农夫山泉 天然饮用水4L*4桶 整箱","jp":"29.9","mp":"","img":"jfs/t2647/97/480625697/98683/8f17ce68/571585afN2598a034.jpg","bn":"","spu":848859,"tips":[],"subsku":[],"c3":10975,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=848859$index=22$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=3976dcf580a0ff39bec24f21d7727e42130cf3b0","impr":"1","rt":"0","turl":""},{"w":0.0132,"sku":952843,"itemid":"","t":"怡宝纯净水4.5L*4桶 整箱","jp":"28.9","mp":"","img":"jfs/t2092/196/756789069/105432/5d62b117/56287e81N0948e96f.jpg","bn":"","spu":952843,"tips":[],"subsku":[],"c3":10975,"clk":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=1$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$sku=0$p=610009$pin=$uuid=109911794$csku=952843$index=23$st=0$adcli=$expid=106$im=&rid=7198347610560477410&ver=1&sig=e6117a4103636de53801ec06c70d2d4db2d2d8f2","impr":"1","rt":"0","turl":""}],"impr":"//mercury.jd.com/log.gif?t=rec.610009&v=src=rec$action=0$reqsig=329099128c8bfd9ed05e71b79ca352dbd5e14761$enb=1$csku=1088243,1151209,1039795,329873,1238332,1745115,851326,1312317,695467,923559,885987,1058010,595936,10312097240,10231212177,1142621,1415976959,1745208,1302677,1241849,1125276,206737,848859,952843$st=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0$sku=0$p=610009$pin=$uuid=109911794$expid=106$gm=$rt=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&rid=7198347610560477410&ver=1&sig=772cfd98d9e75686cb83333bb409f61b795dbaf3","debug_info":{"latency":12,"recommender_latency":-1,"predictor_latency":-1}};
		//obj.innerHTML=like;
		var i=0,n=6;
		var oLi="";
		var arr=like.data;
		var len=arr.length;//数据长度
		tab1();
		function tab1(){
			oLi="";
			for(;i<n;i++){
				if(i>len-1){
					i=0;
					n=6;
				} 
				oLi+='<li class="fore2">\
						<div class="p-img">\
							<a href="javascript:;">\
								<img src="http://img14.360buyimg.com/n1/s130x130_'+arr[i].img+'" alt="">\
							</a>\
						</div>\
						<div class="p-info">\
							<div class="p-name">\
								<a href="javascript:;">'+arr[i].t+'</a>\
							</div>\
							<div class="p-price">\
								<i>￥</i>\
								'+arr[i].jp+'\
							</div>\
						</div>\
					</li>';
				}
		}
		var wrap='<div id="guessyou">\
				<div class="mt">\
					<h2>猜你喜欢</h2>\
					<a href="javascript:;" class="extra">换一批</a>\
				</div>\
				<div class="mc">\
					<div class="spacer">\
						<i></i>\
					</div>\
					<ul>'+oLi+'</ul>\
				</div>\
			</div>';
		obj.innerHTML=wrap;
		$(obj).addClass("lazy-fn-done");//加载完成下面是事件
		/*猜你喜欢*/
	    var oGuessLike=document.getElementById('guessyou');
	    var oMt=getByClassName(oGuessLike,"mt")[0];
	    var oI=oGuessLike.getElementsByTagName('i')[0];
	    var oExchange=getByClassName(oGuessLike,"extra")[0];
	    var oUl=oGuessLike.getElementsByTagName("ul")[0];
	    var mtOk=true;
	    oMt.onmouseover=function(){
	      if(!mtOk) return;
	        mtOk=false;
	        oI.style.right=oMt.offsetWidth-oI.offsetWidth+"px";
	        animate(oI,{right:-1},{duration:600})
	        setTimeout(function(){
	          mtOk=true;
	        },3000)
	    }
	    oExchange.onclick=function(){	    	
	    	n=n+6; 	
	    	tab1();
	    	oUl.innerHTML=oLi;
	    }

	}
	/*品质生活*/
	exports.buy=function(obj){
		var buy='<div class="hc home-special-buy"><h2>京东·品质生活</h2><div class="hs-content"><div class="has-col1"><a href="javascript:;"class="has-item"><p class="area-tit">新发现</p><div class="sub-tit"><p class="tit">尚新品</p><p class="desc">荣耀V8脱影而出</p><p class="promotion">双镜头长续航预约赢手机</p></div><img src="img/5732fc27N2692449a.jpg"alt=""></a><a href="javascript:;"class="has-item-small"><div class="sub-tit"><p class="tit">新趋势</p><p class="desc">小蚁智能摄像机</p><p class="promotion">预约立减100</p></div><img src="img/5733e88dN0f95573f.png"alt=""></a><a href="javascript:;"class="has-item-small"><div class="sub-tit"><p class="tit">新先购</p><p class="desc">欧拉智能手表</p><p class="promotion">瑞士机芯男表</p></div><img src="img/5733de25N94e6f24d.jpg"alt=""></a></div><div class="has-col2"><a href="javascript:;"class="has-item"><p class="area-tit">好物100</p><div class="sub-tit"><p class="tit">发现好物</p><p class="desc">匡威时尚小绿鞋</p><p class="promotion">走在潮流前端</p></div><img src="img/573305ebN16655940.jpg"alt=""></a><a href="javascript:;"class="has-item-small"><div class="sub-tit"><p class="tit">潮流志</p><p class="desc">v</p><p class="promotion">重新定义男人</p></div><img src="img/5733d938Na828100a.jpg"alt=""></a></div><div class="has-col3"><a href="javascript:;"class="has-item"><p class="area-tit">品牌街</p><div class="sub-tit"><p class="tit">腕表大牌</p><p class="desc">EPOS瑞士名表</p><p class="promotion">星空月相奢华时尚</p></div><img src="img/57218fccNf6ca6d16.jpg"alt=""></a><a href="javascript:;"class="has-item-small"><div class="sub-tit"><p class="tit">国际大牌</p><p class="desc">SELECTED</p><p class="promotion">男装低至5折</p></div><img src="img/5733edffN7101834f.jpg"alt=""></a><a href="javascript:;"class="has-item-small"><img src="img/571f3c98Nd2e8f720.jpg"alt=""></div><div class="hs-brands"><div class="brands-left"><ul><li><a href="javascript:;"><img src="img/5679f22cN9a788883.jpg"alt=""></a></li><li><a href="javascript:;"><img src="img/56fe1ec7N0c3302e2.jpg"alt=""></a></li><li><a href="javascript:;"><img src="img/5670fafdNd2ca7e89.jpg"alt=""></a></li><li><a href="javascript:;"><img src="img/564d4328N6fb33fc8.png"alt=""></a></li><li><a href="javascript:;"><img src="img/56e8c714N82271963.jpg"alt=""></a></li><li><a href="javascript:;"><img src="img/56a70e8fN066e04a1.jpg"alt=""></a></li><li><a href="javascript:;"><img src="img/56405c00N4e674e89.jpg"alt=""></a></li></ul></div><div class="brands-right"><ul><li><a href="javascript:;"><img src="img/56f23a46N9ffe778f.png" alt=""></a></li><li><a href="javascript:;"><img src="img/563b3484N9ba68e13.jpg" alt=""></a></li><li><a href="javascript:;"><img src="img/56e8c73dN299ef543.jpg" alt=""></a></li><li><a href="javascript:;"><img src="img/56e8c73dN299ef543.jpg" alt=""></a></li><li><a href="javascript:;"><img src="img/56f246e3Ne4a6cb5f.jpg" alt=""></a></li><li><a href="javascript:;"><img src="img/56b2f385N8e4eb051.jpg" alt=""></a></li><li><a href="javascript:;"><img src="img/5716e2c4Nc925baf3.jpg" alt=""></a></li></ul></div></div></div></div>';
		obj.innerHTML=buy;
		$(obj).addClass("lazy-fn-done");//加载完成下面是事件
		/*品质生活*/
		if(obj.style.mstransform||obj.style.WebkitTransform){
			alert(1)
		}
	}

	/*floor-banner-1*/
	exports.floorBanner1=function(obj){
		$(obj).addClass("lazy-fn-done");
	}
	exports.clothes=function(obj){
		var oClothes=document.getElementById('clothes');
		var oSli=getByClassName(oClothes,"slider")[0];
		require("seajs/slider").floorSlider(oSli);	
		$(obj).addClass("lazy-fn-done");
	}

})	