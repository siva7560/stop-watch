let divs=document.querySelectorAll(".container > div");
let milliseconds=document.querySelector("#milli");
let seconds=document.querySelector("#seconds");
let minutes=document.querySelector("#minutes");
let hours=document.querySelector("#hours");
for(let i=0;i<divs.length;i++){
    divs[i].innerHTML='00';
}
document.querySelector("#startstop").style.backgroundColor="lightblue";
let intervalid;
let sec=0,min=0,hour=0,ms=0,sn=0;
function startstop(){
    if(document.querySelector("#startstop").innerHTML==='start'){
        document.querySelector("#startstop").style.backgroundColor="skyblue";
        document.querySelector("#spl").style.backgroundColor="orange";
        document.querySelector("#startstop").innerHTML='pause';
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
else{
  clearInterval(intervalid);
  document.querySelector("#startstop").innerHTML='start';
  document.querySelector("#startstop").style.backgroundColor="lightblue";
  document.querySelector("#spl").style.backgroundColor="white";
}
}
function update(){
    milliseconds.innerHTML=(ms<10 ? '0':'') + ms;
    seconds.innerHTML= (sec < 10 ? '0' : '') +sec;
    minutes.innerHTML=(min < 10 ? '0' : '') +min;
    hours.innerHTML=( hour < 10 ? '0' : '') +hour;
}
function split(){
    if(document.querySelector('#startstop').innerHTML==='pause'){
  sn++;
  document.querySelector("#split").innerHTML=document.querySelector("#split").innerHTML +"<br>"+"<div class='shn'>"+"Split - " + sn+ " : "+document.querySelector(".container").innerHTML +"</div>" ;
    }
}
function reset(){
    document.querySelector("#startstop").innerHTML='start';
  
    if(intervalid){
        clearInterval(intervalid);

    }
    sec=0,min=0,hour=0,ms=0,sn=0;
    update();

    document.querySelector("#split").innerHTML='';
}