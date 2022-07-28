
const uaup = require('uaup-js');



const { contextBridge, ipcRenderer } = require('electron');




const defaultStages = {
    Checking: "Comprobando actualizaciones!", // When Checking For Updates.
    Found: "Update disponible!",  // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Descargando...", // When Downloading Update.
    Unzipping: "Instalando...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Terminando...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Lanzando..." // When Launching the Application.
};

const updateOptions = {
    gitRepo: "pomodoromethod", // [Required] Your Repo Name
    gitUsername: "rootkit000",  // [Required] Your GitHub Username.

    appName: "PomoMethod", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "PomoMethod.exe", //[Required] The Executable of the Application to be Run after updating.
    //forceUpdate: true,
    //versionFile: "version.json",
    //progressBar: progress, // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
   // label: label, // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage

   };
checking=uaup.CheckForUpdates(updateOptions)

if(localStorage.getItem('updates')=='on'){

   uaup.Update(updateOptions);
}



contextBridge.exposeInMainWorld('electronAPI', {







    updateap: () =>{ uaup.Update(updateOptions) },
    setTitle: (title) => ipcRenderer.send('set-title', title),
    Pomodorofinished: () => ipcRenderer.send('Pomo-finished'),
    Pomodorostarted: () => ipcRenderer.send('Pomo-started'),
    Breakfinished: () => ipcRenderer.send('break-finished'),




})







