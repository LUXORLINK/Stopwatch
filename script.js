let count = 0
let timer

function timecount() {
    count++
    const hours = Math.floor(count / 3600)
    const minutes = Math.floor((count % 3600) / 60)
    const seconds = count % 60

    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    document.getElementById('Counting').innerHTML = formattedTime
}

function Start() {
    if (!timer) {
        timer = setInterval(timecount, 1000)
    }
}

function Stop() {
    clearInterval(timer)
    timer = null
}

function Reset() {
    clearInterval(timer)
    document.getElementById('Counting').innerHTML = '00:00:00'
    count = 0
    timer = null
}