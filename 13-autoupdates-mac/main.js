const { app, BrowserWindow, Menu, dialog } = require('electron');
const updater = require('./auto-updater');
const path = require('path');

const isWindows = process.platform === 'win32';
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  const menu = Menu.buildFromTemplate([
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? null : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        }
      ]
    },
  ]);
  Menu.setApplicationMenu(menu);
  
  updater.init();
});

app.on('window-all-closed', () => {
  if(isWindows) {
    app.quit();
  }
});
