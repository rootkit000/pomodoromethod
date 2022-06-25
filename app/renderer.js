const counterhtml = document.getElementById('counterPomo')
const counterspan = document.getElementById('spanpomo')
const playPauseButton = document.getElementById('play-pause');
const stopwatch = document.getElementById('stopwatch');
const timerRender = document.getElementById('time');

const secondsSphere = document.getElementById('seconds-sphere');
/*boton*/
const setButton = document.getElementById('btn')

/*titutlo*/
const titleInput = document.getElementById('title')

    var pomocounter = null;
if(localStorage.getItem("pomocounts")){
pomocounter=localStorage.getItem("pomocounts");
pomocounter=parseInt(pomocounter, 10)
}


/**/
setButton.addEventListener('click', () => {
    //const title = titleInput.value
    window.electronAPI.setTitle()
});

var now = new Date();
var hoy =now.getDate();
var mes = now.getMonth();
var fecha=hoy+"/"+mes

var day;
switch (new Date().getDay()) {
  case 0:
localStorage.setItem(day,pomocounter);

    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
localStorage.setItem(day,pomocounter);

    break;
  case 2:
    day = "Martes";
localStorage.setItem(day,pomocounter);

    break;
  case 3:
    day = "Miercoles";
localStorage.setItem(day,pomocounter);

    break;
  case 4:
    day = "Jueves";
localStorage.setItem(day,pomocounter);

    break;
  case 5:
    day = "Viernes";
    localStorage.setItem(day,pomocounter);

    break;
  case  6:
    day = "Sabado";

localStorage.setItem(day,pomocounter);
break;
}
var lastpomo =()=>{
localStorage.setItem("pomodate",fecha); 

}

var ispomotoday=()=>{

if (localStorage.getItem("pomodate"))
    {
    if (localStorage.getItem("pomodate")!==fecha){pomocounter=localStorage.setItem("pomocounts",0); pomocounter=0}
    }
    else
    {localStorage.setItem("pomodate",fecha); }
}
ispomotoday()

var recuperarpomo=()=>{
counterhtml.textContent=pomocounter;
counterspan.textContent=pomocounter;
}


if(!localStorage.getItem("meta")){
localStorage.setItem("meta",0); 
}
recuperarpomo()

var felicidades=()=>
{

$(document).ready(function(){
  $("#congrats").animate({bottom: '30%'});
});

setTimeout(() => {   
$(document).ready(function(){
  $("#congrats").animate({bottom: '100%'});
});
 }, 7000);

if(localStorage.getItem('vfx')){

setTimeout(() => {    startConfetti()}, 1000);

const music = new Audio('audio/congrats4.mp3');
music.play();
music.loop =false;

setTimeout(() => {    stopConfetti()}, 20000);
}
}

var guardarpomo=()=>{
 let val = pomocounter
 console.log(val)

localStorage.setItem("pomocounts",val); 
}


var guardar=()=>{
 let val = document.getElementById('metaval').value

localStorage.setItem("meta",val); 

recuperar()
}

var recuperar=()=>{
document.getElementById('data').textContent=localStorage.getItem("meta");


if(localStorage.getItem('notifications')){
document.getElementById('notifications').checked=1
}
if(localStorage.getItem('notifications2')){
document.getElementById('notifications2').checked=1
}
if(localStorage.getItem('minimize')){
document.getElementById('minimize').checked=1
}
if(localStorage.getItem('maximize')){
document.getElementById('maximize').checked=1
}
if(localStorage.getItem('sound')){
document.getElementById('sound').checked=1
}

if(localStorage.getItem('vfx')){
document.getElementById('vfx').checked=1
}

}


var pomostoday=()=>{
document.getElementById("goal").textContent=localStorage.getItem("meta");
}



 var check = null;



 function startpomodoro() {
if (localStorage.getItem('minimize')) {setTimeout(() => {window.electronAPI.Pomodorostarted()}, 3000);}


ispomotoday()

var countDownDate = new Date();
var sec=countDownDate.getSeconds();

stateActive()
cicleAdd()
 document.getElementById("output").textContent = state +" "+ciclo 

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {
                
             
countDownDate.setMinutes(countDownDate.getMinutes() + TimePomodoro );
countDownDate.setSeconds(countDownDate.getSeconds()+10);


                check =setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"

 if (minutes <10 && seconds < 10 ) {
                  timerRender.textContent = "0"+minutes+":0"+seconds;
     
 }

 if (minutes <10 && seconds > 9 ) {
                  timerRender.textContent = "0"+minutes+":"+seconds;
     
 }

 if (minutes > 9 && seconds < 10 ) {
                   timerRender.textContent = minutes+":0"+seconds;
     
 }


 if (minutes > 9 && seconds > 9 ) {
                    timerRender.textContent = minutes+":"+seconds;
     
 }
    
  // If the count down is over, write some text 
  if (distance < 0) 
  {


            pomocounter += 1 ; counterhtml.textContent=pomocounter;
            counterspan.textContent=pomocounter;
            localStorage.setItem(day,pomocounter);

            guardarpomo()

if(localStorage.getItem('notifications'))
{
PomodoroFinalizado()
}

if (localStorage.getItem('maximize')) {  setTimeout(() => {window.electronAPI.Pomodorofinished()}, 5000);}
            

            if(localStorage.getItem("meta")==localStorage.getItem("pomocounts")){
              setTimeout(() => {felicidades()}, 5000);
  
            }
           clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
lastpomo()
startrest()
}
                }, 1000);

            }
        }




 function startrest() {
   
var countDownDate = new Date();
var sec=countDownDate.getSeconds();

    cicleRest()
    stateRest()
    document.getElementById("output").textContent = state 


secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {

                
                
countDownDate.setMinutes(countDownDate.getMinutes() + 0 );
countDownDate.setSeconds(countDownDate.getSeconds()+6);


           


              
                check = setInterval(function () {

      
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"

 if (minutes <10 && seconds < 10 ) {
                  timerRender.textContent = "0"+minutes+":0"+seconds;
     
 }

 if (minutes <10 && seconds > 9 ) {
                  timerRender.textContent = "0"+minutes+":"+seconds;
     
 }

 if (minutes > 9 && seconds < 10 ) {
                   timerRender.textContent = minutes+":0"+seconds;
     
 }


 if (minutes > 9 && seconds > 9 ) {
                    timerRender.textContent = minutes+":"+seconds;
     
 }

  // If the count down is over, write some text 
  if (distance < 0) {

    if (localStorage.getItem('notifications')) { DescanzoFinalizado()}
            clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    startpomodoro()

  }
    
                }, 1000);
            }
        }

   






const stop = () => {
    stateStop()
    clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    ciclo=ciclo-1
    document.getElementById("output").textContent = state
}






const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
       
        startpomodoro();
    } else {
        
        
        playPauseButton.classList.remove('running');
        stop();
    }
}
