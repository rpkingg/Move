// JavaScript Document
//页面加载完毕在进行DOM操作的方法
window.onload= function(){
	//获得容器变量
	var box = document.getElementById('container');
	//获得图像nodelist图片集合
	var imgs = box.getElementsByTagName('img');
	//单张图片的宽度
	var imgWidth = imgs[0].offsetWidth;
	//设置掩藏门体露出宽度
	var exposeWidth = 160;
	//容器总宽度
	var boxWidth = imgWidth + (imgs.length-1) *exposeWidth;
	box.style.width = boxWidth + 'px';
	
	//设置每道门的初始位置
	function setImgsPos(){
	for(var i = 1, len = imgs.length; i < len; i++){
		imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
		 }
		 setImgsPos();
		
	//计算每道门打开时应该移动的距离
	var traslate = imgWidth - exposeWidth; 
	//为每道门绑定事件
	for(var i = 0, len = imgs.length; i < len; i++){
		 //为了获得不同的i值，使用立即调用的函数表达式
		 (function(i){
			 imgs[i].onmouseover = function(){
				 //每道门复位
				 setImgsPos();
				 //打开门
				 for(var j = 1;j <= i;j++){
					 imgs[j].style.left = parseInt(imgs[j].style.left,10)- traslate +'px';
					 };
				 };
			 
			 })(i);
		};
	};