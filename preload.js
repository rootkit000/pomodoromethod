const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    Pomodorofinished: () => ipcRenderer.send('Pomo-finished'),
    Breakfinished: () => ipcRenderer.send('break-finished')
})


