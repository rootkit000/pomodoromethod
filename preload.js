const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    Pomodorofinished: () => ipcRenderer.send('Pomo-finished'),
    Pomodorostarted: () => ipcRenderer.send('Pomo-started'),
    Breakfinished: () => ipcRenderer.send('break-finished')
})


