let timer = document.getElementById("timer");

let hrs = 0;
let min = 0;
let sec = 0;

let btnStart = document.getElementById("btnStart");
let btnPause = document.getElementById("btnPause");
let btnReset = document.getElementById("btnReset");
let btnStartClickCount = 0;

btnStart.addEventListener("click", () => { startTimer(); btnStart.disabled = true; });

function updateTime() {
    sec++;
    if (sec > 59) {
        sec -= 60;
        min++;
    }
    if (min > 59) {
        min -= 60;
        hrs++;
    }
    displayFormattedTime();
}

function startTimer() {
    let intervalID = setInterval(updateTime, 1000);
    btnReset.addEventListener("click", () => {
        clearInterval(intervalID);
        resetTimer();
        btnStart.disabled=false;
    });
    btnPause.addEventListener("click", () => {
        clearInterval(intervalID);
        btnStart.disabled=false;
    });
}



function resetTimer() {
    clearInterval();
    hrs = 0, min = 0, sec = 0;
    displayFormattedTime();
}

function displayFormattedTime() {
    const hours = hrs.toString().padStart(2, 0);
    const minutes = min.toString().padStart(2, 0);
    const seconds = sec.toString().padStart(2, 0);
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;

    // console.log(hours + ":" + minutes + ":" + seconds);
}