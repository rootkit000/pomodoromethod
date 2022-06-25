

// estado de la app



var state = "Ningun pomodoro iniciado";
function stateActive(){state = "Corriendo pomodoro"}
function stateRest(){state = "Tomate un descanzo"}
function stateStop(){state = "Detenido"}




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









