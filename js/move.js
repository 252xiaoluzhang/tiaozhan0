
//�����˶����
function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//ȡ��ǰֵ
		var icur=0;
		if(attr=='opacity'){
			icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			var icur= parseInt(getStyle(obj,attr));
		}
		
		//�����˶��ٶ�
		var speed=(iTarget-icur)/8;
		
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//���ֹͣ
		if(icur==iTarget){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		else{
			if(attr=='opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';   //IE�����
				obj.style.opacity=(icur+speed)/100;                     //�����Chrome�����
			}else{
				obj.style[attr]=icur+speed+'px';
			}
		}
	},30)
}

//��ȡ��ʽ����
function getStyle(obj,attr){              
	if(obj.currentStyle){                 //���IE�����
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];  //��Ի�������
	}
}

//�����˶����
function startMove2(obj,attr,iTarget) {             //����objΪ�ƶ�����   
	var t=0;                                      // ��ʼ����
	var tb=parseFloat(getStyle(obj,attr));       // ��ʼtop��ֵ       
	var tc=iTarget-tb;                             // top��Ҫ�仯�ľ��룬��Ҫ�ƶ��ľ���     
	//var d=Math.ceil(Math.abs(tc)/8);			    // �ƶ���Ŀ��ֵ��Ҫ�仯�Ĵ���������Խ���ٶ�Խ��
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
  
//tween�㷨BounceEaseOut����
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





