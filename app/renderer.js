

// estado de la app

var state = "detenido";
function stateActive(){state = "pomodoro"}
function stateRest(){state = "descanzo "}
function stateStop(){state = "detenido"}




// contador de pomodoros
const TimePomodoro=0;
var TimeRest=5;

var ciclo = 0;

function cicleAdd(){
  if (ciclo<4) {ciclo=ciclo + 1}
 if (ciclo<1) {ciclo= 1}
  


if (ciclo < 4 && TimeRest !== 5) {
 TimeRest=5
}

  }
function cicleRest(){ 
  if (ciclo == 4) {
    ciclo = 0; 
    TimeRest=30;
  } 

  }












//notificaiones 

function PomodoroFinalizado() {




const NOTIFICATION_TITLE = 'Pomodoro Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el pomodoro es tiempo de Descanzar'
const CLICK_MESSAGE = 'Pomodoro numero:'+ciclo

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


}



function DescanzoFinalizado() {




const NOTIFICATION_TITLE = 'Descanzo Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el periodo de descanzo  es tiempo de reanudar'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


}


