const playPauseButton = document.getElementById('play-pause');
const stopwatch = document.getElementById('stopwatch');
const secondsSphere = document.getElementById('seconds-sphere');





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


 var check = null;


 function startpomodoro() {
   

stateActive()
cicleAdd()
 document.getElementById("output").innerText = state +" "+ciclo 

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {
                var min =0;
                
                var sec = 1;


                check = setInterval(function () {

                sec -= 1;
                    if(sec<0)
                {
                min -= 1;                        
                sec = 60;                        
                }


                if (min <= 0 && sec <= 0) {
          
            pomocounter += 1 ; counterhtml.innerText="Pomodoros en esta session :"+pomocounter;
            PomodoroFinalizado()
           clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
startrest()
            
        }
   
 if (min <10 && sec < 10 ) {
                   document.getElementById("time").innerHTML = "0"+min+":0"+sec;
     
 }

 if (min <10 && sec > 9 ) {
                   document.getElementById("time").innerHTML = "0"+min+":"+sec;
     
 }

 if (min > 9 && sec < 10 ) {
                   document.getElementById("time").innerHTML = min+":0"+sec;
     
 }


 if (min > 9 && sec > 9 ) {
                    document.getElementById("time").innerHTML = min+":"+sec;
     
 }
    
                }, 1000);
            }
        }





 function startrest() {
    cicleRest()
    stateRest()
    document.getElementById("output").innerText = state 

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {

                 min =0;
                
                 sec = 10;


                check = setInterval(function () {

                sec -= 1;
                    if(sec<0)
                {
                min -= 1;                        
                sec = 60;                        
                }


                if (min <= 0 && sec <= 0) {
            DescanzoFinalizado()
            clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    startpomodoro()

        }
   
 if (min <10 && sec < 10 ) {
                   document.getElementById("time").innerHTML = "0"+min+":0"+sec;
     
 }

 if (min <10 && sec > 9 ) {
                   document.getElementById("time").innerHTML = "0"+min+":"+sec;
     
 }

 if (min > 9 && sec < 10 ) {
                   document.getElementById("time").innerHTML = min+":0"+sec;
     
 }


 if (min > 9 && sec > 9 ) {
                    document.getElementById("time").innerHTML = min+":"+sec;
     
 }
                }, 1000);
            }
        }

   





const stop = () => {
    stateStop()
    clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    ciclo=ciclo-1
    document.getElementById("output").innerText = state
}
