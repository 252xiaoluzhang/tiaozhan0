
//缓冲运动框架
function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//取当前值
		var icur=0;
		if(attr=='opacity'){
			icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			var icur= parseInt(getStyle(obj,attr));
		}
		
		//计算运动速度
		var speed=(iTarget-icur)/8;
		
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//检测停止
		if(icur==iTarget){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		else{
			if(attr=='opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';   //IE浏览器
				obj.style.opacity=(icur+speed)/100;                     //火狐，Chrome浏览器
			}else{
				obj.style[attr]=icur+speed+'px';
			}
		}
	},30)
}

//获取样式函数
function getStyle(obj,attr){              
	if(obj.currentStyle){                 //针对IE浏览器
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];  //针对火狐浏览器
	}
}

//跳动运动框架
function startMove2(obj,attr,iTarget) {             //参数obj为移动对象   
	var t=0;                                      // 初始次数
	var tb=parseFloat(getStyle(obj,attr));       // 初始top的值       
	var tc=iTarget-tb;                             // top需要变化的距离，需要移动的距离     
	//var d=Math.ceil(Math.abs(tc)/8);			    // 移动到目标值需要变化的次数，次数越多速度越慢
	var d=85;
	cancelAnimationFrame(obj.tim);
	obj.tim=requestAnimationFrame(function(){
		obj.style[attr] = Math.ceil(tween(t, tb, tc, d)) + "px";
		if(t<d){
			t++;
			obj.tim=requestAnimationFrame(arguments.callee);
		}
	})
}
  
//tween算法BounceEaseOut函数
function tween(t, b, c, d) {
	if ((t /= d) < (1 / 2.75)) {
		return c * (7.5625 * t * t) + b;
	} else if (t < (2 / 2.75)) {
		return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
	} else if (t < (2.5 / 2.75)) {
		return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
	} else {
		return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
	}
}





