var { ipcRenderer } = require('electron')

var btn_RenMan = document.querySelector('#btn_Ren-Man')

btn_RenMan.onclick = function (params) {
  // console.log(params)
  console.log('111')

  ipcRenderer.send('RenMan', '向主进程发送数据')
  ipcRenderer.on('RenMan_On',function (event,data) {
    console.log(data)
  })
}
