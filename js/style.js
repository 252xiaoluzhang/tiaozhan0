window.onload=function(){
	//��ȡ��Ҫ�Ķ���
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
	
	//����ÿһ����ť���ֱ���¼�
	for(var i=0; i<aA.length;i++){
		aA[i].id = i;
		aA[i].onmouseover=function(){
			clearInterval(timer);               //����Ƶ�btn��ʱ�������ʱ��
			changeSlider(this.id);
		}
		aA[i].onmouseout=function(){
			timer=setInterval(autoPlay,5000);         //����ƿ�ʱ������������ʱ��		
			index=this.id;                             //ȷ������ƿ�ʱ���ֲ�ͼ�ڵ�ǰͼƬ�������ƶ�    
		}
	}
	
	//�����ʱ��
	if(timer){
		clearInterval(timer);
		timer=null;
	}
	
	//��Ӷ�ʱ�����ı䵱ǰ����������
	timer=setInterval(autoPlay,5000);
	
	//autoPlay����
	function autoPlay(){
		index++;
		if(index==aA.length){
			index=0;
		}
		changeSlider(index);
	}
	
	//����ı�slider�Ͱ�ť�ĺ���
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