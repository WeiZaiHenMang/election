var { ipcRenderer } = require('electron');
var { BrowserWindow } = require('electron').remote;


ipcRenderer.on('New_Man-red', function (event, aid,id) {
  // 接收到主进程通过webContents广播给到的参数
  console.log('接收数据'+ aid);
  // 通过窗口id 拿到对应窗口实例
  var frId = BrowserWindow.fromId(id)
  console.log(frId)
  // 通过实例之后的方法广播给这个id的窗口
  frId.webContents.send('fridName','open')
})