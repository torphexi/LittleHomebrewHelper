import { ipcRenderer } from 'electron'

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded indexpagerenderer.js')
    ipcRenderer.send('IndexPage-test', 'test');
})

console.log('loaded indexpagerenderer.js')