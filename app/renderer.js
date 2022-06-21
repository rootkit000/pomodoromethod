
const playPauseButton = document.getElementById('play-pause');
const stopwatch = document.getElementById('stopwatch');
const timerRender = document.getElementById('time');

const secondsSphere = document.getElementById('seconds-sphere');
/*boton*/
const setButton = document.getElementById('btn')

/*titutlo*/
const titleInput = document.getElementById('title')

/**/
setButton.addEventListener('click', () => {
    //const title = titleInput.value
    window.electronAPI.setTitle()
});






 var check = null;


 function startpomodoro() {
     setTimeout(() => {window.electronAPI.Pomodorostarted()}, 3000);


stateActive()
cicleAdd()
 document.getElementById("output").textContent = state +" "+ciclo 

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {
                var min =TimePomodoro;
                
                var sec = 59;


                check = setInterval(function () {

                sec -= 1;
                    if(sec<0)
                {
                min -= 1;                        
                sec = 60;                        
                }


                if (min <= 0 && sec <= 0) {
          
            pomocounter += 1 ; counterhtml.textContent="Pomodoros en esta session :"+pomocounter;
            PomodoroFinalizado()
   
  setTimeout(() => {window.electronAPI.Pomodorofinished()}, 5000);
           clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
startrest()
            
        }
   
 if (min <10 && sec < 10 ) {
                   timerRender.textContent = "0"+min+":0"+sec;
     
 }

 if (min <10 && sec > 9 ) {
                   timerRender.textContent = "0"+min+":"+sec;
     
 }

 if (min > 9 && sec < 10 ) {
                   timerRender.textContent = min+":0"+sec;
     
 }


 if (min > 9 && sec > 9 ) {
                    timerRender.textContent = min+":"+sec;
     
 }
    
                }, 1000);
            }
        }





 function startrest() {
    cicleRest()
    stateRest()
    document.getElementById("output").textContent = state 

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {

                 min =TimeRest;
                
                 sec = 0;


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
            document.getElementById("time").textContent = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    startpomodoro()

        }
   
 if (min <10 && sec < 10 ) {
                   timerRender.textContent = "0"+min+":0"+sec;
     
 }

 if (min <10 && sec > 9 ) {
                   timerRender.textContent = "0"+min+":"+sec;
     
 }

 if (min > 9 && sec < 10 ) {
                   timerRender.textContent = min+":0"+sec;
     
 }


 if (min > 9 && sec > 9 ) {
                    timerRender.textContent = min+":"+sec;
     
 }
                }, 1000);
            }
        }

   





const stop = () => {
    stateStop()
    clearInterval(check);
            check = null;
            document.getElementById("time").textContent = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    ciclo=ciclo-1
    document.getElementById("output").textContent = state
}






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
