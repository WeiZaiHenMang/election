const fs = require('fs')
// console.log(fs)
window.onload=function() {

  var btn = document.querySelector('#but')
  var text = document.querySelector('#text')

  but.onclick=function (params) {

    fs.readFile('package.json',function (e,val) {
      
      text.innerHTML = val
      
    })
  }
}