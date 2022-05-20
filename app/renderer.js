function comenzarpomodoro() {
  let m = 25;
  let s = 50;
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}







function PomodoroFinalizado() {




const NOTIFICATION_TITLE = 'Pomodoro Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el pomodoro es tiempo de Descanzar'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


}



function DescanzoFinalizado() {




const NOTIFICATION_TITLE = 'Pomodoro Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el pomodoro es tiempo de Descanzar'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


}
