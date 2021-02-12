import { ipcMain } from 'electron';

ipcMain.on('ManageContentPage-parseContentBtnPressed', () => {
    console.log('button pressed');
})