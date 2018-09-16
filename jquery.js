/*
* @Author: gf880623
* @Date:   2018-09-13 17:39:34
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-15 12:40:59
*/
window.onload=function(){
let dates=document.querySelectorAll(".tt .time .date");
console.log(dates);
fn();
setInterval(fn, 1000);
function fn(){
	let now=new Date();
	let future=new Date(2018,8,18);
	let time=(future.getTime()-now.getTime())/1000;
	let arr=[];	
	let hour=Math.floor(time/(60*60));
	arr.push(hour);
	let m=Math.floor(time%(60*60)/60);
	arr.push(m);
	let s=Math.floor(time%(60*60)%60);
	arr.push(s);
	arr.forEach((e,i)=>{
		dates[i].innerHTML=e;
	})
	return dates;
}
}