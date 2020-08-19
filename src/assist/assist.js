
var fs = require('fs')

window.onload = function () {

  var btn = document.querySelector('#but')

  var test = document.querySelector('#text')

  btn.onclick = function (params) {

    fs.readFile('package-lock.json', function (err, params) {

      test.innerHTML = params

    })

  }



  // ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
  // ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
  // ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
  // ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
  var cont = document.querySelector('#cont')

  cont.ondragenter = cont.ondragover = cont.ondragleave = function (params) {
    // console.log(params)
    return false
  }
  cont.ondrop = function (params) {

    // params.preventDefault()

    // console.log(params.dataTransfer.files[0])

    var txt = params.dataTransfer.files[0].path

    fs.readFile(txt, "utf-8", function (err, val) {

      if (err) {

        return false

      }

      cont.innerHTML = val

    })

    // UTF-8不太管用,比如ANSL格式或者UTF-16格式文件就转换不了
  }



  var { BrowserWindow, Menu} = require('electron').remote

  var btn1 = document.querySelector('#btn')

  btn1.onclick = function (params) {

    // 新建窗口
    let win = new BrowserWindow({

      width: 800,
      height: 600,
      fullscreenable: false
    });
    // 打开路径
    win.loadURL(`file://${__dirname}/New.html`)

    // 关闭窗口
    win.on('closed', () => {

      win = null

    })
  }


  var template = [
    {
      label: '菜单',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'CmdOrCtrl+Z',
          role: 'undo'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+CmdOrCtrl+Z',
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'CmdOrCtrl+X',
          role: 'cut'
        },
        {
          label: 'Copy',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy'
        },
        {
          label: 'Paste',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste'
        },
        {
          type: 'separator'
        },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          role: 'selectall'
        },
      ]
    },
    {
      label: '视图',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Ctrl+R',
          click: function (item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.reload();
          }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: (function () {
            if (process.platform == 'darwin')
              return 'Ctrl+Command+F';
            else
              return 'F11';
          })(),
          click: function (item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: (function () {
            if (process.platform == 'darwin')
              return 'Alt+Command+I';
            else
              return 'Ctrl+Shift+I';
          })(),
          click: function (item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.toggleDevTools();
          }
        },
      ]
    },
    {
      label: 'Window',
      role: 'window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'CmdOrCtrl+M',
          role: 'minimize'
        },
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+W',
          role: 'close'
        },
      ]
    },
    {
      label: 'Help',
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: function () { require('electron').shell.openExternal('http://electron.atom.io') }
        },
      ]
    },
  ];

  if (process.platform == 'darwin') {
    var name = require('electron').remote.app.getName();
    template.unshift({
      label: name,
      submenu: [
        {
          label: 'About ' + name,
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide ' + name,
          accelerator: 'Command+H',
          role: 'hide'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Alt+H',
          role: 'hideothers'
        },
        {
          label: 'Show All',
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: function () { app.quit(); }
        },
      ]
    });
    // Window menu.
    template[3].submenu.push(
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        role: 'front'
      }
    );
  }
  // var template = [
  //   {
  //     id: 1,
  //     label: '菜单',
  //     submenu: [
  //       {
  //         label: '新建窗口'
  //       },
  //       {
  //         label: '取消'
  //       }
  //     ],
  //   },
  //   {
  //     id :2,
  //     label: '文件管理',
  //     submenu: [
  //       {
  //         label: '新建窗口'
  //       },
  //       {
  //         label: '取消'
  //       }
  //     ],
  //   }
  // ]
  console.log(Menu)
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}