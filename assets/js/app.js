//alert("hello");

let cl=console.log;

function counter(){
let countdown=document.getElementById("countdown");

let futureDate=new Date(2023,0,25);

cl(futureDate);


let currentDate=new Date();
cl(currentDate);




let diff=futureDate.getTime() - currentDate.getTime();
cl(diff);





//let days=(diff/(1000 * 60 * 60 * 24))
//cl(days);


let days=Math.floor(diff/(1000 * 60 * 60 * 24));
cl(days)

let hr=Math.floor((diff % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
cl(hr);

let min=Math.floor((diff % (1000 * 60 * 60 ))/(1000 * 60 ))
cl(min)


let sec=Math.floor((diff % (1000 * 60 ))/(1000))
cl(sec)

let result=`<div class="countdown">
<p>days</p>
<p>${setzero(days)}</p>
</div>
<div class="countdown">
<p>hr</p>
<p>${setzero(hr)}</p>
</div>
<div class="countdown">
<p>min</p>
<p>${setzero(min)}</p>
</div>
<div class="countdown">
<p>sec</p>
<p>${setzero(sec)}</p>
</div>`




countdown.innerHTML=result;
setTimeout(counter,1000)
}
function setzero(num){
	return (num <10)?("0"+num):num
	
}

counter()

