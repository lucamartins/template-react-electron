const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  })

  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";

    window.loadURL(appURL);
}

app.whenReady().then(() => {
  createWindow()
})
