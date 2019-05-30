// Entry point of Electron
const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow = null;

function singleInstance() {
  app.requestSingleInstanceLock();

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    minWidth: 680,
    height: 840,
    frame: false,
    title: app.getName(),
    webPreferences: {
      nodeIntegration: true,
      experimentalFeatures: true
    }
  });

  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
}

function init() {
  singleInstance();
  app.on('ready', () => {
    createWindow();
    mainWindow.openDevTools();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

init();
