

// estado de la app



var state = "Ningun pomodoro iniciado";
function stateActive(){
  state = "Corriendo pomodoro"
$("#body").removeClass("bodypomo")
$("#body").removeClass("bodypomo3")
 $("#body").addClass("bodypomo2");


 $(".ui2").addClass("ui");
 $(".ui3").addClass("ui");
$(".ui").removeClass("ui2");
$(".ui3").removeClass("ui3");

$(".circle").addClass("circle-content");
$(".circle").removeClass("circle-content2");
$(".circle").removeClass("circle-content3");

$(".modal-content").css( "background-color", "rgba(525, 125, 125, 0.9)")

$(".badge").removeClass("bg-success");
$(".badge").removeClass("bg-primary");
$(".badge").addClass("bg-danger");
}
function stateRest(){state = "Tomate un descanzo"
$("#body").removeClass("bg-danger");
$("#body").removeClass("bodypomo2");
 $("#body").addClass("bodypomo");
$(".circle").addClass("circle-content2");
$(".circle").removeClass("circle-content");

 $(".modal-content").css( "background-color", "rgba(159, 223, 223, 0.6)")


 $(".ui").addClass("ui2");
$(".ui2").removeClass("ui");

$(".badge").removeClass("bg-success");
$(".badge").removeClass("bg-danger");
$(".badge").addClass("bg-primary");
}
function stateStop(){state = "Detenido"

$("#body").removeClass("bodypomo")
$("#body").removeClass("bg-danger")
$("#body").removeClass("bodypomo2")
$("#body").addClass("bodypomo3")


 $(".ui").addClass("ui3");
$(".ui").removeClass("ui2");
$(".ui").removeClass("ui");

$(".circle").addClass("circle-content3");
$(".circle").removeClass("circle-content2");
$(".circle").removeClass("circle-content");


$(".modal-content").css( "background-color", "rgba(203, 231, 197, 0.8)")

$(".badge").removeClass("bg-primary");
$(".badge").removeClass("bg-danger");
$(".badge").addClass("bg-success");

}

function stateStopbr(){state = "DetenidoBr"

$("#body").removeClass("bodypomo")
$("#body").removeClass("bg-danger")
$("#body").removeClass("bodypomo2")
$("#body").addClass("bodypomo3")


 $(".ui").addClass("ui3");
$(".ui").removeClass("ui2");
$(".ui").removeClass("ui");

$(".circle").addClass("circle-content3");
$(".circle").removeClass("circle-content2");
$(".circle").removeClass("circle-content");


$(".modal-content").css( "background-color", "rgba(203, 231, 197, 0.8)")

$(".badge").removeClass("bg-primary");
$(".badge").removeClass("bg-danger");
$(".badge").addClass("bg-success");

}


var mins=Number(localStorage.getItem("mins")) 
var minsshort=Number(localStorage.getItem("restshort")) 
var minslong=Number(localStorage.getItem("restlong"))  

var MinutesPause=null;
var SecondsPause=null;
// contador de pomodoros
var TimePomodoro=mins;
var TimeRest=minsshort;
var Seconds=null;
var ciclo = 0;
var distance=null;

function cicleAdd(){
  if (ciclo<4) {ciclo=ciclo + 1;}
 if (ciclo<1) {ciclo= 1}
  


if (ciclo < 4 && TimeRest !== minsshort) {
 TimeRest=minsshort
}

  }
function cicleRest(){ 
  if (ciclo == 4) {
    ciclo = 0; 
    TimeRest=minslong;
  } 

  }









