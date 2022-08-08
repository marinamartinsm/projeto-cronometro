var sec=00
var min=00
var hour=00
var interval=00

function twoDigits(digit) { //função para colocar 2 dígitos quando o número é menor que 10
  if (digit<10) {
    return('0'+digit)
  } else 
  return (digit)
}

function start() {
  interval = setInterval(seconds, 1000) //1000 milissegundos = 1s
}

function pause() {
  clearInterval(interval)
}

function stop() {
  clearInterval(interval)
  hour=0
  min=0
  sec=0
  document.getElementById('time').innerText = "00:00:00"
}

function seconds() {
  sec++
  if (sec==60) {
    min++
    sec=0
  }
  if (min==60) {
    hour++
    min=0
    sec=0
  }
  document.getElementById('time').innerText = twoDigits(hour)+":"+twoDigits(min)+":"+twoDigits(sec)
}
