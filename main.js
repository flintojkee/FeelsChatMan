const electron = require('electron');
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const Menu = electron.Menu;
const Tray = electron.Tray;
var appIcon = null;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let splash
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      minWidth: 600,
      minHeight: 456,
      show: false,
      backgroundColor: '#3e3e3e'
  });
    splash = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 600,
        minHeight: 300,
        maxWidth: 800,
        maxHeight: 600,
        transparent: true,
        frame: false,
        alwaysOnTop: true
    });

    splash.loadURL(url.format({
        pathname: path.join(__dirname, './Frontend/splash.html'),
        protocol: 'file:',
        slashes: true
    }));
    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './Frontend/index.html'),

        protocol: 'file:',
        slashes: true
    }));

    mainWindow.once('ready-to-show', () => {
        setTimeout(function(){splash.destroy(); mainWindow.show();},0);
    });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
app.on('ready', function(){
    appIcon = new Tray('Frontend/images/feelsgoodman.png');
    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    appIcon.setToolTip('Feels chat man.');
    appIcon.setContextMenu(contextMenu);
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
