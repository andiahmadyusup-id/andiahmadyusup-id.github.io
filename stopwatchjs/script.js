const miliseconds = document.querySelector(".tens");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let ms = 00;
let second = 00;
let minute = 00;
let interval;

function startTimer() {
    ms++;
    if (ms <= 9) {
        miliseconds.innerHTML = "0" + ms;
    } else if (ms > 9 && ms < 99) {
        miliseconds.innerHTML = ms;
    } else {
        second++;
        ms = 0;
    }

    if (second <= 9) {
        seconds.innerHTML = "0" + second;
    } else if (second > 9 && second < 60) {
        seconds.innerHTML = second;
    } else {
        minute++;
        second = 0;
    }

    if (minute <= 9) {
        minutes.innerHTML = "0" + minute;
    } else if (minute > 9 && minute < 60) {
        minutes.innerHTML = minute;
    } else {
        alert("sorry, this stopwatch just can counting time only 60 minutes");
    }
}

btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
btnStop.addEventListener("click", () => {
    clearInterval(interval);
})
btnReset.addEventListener("click", () => {
    clearInterval(interval);
    ms = 0;
    second = 0;
    minute = 0;

    miliseconds.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
})