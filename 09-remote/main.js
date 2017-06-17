const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 400
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
});
