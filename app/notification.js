/*Notifications using the Electron official module for notifications , if you wan ur app icon
and name see in the notifications u need use electron-forge to make the app installer the app
icon and name don't will show while is not compilled*/



  var createnotification=(body)=>{
    if(localStorage.getItem('notifications')=='off'){Soundnotifi()}
$(document).ready(function(){
  $(".notimodal").prepend("<div class='toast' id='mytoastnoti' role='alert' style='position:fixed; z-index: 999; right: -30vw; bottom: -30vh;' aria-live='assertive' aria-atomic='true'><div class='toast-header'><img src='../build/icon.png' style='width:20px; height: 20px;' class='rounded me-2' ><strong class='me-auto'>PomoMethod</strong><small></small><button type='button' class='btn-close' data-bs-dismiss='toast' aria-label='Close'></button></div><div class='toast-body'>"+body+"</div></div>");


  $('.toast').toast('show');
   $(".toast").animate({right: '2vw'});
    $(".toast").animate({bottom: '2vh'});
   
});
setTimeout(() => {   

var child = document.getElementById("mytoastnoti");

// Remove the child element from the document
child.parentNode.removeChild(child);


}, 7000);

}



function PomodoroFinalizado() {




const NOTIFICATION_TITLE = 'Pomodoro Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el pomodoro es tiempo de Descanzar'
const CLICK_MESSAGE = 'Pomodoro numero:'+pomocounter
Soundnotifi()
new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE 

}



function DescanzoFinalizado() {




const NOTIFICATION_TITLE = 'Descanzo Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el periodo de descanzo  es tiempo de reanudar'
const CLICK_MESSAGE = 'Notification clicked!'
Soundnotifi()
new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//  .onclick = () =>             


}

