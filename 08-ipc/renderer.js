const { ipcRenderer } = require('electron');
const countEl = document.querySelector('#count');

ipcRenderer.on('window-count', (event, props) => {
  countEl.textContent = props.count;
});

ipcRenderer.send('get-window-count');

document.querySelector('#new-window').addEventListener('click', () => {
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
});