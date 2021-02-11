import { ipcRenderer } from 'electron'

ipcRenderer.on('update', (event, data) => {
  const element = document.getElementById('app');
  console.log(data);
  element.setAttribute('src', data);
});

document.querySelector("body").addEventListener('click', function (e) {
  const tar = e.target;
  const anchor = (<HTMLElement>tar).closest('a');
  if (anchor !== null) {
    if (anchor.getAttribute('targetPage')) {
      ipcRenderer.send('pageChange', anchor.getAttribute('targetPage'))
    }
  }
}, false);

const webview = document.querySelector('webview')
webview.addEventListener('console-message', (e) => {
  const event: eventMessage = <eventMessage>e;
  if(event.level == 1){
    console.log('Guest page logged a message:', (<eventMessage>e).message);
  }
  if(event.level == 2){
    console.warn('Guest page logged a warning:', (<eventMessage>e).message);
  }
  if(event.level == 3){
    console.error('Guest page logged a error:', (<eventMessage>e).message);
  }
  if(event.level == 4){
    console.exception('Guest page logged a exception:', (<eventMessage>e).message);
  }
})

interface eventMessage extends Event{
  message:string;
  level:number;
}