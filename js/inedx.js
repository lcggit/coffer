window.onload=function(){
	function lunbo(){	
		let imgs=document.querySelectorAll('.b-img a')
		let circles=document.querySelectorAll('.circles li')
		let btns=document.querySelectorAll('.btns li')
		let left=btns[0];
		let right=btns[1]
		let box=document.querySelector('.js-banner')
		let n=0;
		let flag=true;
		console.log(imgs,circles,btns,box)
		function move(way='right'){
			if(way=='right'){
				n++
				if(n>=circles.length){
					n=0;
				}
			}
			if(way=='left'){
				n--;
				if(n==-1){
					n=circles.length-1
				}
			}
			for(let i=0;i<circles.length;i++){
				animate(imgs[i],{opacity:0},400);
				circles[i].style.background=''
			}
			animate(imgs[n],{opacity:1},400,function(){
				flag=true;
			})
			circles[n].style.background='#FFFFFF'
		}
		let t=setInterval(move,3000);
		box.onmouseover=function(){
			clearInterval(t)
		}
		box.onmouseout=function(){
			t=setInterval(move,3000);
		}
		left.onclick=function(){
			if(flag){
				flag=false;
				move();
			}
		}
		right.onclick=function(){
			if(flag){
				flag=false;
				move('left');
			}
		}
		for(let i=0;i<imgs.length;i++){
			circles[i].onclick=function(){
				circles[i].style.background='#FFFFFF'
				circles[n].style.background=''
				animate(imgs[n],{opacity:0},400)
				animate(imgs[i],{opacity:1},400)
				n=i;
			}
		}
	}
		
	
		lunbo()
//	选项卡
	function xuan(){
		let btns=document.querySelectorAll('.foot a')
		let imgs=document.querySelectorAll('.js-box')
		console.log(btns,imgs)
		for(let i=0;i<imgs.length;i++){
			btns[i].onmouseover=function(){
				for(let j=0;j<imgs.length;j++){
					imgs[j].style.display='none'
					btns[j].style.color=''
				}
				imgs[i].style.display='block'
				btns[i].style.color='goldenrod'
			}
		}
	}
	xuan()
}
