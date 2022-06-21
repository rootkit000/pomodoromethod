/*Notifications using the Electron official module for notifications , if you wan ur app icon
and name see in the notifications u need use electron-forge to make the app installer the app
icon and name don't will show while is not compilled*/

function PomodoroFinalizado() {




const NOTIFICATION_TITLE = 'Pomodoro Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el pomodoro es tiempo de Descanzar'
const CLICK_MESSAGE = 'Pomodoro numero:'+pomocounter

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE 

}



function DescanzoFinalizado() {




const NOTIFICATION_TITLE = 'Descanzo Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el periodo de descanzo  es tiempo de reanudar'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//  .onclick = () =>             


}

