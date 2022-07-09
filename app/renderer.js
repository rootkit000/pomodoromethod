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

var notifi;
var pomocounter = 0;

if(localStorage.getItem("pomocounts")){
pomocounter=localStorage.getItem("pomocounts");
pomocounter=parseInt(pomocounter, 10)
}

var Defaulsetting=()=>{



    if (!localStorage.getItem("mins")){localStorage.setItem("mins",25)}

    if (!localStorage.getItem("restshort")){localStorage.setItem("restshort",5)}

    if (!localStorage.getItem("restlong")){localStorage.setItem("restlong",30)}


TimePomodoro=Number(localStorage.getItem("mins"))
TimeRest=Number(localStorage.getItem("restshort"))
minsshort=Number(localStorage.getItem("restlong"))

document.getElementById('data').textContent=localStorage.getItem("meta");
document.getElementById('metaval').value=localStorage.getItem("meta");

if(!localStorage.getItem("vfx")){
localStorage.setItem("vfx",'on');
}

if(!localStorage.getItem("notifications")){
localStorage.setItem("notifications",'on');
}

if(!localStorage.getItem("notifications2")){
localStorage.setItem("notifications2",'on');
}



if(!localStorage.getItem("maximize")){
localStorage.setItem("maximize",'on');
}

if(!localStorage.getItem("minimize")){
localStorage.setItem("minimize",'off');
}


if(!localStorage.getItem("sound")){
localStorage.setItem("sound",'on');
}

}
Defaulsetting()

var Lunes='Lunes';
var Martes='Martes';
var Miercoles='Miercoles';
var Jueves='Jueves';
var Viernes='Viernes';
var Sabado='Sabado';
var Domingo='Domingo';



/**/
setButton.addEventListener('click', () => {
    //const title = titleInput.value
    window.electronAPI.setTitle()
});

var now = new Date();
var hoy =now.getDate();
var dia =now.getDay();
var mes = now.getMonth();
var fecha=hoy+"/"+mes

var day;
switch (new Date().getDay()) {
  case 0:

    day = "Domingo";
localStorage.setItem(day,pomocounter);

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
var createdays=(weekday)=>
{
    if (!localStorage.getItem(weekday)) 
{localStorage.setItem(weekday,0)}
}
createdays(Lunes)
createdays(Martes)
createdays(Miercoles)
createdays(Jueves)
createdays(Viernes)
createdays(Sabado)
createdays(Domingo)





var putzeros=(weekday)=>
{if (localStorage.getItem(weekday)<9 && localStorage.getItem(weekday)!=='0'+ '1'  && localStorage.getItem(weekday)!=='0'+ '2' && localStorage.getItem(weekday)!=='0'+ '3'  && localStorage.getItem(weekday)!=='0'+ '4' &&localStorage.getItem(weekday)!=='0'+ '5' && localStorage.getItem(weekday)!=='0'+ '6' && localStorage.getItem(weekday)!=='0'+ '7' && localStorage.getItem(weekday)!=='0'+ '8' && localStorage.getItem(weekday)!=='0'+ '9'  && localStorage.getItem(weekday)!=='0'+ '0') 
{var zerosvalue="0"+localStorage.getItem(weekday);
console.log(weekday);
localStorage.setItem(weekday,zerosvalue)}}

putzeros(Lunes);
putzeros(Martes);
putzeros(Miercoles);
putzeros(Jueves);
putzeros(Viernes);
putzeros(Sabado);
putzeros(Domingo);

var weekdayselect= ()=>{

$(document).ready(function(){
 $("#"+day).addClass("bg-danger text-white");
 $("#"+day+"_val").removeClass("list-group-item-dark")
 $("#"+day+"_val").addClass("list-group-item-warning");
 $("#"+dia+"_out").removeClass("bg-dark")
 $("#"+dia+"_out").addClass("bg-primary");







switch (new Date().getDay()) {
  case 0:
$("#"+dia+"_out").text(localStorage.getItem(day,pomocounter));
$("#1_out").text(localStorage.getItem('Lunes'));
$("#2_out").text(localStorage.getItem('Martes'));
$("#3_out").text(localStorage.getItem('Miercoles'));
$("#4_out").text(localStorage.getItem('Jueves'));
$("#5_out").text(localStorage.getItem('Viernes'));
$("#6_out").text(localStorage.getItem('Sabado'));
    break;
  case 1:
$("#"+dia+"_out").text(localStorage.getItem(day));
$("#0_out").text(localStorage.getItem('Domingo'));
$("#2_out").text(localStorage.getItem('Martes'));
$("#3_out").text(localStorage.getItem('Miercoles'));
$("#4_out").text(localStorage.getItem('Jueves'));
$("#5_out").text(localStorage.getItem('Viernes'));
$("#6_out").text(localStorage.getItem('Sabado'));

    break;
  case 2:
$("#"+dia+"_out").text(localStorage.getItem(day,pomocounter));

$("#0_out").text(localStorage.getItem('Domingo'));
$("#1_out").text(localStorage.getItem('Lunes'));
$("#3_out").text(localStorage.getItem('Miercoles'));
$("#4_out").text(localStorage.getItem('Jueves'));
$("#5_out").text(localStorage.getItem('Viernes'));
$("#6_out").text(localStorage.getItem('Sabado'));


    break;
  case 3:
$("#"+dia+"_out").text(localStorage.getItem(day,pomocounter));


$("#0_out").text(localStorage.getItem('Domingo'));
$("#1_out").text(localStorage.getItem('Lunes'));
$("#2_out").text(localStorage.getItem('Martes'));
$("#4_out").text(localStorage.getItem('Jueves'));
$("#5_out").text(localStorage.getItem('Viernes'));
$("#6_out").text(localStorage.getItem('Sabado'));

    break;
  case 4:
$("#"+dia+"_out").text(localStorage.getItem(day,pomocounter));

$("#0_out").text(localStorage.getItem('Domingo'));
$("#1_out").text(localStorage.getItem('Lunes'));
$("#2_out").text(localStorage.getItem('Martes'));
$("#3_out").text(localStorage.getItem('Miercoles'));
$("#5_out").text(localStorage.getItem('Viernes'));
$("#6_out").text(localStorage.getItem('Sabado'));

    break;
  case 5:
$("#"+dia+"_out").text(localStorage.getItem(day,pomocounter));


$("#0_out").text(localStorage.getItem('Domingo'));
$("#1_out").text(localStorage.getItem('Lunes'));
$("#2_out").text(localStorage.getItem('Martes'));
$("#4_out").text(localStorage.getItem('Jueves'));
$("#3_out").text(localStorage.getItem('Miercoles'));
$("#6_out").text(localStorage.getItem('Sabado'));


    break;
  case  6:

$("#"+dia+"_out").text(localStorage.getItem(day,pomocounter));



$("#0_out").text(localStorage.getItem('Domingo'));
$("#1_out").text(localStorage.getItem('Lunes'));
$("#2_out").text(localStorage.getItem('Martes'));
$("#4_out").text(localStorage.getItem('Jueves'));
$("#5_out").text(localStorage.getItem('Viernes'));
$("#3_out").text(localStorage.getItem('Miercoles'));

break;
}


}
);
}


 var checkifexist= (weekday)=>{

if(localStorage.getItem(weekday)!==0){
console.log("todo bn")

weekdayselect()
}else{

}

 }
checkifexist(day)

var lastpomo =()=>{
localStorage.setItem("pomodate",fecha); 
}

var ispomotoday= ()=>{

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
localStorage.setItem("meta",4); 
}
recuperarpomo()


var Soundnotifi=()=>
{
if (localStorage.getItem("sound")=='on') {

notifi=localStorage.getItem('notifisound')
if(!localStorage.getItem('notifisound')){notifi='sound-8';}

const notifysound = new Audio('audio/'+notifi+'.mp3');
notifysound.play();
notifysound.loop =false;
    }
}

var notificationtoast=()=>{

      $("#toast").animate({bottom: '30%'});
}

notificationtoast()



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

if(localStorage.getItem('vfx')=='on'){

setTimeout(() => {    startConfetti()}, 1000);

if(localStorage.getItem("sound")=='on'){

const music = new Audio('audio/congrats4.mp3');
music.play();
music.loop =false;
}

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

 let val2 = document.getElementById('mins').value

localStorage.setItem("mins",val2); 

 let val3 = document.getElementById('restshort').value

localStorage.setItem("restshort",val3); 

 let val4 = document.getElementById('restlong').value

localStorage.setItem("restlong",val4); 

let val5=document.getElementById('notifisound').value


localStorage.setItem("notifisound",val5);

recuperar()
}
var ResetPause=()=>{MinutesPause=null;SecondsPause=null;}

var recuperar=()=>{





    if (!localStorage.getItem("mins")){localStorage.setItem("mins",25)}
document.getElementById('minsdata').textContent=localStorage.getItem("mins");
document.getElementById('mins').value=localStorage.getItem("mins");


    if (!localStorage.getItem("restshort")){localStorage.setItem("restshort",5)}
document.getElementById('restsdata').textContent=localStorage.getItem("restshort");
document.getElementById('restshort').value=localStorage.getItem("restshort");

    if (!localStorage.getItem("restlong")){localStorage.setItem("restlong",30)}
document.getElementById('restldata').textContent=localStorage.getItem("restlong");
document.getElementById('restlong').value=localStorage.getItem("restlong");

TimePomodoro=Number(localStorage.getItem("mins")) 
minsshort=Number(localStorage.getItem("restshort"))
minslong=Number(localStorage.getItem("restlong"))

document.getElementById('data').textContent=localStorage.getItem("meta");
document.getElementById('metaval').value=localStorage.getItem("meta");

if(localStorage.getItem('notifications')=='on'){
document.getElementById('notifications').checked=1
}
if(localStorage.getItem('notifications2')=='on'){
document.getElementById('notifications2').checked=1
}
if(localStorage.getItem('minimize')=='on'){
document.getElementById('minimize').checked=1
}
if(localStorage.getItem('maximize')=='on'){
document.getElementById('maximize').checked=1
}
if(localStorage.getItem('sound')=='on'){
document.getElementById('sound').checked=1
}

if(localStorage.getItem('vfx')=='on'){
document.getElementById('vfx').checked=1
}

}


var pomostoday=()=>{
document.getElementById("goal").textContent=localStorage.getItem("meta");
}



 var check = null;



 function startpomodoro() {
if (localStorage.getItem('minimize')=='on') {setTimeout(() => {window.electronAPI.Pomodorostarted()}, 3000);}


ispomotoday()

var countDownDate = new Date();
var sec=countDownDate.getSeconds();

stateActive()
cicleAdd()
 document.getElementById("output").textContent = state +" "+ciclo 

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {
                
if(MinutesPause==null){ countDownDate.setMinutes(countDownDate.getMinutes() + TimePomodoro );}else{countDownDate.setMinutes(countDownDate.getMinutes() + MinutesPause );}

if(SecondsPause==null){ countDownDate.setSeconds(countDownDate.getSeconds() + 1);}else{countDownDate.setSeconds(countDownDate.getSeconds() + 1+ SecondsPause);}


                check =setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
   distance = countDownDate - now;
    
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

if(localStorage.getItem('notifications')=='on'){PomodoroFinalizado()}
    if (localStorage.getItem('notifications2')=='on') { createnotification("Pomodoro Finalizado")}

if (localStorage.getItem('maximize')=="on") {  setTimeout(() => {window.electronAPI.Pomodorofinished()}, 5000);}
            

            if(localStorage.getItem("meta")==localStorage.getItem("pomocounts")){
              setTimeout(() => {felicidades()}, 5000);
  
            }
           clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
lastpomo()
ResetPause()
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

                
                
if(MinutesPause==null){ countDownDate.setMinutes(countDownDate.getMinutes() + TimeRest );}else{countDownDate.setMinutes(countDownDate.getMinutes() + MinutesPause );}

if(SecondsPause==null){ countDownDate.setSeconds(countDownDate.getSeconds() + 1);}else{countDownDate.setSeconds(countDownDate.getSeconds() + 1+ SecondsPause);}



           


              
                check = setInterval(function () {

      
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
   distance = countDownDate - now;
    
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

    if (localStorage.getItem('notifications')=='on') { DescanzoFinalizado()}
    if (localStorage.getItem('notifications2')=='on') { createnotification("Descanzo Finalizado")}


            clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
ResetPause()
startpomodoro()
  }
    
                }, 1000);
            }
        }

   






const stop = () => {
 if(state=='Tomate un descanzo'){console.log(state);stateStopbr()}
 if(state=='Corriendo pomodoro}'){console.log(state);stateStop()}


var pausetime = document.getElementById("time").textContent;
let pausetime1 = pausetime.match(/([0-9])([0-9])()/g);
let pausetime2 = pausetime.match(/()([0-9])([0-9])/g);



 MinutesPause=Number(pausetime1.at(0));
 SecondsPause= Number(pausetime2.at(1))

    clearInterval(check);
            check = null;

            document.getElementById("time").textContent = '00:00';
            document.getElementById("time").textContent = pausetime;

              secondsSphere.style.transform = 'rotate(-90deg) translateX(110px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    if(state=='Tomate un descanzo'||state=='DetenidoBr'){console.log(state);}else{console.log(state);ciclo=ciclo-1}
     if(state=='DetenidoBr'){    document.getElementById("output").textContent = "Descanzo pausado"
}else{    document.getElementById("output").textContent = state
}
}






const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('bi-pause-circle-fill');
    if (isPaused) {

        playPauseButton.classList.add('bi-pause-circle-fill');
        playPauseButton.classList.remove('bi-play-circle-fill');

        if (state== "Detenido") {startpomodoro();}
        if (state== "DetenidoBr") {startrest();}
        if(state == "Ningun pomodoro iniciado"){startpomodoro()}






    } else {
        var pausetime = document.getElementById("time").textContent;

        let pausetime2 = pausetime.match(/()([0-9])([0-9])/g);
        Secondslet= Number(pausetime2.at(1))

var checkifstoptheclock=()=>{
console.log(Secondslet)
if(Secondslet>1){
        playPauseButton.classList.remove('bi-pause-circle-fill');
        playPauseButton.classList.add('bi-play-circle-fill');

        if (state=="Tomate un descanzo"){stop();stateStopbr(); }else{stateStop();stop()}
    }
}

    checkifstoptheclock()

    }
}
