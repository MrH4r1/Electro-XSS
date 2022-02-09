const electron = require('electron');
const {app, BrowserWindow } = electron;


app.on('ready',() =>{

const MainWindow = new BrowserWindow({
  webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
});


MainWindow.loadURL(`file://${__dirname}/views/index.html`)

});
