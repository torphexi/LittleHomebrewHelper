import { ipcRenderer} from 'electron'

ipcRenderer.on('update', (event, data) => {
    const element = document.getElementById('app');
    element.innerHTML = data;
});


