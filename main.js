const {app, BrowserWindow, ipcMain,shell,Menu, Tray} = require('electron')
const path = require('path')
const iconpath =path.join(__dirname,'build/icon.ico')
let mainWindow=null
let appIcon = null
// app is in development
if (!app.isPackaged) {
	require("electron-reload")(__dirname);
}

 function createWindow () {
	 mainWindow = new BrowserWindow({
		
//    kiosk:true,
//    fullscreen :true,
//    alwaysOnTop:true,
			resizable:false,
    	movable: false,
   		skipTaskbar: true,
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
		mainWindow.hide()
	})
	mainWindow.loadFile('app/index.html')
}

//Menu.setApplicationMenu(null);



app.whenReady().then(() => {
	appIcon = new Tray(iconpath)




	const contextMenu = Menu.buildFromTemplate([
		{ label: 'mostrar', type: 'radio' ,click: ()=> mainWindow.show()},
		{ label: 'ocultar', type: 'radio' ,click: ()=> mainWindow.hide()},
		{ label: 'cerrar', type: 'radio' , click: ()=> app.quit()




	}
	])

	// Make a change to the context menu
	contextMenu.items[1].checked = false

	// Call this again for Linux because we modified the context menu
	appIcon.setContextMenu(contextMenu)
	appIcon.setToolTip('This is my application.')


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
