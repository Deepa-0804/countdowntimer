const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

document.querySelector("#calculate").onclick=updation();


function updation()
{
    const currentyear=new Date().getFullYear;

    const date=document.querySelector("#date").value;
    const time=document.querySelector("#time").value;

    const endtime=new Date(date+" "+time);
    console.log(endtime);
    
    const currentdate=new Date();

    
    const diff=endtime-currentdate;
    console.log(diff);
    
    const d=Math.floor(diff/1000/60/60/24);
    
    const hrs=Math.floor((diff/1000/60/60)%24);
    
    const min=Math.floor((diff/1000/60)%60);
    
    const sec=Math.floor((diff/1000)%60);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=hrs<10?"0"+hrs:hrs;
    minutes.innerHTML=min<10?"0"+min:min;
    seconds.innerHTML=sec<10?"0"+sec:sec;
}

setInterval(updation,1000);

/*const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

window.onload = () => {
    document.querySelector("#calculate").onclick= calculate;
}

function calculate()
{
    const date=document.querySelector("#date").value;
    const time=document.querySelector("#time").value;
 
    const endtime=new Date(date+" "+time);
    console.log(endtime);

    setInterval(() => calculatetime(endtime),1000);
}
function calculatetime(endtime)
{
    const currenttime=new Date();

    if(endtime>currenttime){
        const remaining=(endtime-currenttime)/1000;
    }
    console.log(remaining);
    days.innerHTML=Math.floor(remaining/(24*60*60));


}*/





