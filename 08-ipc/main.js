const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const windows = [];

function createBrowserWindow(browserWindowOpts) {
  let win = new BrowserWindow(Object.assign({
    width: 400,
    height: 300
  }, browserWindowOpts));

  windows.push(win);
  win.loadURL(path.join('file://', __dirname, 'index.html'));
  
  win.on('close', () => {
    windows.splice(windows.indexOf(win), 1);
    sendWindowCount();
  });
}

function sendWindowCount() {
  windows.forEach(win => {
    win.webContents.send('window-count', { count: windows.length });
  });
}

app.on('ready', () => {
  ipcMain.on('create-window', (event, props) => createBrowserWindow(props));
  ipcMain.on('get-window-count', sendWindowCount);
  createBrowserWindow();
});
