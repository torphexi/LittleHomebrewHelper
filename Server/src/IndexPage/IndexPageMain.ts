import { ipcMain } from 'electron';


ipcMain.on('IndexPage-test', () => {
    console.log('index page test')
})