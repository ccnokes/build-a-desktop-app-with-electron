const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');
let mainWindow;
const isWindows = process.platform === 'win32';

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
        },
        {
          label: 'Say Hello',
          click() {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              message: 'Hello',
              detail: 'Just a friendly meow.',
              buttons: ['Meow', 'Close'], //can pass multiple buttons in here and then get the index of the clicked on in the callback
              defaultId: 0
            });
          }
        }
      ]
    },
  ]);
  Menu.setApplicationMenu(menu);
});
