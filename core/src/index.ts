// Entry point of Electron
import * as path from 'path';
import {app, BrowserWindow} from 'electron';
import * as remote from '@electron/remote/main';

let mainWindow: BrowserWindow = null;

function singleInstance() {
  app.requestSingleInstanceLock();

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }
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
      experimentalFeatures: true,
      enableRemoteModule: true,
      contextIsolation: false // Todo remove contextIsolation to prevent possible injection
    }
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'ui/index.html'));
  mainWindow.webContents.on('did-fail-provisional-load', (event, errCode, _, url) => {
    if (errCode === -6 && url !== path.join('file://', __dirname, 'ui/index.html')) {
      event.preventDefault();
      mainWindow.loadURL(path.join('file://', __dirname, 'ui/index.html'));
    }
  });
}

function init() {
  singleInstance();
  remote.initialize();
  app.on('ready', () => {
    createWindow();
    mainWindow.webContents.openDevTools();
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
