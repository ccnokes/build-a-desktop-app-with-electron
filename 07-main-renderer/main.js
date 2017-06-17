const { app, BrowserWindow } = require('electron');
const path = require('path');
let windows = [];

function createWindow() {
  const win = new BrowserWindow({ height: 300, width: 400 });
  win.loadURL(path.join('file://', __dirname, 'index.html'));
  windows.push(win);
}

app.on('ready', () => {
  createWindow();
  createWindow();
});
