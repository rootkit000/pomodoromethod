const {app, BrowserWindow, ipcMain,shell,Menu,Tray,webContents} = require('electron')
const path = require('path')
const iconpath =path.join(__dirname,'build/icon.ico')
let mainWindow=null
let secondWindow=null
let appIcon = null



if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}// app is in development


app.allowRendererProcessReuse = false;

if (!app.isPackaged) {
	require("electron-reload")(__dirname);
}else{
	Menu.setApplicationMenu(null);
}

 function createWindow () {



if (!app.isPackaged) {
	 mainWindow = new BrowserWindow({
      id:"pomo",
      titleBarStyle:'default',
      titleBarOverlay: {
    color: 'rgba(0,0,0,0)',
    symbolColor: 'rgba(400,100,100,0.8)'
  },
 //   kiosk:true,
//    fullscreen :true,
	    alwaysOnTop:true,
			resizable:false,
    	movable: true,
   		skipTaskbar: false,
			show :true,
			darkTheme: true,
			transparent:false,
 			//frame:false ,
 //   closable : false,
			maximizable :false,
	 // autoHideMenuBar :true,
		webPreferences: {
			      preload: path.join(__dirname, 'preload.js'),

		      nodeIntegration: false,
		      contextIsolation: true,
          enableRemoteModule: true
			 }
	})

}
else
{



	 mainWindow = new BrowserWindow({

//    kiosk:true,
//    fullscreen :true,
	    alwaysOnTop:true,
			resizable:false,

			show :true,
			darkTheme: true,
			transparent:false,
		//	frame:false ,
 //   closable : false,
			maximizable :false,
		webPreferences: {
					preload: path.join(__dirname, 'preload.js'),
		      nodeIntegration: false,
		      contextIsolation: true,
          enableRemoteModule: true
			 }
	})

}



	ipcMain.on('set-title', () => {
		/*const webContents = event.sender
		const win = BrowserWindow.fromWebContents(webContents)
		win.setTitle(title)
	*/	mainWindow.hide()
	})


app.on('browser-window-blur', function(){


mainWindow.hide()

})



	mainWindow.loadFile('app/index.html')


}

//





ipcMain.on("Pomo-started", function (event) {

    mainWindow.hide();
 });


ipcMain.on("Pomo-finished", function (event) {


    mainWindow.show();
});


ipcMain.on("break-finished", function () {

  secondWindow.once("ready-to-show", () => {
    secondWindow.hide();
    mainWindow.show();
  });
});

app.whenReady().then(() => {
	appIcon = new Tray(iconpath)



	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Abrir', type: 'radio' ,click: ()=> mainWindow.show()},
		{ label: 'Cerrar', type: 'radio' , click: ()=> app.quit()




	}
	])

	// Make a change to the context menu
	contextMenu.items[1].checked = false

	// Call this again for Linux because we modified the context menu


	appIcon.setContextMenu(contextMenu)
	appIcon.setToolTip('Pomomethod.')


})
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

/* * Listen for the 'Countdown-Complete' event from the
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



/*
 * single Instance of the app
 */
const getTheLock = app.requestSingleInstanceLock();
if (!getTheLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    }
    mainWindow.focus();
  });
}
