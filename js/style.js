window.onload=function(){
	//获取需要的对象
	var oDiv=document.getElementById('banner');
	var oUl1=oDiv.getElementsByTagName('ul')[0];
	var oUl2=oDiv.getElementsByTagName('ul')[1];
	var aLi=oUl1.getElementsByTagName('li');
	var aImg=oUl1.getElementsByTagName('img');
	var oBtn=document.getElementById('btn');
	var aA=oBtn.getElementsByTagName('a');

	var imgWidth=1280;
	var imgHeight=489;
	var index=0;
	var timer=null;
	
	oUl1.style.width = aImg.length*imgWidth+'px';
	oUl2.style.Height = aImg.length*imgHeight+'px';
	
	//遍历每一个按钮，分别绑定事件
	for(var i=0; i<aA.length;i++){
		aA[i].id = i;
		aA[i].onmouseover=function(){
			clearInterval(timer);               //鼠标移到btn上时，清除定时器
			changeSlider(this.id);
		}
		aA[i].onmouseout=function(){
			timer=setInterval(autoPlay,5000);         //鼠标移开时，重新启动定时器		
			index=this.id;                             //确保鼠标移开时，轮播图在当前图片基础上移动    
		}
	}
	
	//清除定时器
	if(timer){
		clearInterval(timer);
		timer=null;
	}
	
	//添加定时器，改变当前高亮的索引
	timer=setInterval(autoPlay,5000);
	
	//autoPlay函数
	function autoPlay(){
		index++;
		if(index==aA.length){
			index=0;
		}
		changeSlider(index);
	}
	
	//定义改变slider和按钮的函数
	function changeSlider(curIndex){
		for(var j=0;j<aA.length;j++){
			aA[j].className='';
		}
		aA[curIndex].className='selecteddot';
		startMove(oUl1,'left',-curIndex * imgWidth);
		startMove2(oUl2,'top',(curIndex * imgHeight-1956));
		//index=curIndex;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}