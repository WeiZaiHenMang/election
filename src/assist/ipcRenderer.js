var { ipcRenderer } = require('electron')

// 渲染进程与主进程通信，并监听主进程返回
// var btn_RenMan = document.querySelector('#btn_Ren-Man')

// btn_RenMan.onclick = function (params) {
//   // console.log(params)
//   console.log('111')

//   ipcRenderer.send('RenMan', '向主进程发送数据')
//   ipcRenderer.on('RenMan_On',function (event,data) {
//     console.log(data)
//   })
// }

// 渲染进程与New渲染进程通信
var btn_RenMan_New = document.querySelector('#btn_Ren-Man_New')

btn_RenMan_New.onclick = function (params) {
  // console.log('159')
  ipcRenderer.send('New_Man','open new window')
}
// 监听New窗口返回
ipcRenderer.on('fridName',function (params,data) {
  console.log(data)
})
