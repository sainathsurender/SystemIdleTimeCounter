const { app, Tray, Menu } = require('electron')
const electron = require('electron');
const _powerMonitor = electron.powerMonitor
const path = require('path')
const trayIcon = path.join(__dirname, 'favicon.ico')

let tray = null

app.on('ready', function () {
  tray = new Tray(trayIcon)

  let i = 0;
  setInterval(() => {
    if (_powerMonitor.getSystemIdleState(4) == 'idle') {
      // tray.displayBalloon({
      //   title: 'round',
      //   content: 'world',
      //   icon: trayIcon
      // });
      console.log(_powerMonitor.getSystemIdleTime());
    }
    else {
      console.log(_powerMonitor.getSystemIdleTime());
    }
  }, 1000)
})

app.on('will-quit', function (event) {
  event.preventDefault()
})