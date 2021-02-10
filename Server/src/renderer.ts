import { ipcRenderer } from 'electron'

ipcRenderer.on('update', (event, message) => {
    console.log(message)
});

