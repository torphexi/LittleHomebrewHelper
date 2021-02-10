import { ipcRenderer} from 'electron'

ipcRenderer.on('update', (event, data) => {
    const element = document.getElementById('app');
    element.innerHTML = data;
});

function onClick(){
    console.log('click');
}

document.querySelector("body").addEventListener('click', function(e) {
    var tar = e.target;
    var anchor = (<HTMLElement>tar).closest('a');
    if(anchor !== null) {
      if(anchor.getAttribute('targetPage')){
          ipcRenderer.send('pageChange', anchor.getAttribute('targetPage'))
      }
    }
  }, false);