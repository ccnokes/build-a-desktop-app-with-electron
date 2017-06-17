const { remote } = require('electron');
const path = require('path');
require('devtron').install();
let currentWindow = remote.getCurrentWindow();


document.querySelector('#new-window').addEventListener('click', () => {
  const win = new remote.BrowserWindow({
    height: 400,
    width: 400
  });
  win.loadURL(path.join('file://', __dirname, 'index.html'));
});

function onBlur() {
  document.body.style = 'opacity: 0.2';
}

function onFocus() {
  document.body.style = 'opacity: 1';
}

currentWindow.on('blur', onBlur);
currentWindow.on('focus', onFocus);

window.addEventListener('beforeunload', () => {
  currentWindow.removeListener('focus', onFocus);
  currentWindow.removeListener('blur', onBlur);
});
