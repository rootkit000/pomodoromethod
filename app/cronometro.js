

const { ipcRenderer, shell } = require('electron')

var check =null




function startrest() {
  
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
            //DescanzoFinalizado()
            clearInterval(check);
            check = null;
            document.getElementById("time").innerText = '0';
             window.electronAPI.Breakfinished()
             // secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
   // secondsSphere.style.animation = 'none';
//    startpomodoro()

        }
   
 if (min <10 && sec < 10 ) {
                   document.getElementById("time").innerText = "0"+min+":0"+sec;
     
 }

 if (min <10 && sec > 9 ) {
                   document.getElementById("time").innerText = "0"+min+":"+sec;
     
 }

 if (min > 9 && sec < 10 ) {
                   document.getElementById("time").innerText = min+":0"+sec;
     
 }


 if (min > 9 && sec > 9 ) {
                    document.getElementById("time").innerText = min+":"+sec;
     
 }
                }, 1000);
            }
        }

   


startrest()