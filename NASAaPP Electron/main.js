const electron =  require("electron");
const path = require('path');
const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    icon: "scr/drawable/nasa.jpg",
    title: "NasaApp",
    hasShadow: true,
    center: true,
    maximizable: true,
    resizable: true,
    height: 700,
    width: 1100,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: "#000"
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('scr/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
});
