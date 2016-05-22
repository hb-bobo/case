define(function(require,exports,module){
	var getByClassName=require("seajs/common.js").getByClassName;
	var animate=require("seajs/animate.js").move;
	//var show=require("seajs/hover.js").show;
	exports.slider=function(oDiv){
		var slider=new Sli(oDiv);
		
	}	
	exports.floorSlider=function(obj){
		function FloorSlider(obj){
			Sli.call(this,obj);			
			this.nav=getByClassName(obj,"slider-nav")[0];
			this.aNavLi=this.nav.children;//=4
			this.headTab();
			var _this=this;
			for (var i = 0; i < this.aNavLi.length; i++) {
				(function(index){
					_this.aNavLi[i].onmouseover=function(){
						_this.num=index;
						_this.headTab();
						_this.tab();						
					}
				})(i)
			}			
			obj.onmouseover=function(){
				_this.showPage(); 
				clearInterval(_this.timer);
			}
			obj.onmouseout=function(){
				_this.hidPage();
				_this.timer=setInterval(function(){
					_this.tabNext.call(_this,null);
					_this.headTab();
				},4000);
			}
			this.timer=setInterval(function(){
				_this.tabNext.call(_this);
				_this.headTab();
			},4000);
		}
		inheritPrototype(Sli,FloorSlider);
/*		FloorSlider.prototype=new Sli(obj);
		FloorSlider.prototype.constructor=FloorSlider;*/
		FloorSlider.prototype.headTab=function(){
			for (var i = 0; i < this.aNavLi.length; i++) {
				this.aNavLi[i].className="";
			}
			this.aNavLi[this.num%this.aNavLi.length].className="selected";//%4(this.aNavLi.length)是为了原型Sli会克隆Li导致length*2；
			//console.log(this.num)
		}
		
		var floorSli=new FloorSlider(obj);
		

	}
   	function inheritPrototype(superType,subType){     
		var prototype = object(superType.prototype);    //是创建超类型原型的一个副本
	    prototype.constructor = subType;              //增强对象,是为创建的副本添加 constructor 属性性，从而弥补因重写原型而失去的默认的 constructor 属性     
	    subType.prototype = prototype;               //指定对象,将新创建的对象（即副本）赋值给子类型的原型
	} 
	function object(o) {
	    function F() {};
	    F.prototype = o;
	    return new F();
	}
	function Sli(obj){//构造函数
		this.main=getByClassName(obj,"slider-main")[0];//一般是ul;
		this.aLi=this.main.children;
		this.nLiW=this.aLi[0].offsetWidth;
		this.page=getByClassName(obj,"slider-page")[0];
		this.prev=this.page.children[0];
		this.next=this.page.children[1];
		this.main.innerHTML+=this.main.innerHTML;//复制内容
		this.main.style.width=this.nLiW*this.aLi.length+"px";//设置宽度
		this.ready=true;
		this.num=0;
		var _this=this;
		obj.onmouseover=function(){
			_this.showPage(); 
		}
		obj.onmouseout=function(ev){
			_this.hidPage();
		}
		this.prev.onclick=function(){
			_this.tabPrev();
		}
		this.next.onclick=function(){
			_this.tabNext();
		}
	}
	Sli.prototype={
		constructor:Sli,
		showPage:function(){
				this.page.style.display="block";
		},
		hidPage:function(){
				this.page.style.display="none";
		},
		tabPrev:function(){
				if(!this.ready) return;
				this.ready=false;
				this.num--;
				if(this.num<0) {
					this.main.style.left=-this.main.offsetWidth/2+"px";
					this.num=this.aLi.length/2-1;	
				}						
				this.tab();	
		},
		tabNext:function(){
				if(!this.ready) return;
				this.ready=false;
				this.num++;
				this.tab();
		},
		tab:function(){
			var _this=this;
			animate(this.main,{"left":-this.num*this.nLiW},{"duration":1000,"complete":function(){
				if(_this.num==_this.aLi.length/2){//为了next到复制的第一个并运动完后切到第一张
					_this.main.style.left=0;
					_this.num=0;
				}
				_this.ready=true;
			}})
		}
	}	
})