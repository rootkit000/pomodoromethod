const { contextBridge, ipcRenderer } = require('electron')

function PomodoroFinalizado() {




const NOTIFICATION_TITLE = 'Pomodoro Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el pomodoro es tiempo de Descanzar'
const CLICK_MESSAGE = 'Pomodoro numero:'+pomocounter

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => ipcRenderer.send('CloseBreakWindow')


}



function DescanzoFinalizado() {




const NOTIFICATION_TITLE = 'Descanzo Finalizado'
const NOTIFICATION_BODY = 'Ha finalizado el periodo de descanzo  es tiempo de reanudar'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE 


}

