let divs=document.querySelectorAll(".container > div");
let milliseconds=document.querySelector("#milli");
let seconds=document.querySelector("#seconds");
let minutes=document.querySelector("#minutes");
let hours=document.querySelector("#hours");
let s=0;
for(let i=0;i<divs.length;i++){
    divs[i].innerHTML='00';
}

let intervalid;
let sec=0,min=0,hour=0,ms=0,sn=0;
function start(){
  document.querySelector("#startstop").style.backgroundColor="white";
  document.querySelector("#stop").style.backgroundColor="rgb(35, 135, 217)";
   {
       
     intervalid=setInterval(()=>{
      ms++;
      if(ms===100){
        ms=0;
        sec++;
      }
    
      if(sec===60){
        sec=0
        min++;
      }
      if(min===60){
        min=0;
        hour++;
      }
      update();
    },10);
}
}

  
 
 


function stop(){

  clearInterval(intervalid);
  document.querySelector("#startstop").style.backgroundColor="rgb(35, 135, 217)";
  document.querySelector("#stop").style.backgroundColor="white";
 
}
function update(){
    milliseconds.innerHTML=(ms<10 ? '0':'') + ms;
    seconds.innerHTML= (sec < 10 ? '0' : '') +sec;
    minutes.innerHTML=(min < 10 ? '0' : '') +min;
    hours.innerHTML=( hour < 10 ? '0' : '') +hour;
}

function reset(){
   
  
    if(intervalid){
        clearInterval(intervalid);

    }
    sec=0,min=0,hour=0,ms=0,sn=0;
    update();

    ;
}
