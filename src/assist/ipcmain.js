var { ipcMain } = require('electron')

ipcMain.on('RenMan', function (event,data) {
  // console.log(event)
  console.log(data)

  event.sender.send('RenMan_On','返回主进程数据')
})

// ipcMain.on('ipc1', function (event,data) {
//   console.log(event)
//   console.log(data)
// })