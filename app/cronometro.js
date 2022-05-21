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

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {
                var min =0;
                
                var sec = 2;


                check = setInterval(function () {

                sec -= 1;
                    if(sec<0)
                {
                min -= 1;                        
                sec = 60;                        
                }


                if (min <= 0 && sec <= 0) {
            PomodoroFinalizado()
           clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
startrest()
            
        }
   
                    document.getElementById("time").innerHTML = min+":"+sec;
                }, 1000);
            }
        }





 function startrest() {

secondsSphere.style.animation = 'rotacion 60s linear infinite';
 if (check == null) {
                 min =5;
                
                 sec = 0;


                check = setInterval(function () {

                sec -= 1;
                    if(sec<0)
                {
                min -= 1;                        
                sec = 60;                        
                }


                if (min <= 0 && sec <= 0) {
            PomodoroFinalizado()
            clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '0';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');

        }
   
                    document.getElementById("time").innerHTML = min+":"+sec;
                }, 1000);
            }
        }

   





const stop = () => {
    clearInterval(check);
            check = null;
            document.getElementById("time").innerHTML = '00:00';
              secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
}
