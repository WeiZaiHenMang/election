var { ipcMain,BrowserWindow} = require('electron')

var path = require('path')

// ipcMain.on('RenMan', function (event,data) {
//   // console.log(event)
//   console.log(data)

//   event.sender.send('RenMan_On','返回主进程数据')
// })

// ipcMain.on('ipc1', function (event,data) {
//   console.log(event)
//   console.log(data)
// })

ipcMain.on('New_Man',function (event,data) {
  // console.log(data)
  var winId = BrowserWindow.getFocusedWindow().id;
  // console.log(winId)
  if (data == 'open new window'){
    // console.log('666')
    var win = new BrowserWindow({

      winth:600,
      height:800,
      webPreferences: {
        nodeIntegration: true
      }

    });

    win.loadURL(path.join('file:', __dirname,'../New.html'));

      win.webContents.openDevTools();

      win.webContents.on('did-finish-load',function (params) {
        // console.log(data)
        // console.log(winId)
        win.webContents.send('New_Man-red', data, winId)
      })

      win.on('close',function (params) {

        win = null

      })
  }
})