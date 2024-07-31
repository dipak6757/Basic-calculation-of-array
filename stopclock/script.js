let [seconds,mintues,hours] =[0,0,0];
let displayTime = document.getElementById("displayTime")
let timer = null

function startwatch()
{
  
 seconds++;//1
 
 if(seconds == 60)
 {
    seconds =0;
    mintues++;
    if(mintues == 60)
    {
        mintues == 0;
        hours++;

    }
 }

 let h =(hours <10? "0": " ")+ hours;
 let m =(mintues<10? "0": " ")+ mintues;
 let s =(seconds<10? "0": " ")+ seconds;

 displayTime.innerHTML = h+":"+m+":" +s
}

function watchstart()
{
    timer= setInterval(startwatch,1000);


}

function watchstop()
{
    clearInterval(timer);
}
function watchReset()
{
    clearInterval(timer);
    [seconds,mintues,hours] =[0,0,0];
    displayTime.innerHTML = "00:00:00";
}
