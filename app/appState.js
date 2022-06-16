const counterhtml = document.getElementById('counterPomo')

// estado de la app

var pomocounter = null;


var state = "detenido";
function stateActive(){state = "pomodoro"}
function stateRest(){state = "descanzo "}
function stateStop(){state = "detenido"}




// contador de pomodoros
const TimePomodoro=0;
var TimeRest=5;

var ciclo = 0;

function cicleAdd(){
  if (ciclo<4) {ciclo=ciclo + 1;}
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









