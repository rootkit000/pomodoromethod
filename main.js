const {app, BrowserWindow, ipcMain,shell,Menu} = require('electron')
const path = require('path')

// app is in development
if (!app.isPackaged) {
  require("electron-reload")(__dirname);
}


function createWindow () {
  const mainWindow = new BrowserWindow({
    
//    kiosk:true,
//    fullscreen :true,
//    alwaysOnTop:true,
      resizable:false,
//    movable: false,
//    skipTaskbar: false,
      show :true,
      darkTheme: true, 
      transparent:false,
//    frame:false ,
//    closable : false,
      maximizable :false,
   // autoHideMenuBar :true,
    webPreferences: {
     
      preload: path.join(__dirname, 'preload.js')
       }
  })

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  mainWindow.loadFile('app/index.html')
}

//Menu.setApplicationMenu(null);

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


function CreateSecondWindow() {
  secondWindow = new BrowserWindow(getBrowserOptions);
  secondWindow.loadURL(
    path.join("file://", __dirname, "/app/overlayscreen.html")
  );
  secondWindow.maximize();
}
ipcMain.on("MinimizeApp", () => {
  mainWindow.minimize();
});
ipcMain.on("MaximizeWindow", () => {
  mainWindow.show();
});
ipcMain.on("CloseBreakWindow", () => {
  secondWindow.close();
});
/**
 * Listen for the 'Countdown-Complete' event from the
 * renderer process
 * send the 'renderDefaultClock' to the renderer process
 */

ipcMain.on("CountdownComplete", function (event) {
  event.sender.send("renderDefaultClock");

  CreateSecondWindow();
  secondWindow.once("ready-to-show", () => {
    secondWindow.show();
  });
});

ipcMain.on("StartNextRound", function (event) {
  if (CurrentRound < UserRound) {
    mainWindow.webContents.send("ResetAndStart");
    CurrentRound++;
  } else {
    CurrentRound = 1;
  }
});
