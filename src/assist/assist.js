
var fs = require('fs')

window.onload = function () {

  var btn = document.querySelector('#but')
  
  var test = document.querySelector('#text')

  btn.onclick = function (params) {

    fs.readFile('package-lock.json',function (err,params) {

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
    
    fs.readFile(txt, "utf-8",function (err,val) {

      if (err) {

        return false

      }

      cont.innerHTML = val

    })

    // UTF-8不太管用,比如ANSL格式或者UTF-16格式文件就转换不了
  }
}