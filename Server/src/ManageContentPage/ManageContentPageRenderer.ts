import { ipcRenderer } from 'electron';

console.log('ManagePageLoaded')

document.getElementById('parseContentBtn').addEventListener('click', () => {
    ipcRenderer.send('ManageContentPage-parseContentBtnPressed', '');
});