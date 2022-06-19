
const playPauseButton = document.getElementById('play-pause');
const stopwatch = document.getElementById('stopwatch');
const secondsSphere = document.getElementById('seconds-sphere');
/*boton*/
const setButton = document.getElementById('btn')

/*titutlo*/
const titleInput = document.getElementById('title')

/**/
setButton.addEventListener('click', () => {
    const title = titleInput.value
    window.electronAPI.setTitle()
});







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
          
            pomocounter += 1 ; counterhtml.innerText="Pomodoros: \n" +pomocounter;
            PomodoroFinalizado()
              window.electronAPI.setTitle()
              window.electronAPI.Pomodorofinished()
                
            clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
//startrest()
            
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
