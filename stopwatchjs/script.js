const miliseconds = document.querySelector(".tens");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let milisecond = 0;
let second = 0;
let minute = 0;
let interval;

function startTimer() {
    milisecond++;
    miliseconds.innerHTML = setNumber(milisecond)
    if (milisecond == 99) {
      second++
      seconds.innerHTML = setNumber(second);
      milisecond = 0;
    }
    if(second == 60){
        minute++;
        minutes.innerHTML = setNumber(minute);
        second = 0
    } if(minute == 60){
        alert("sorry, for now this stopwatch just can counting time only 60 minutes");
    }
}

function setNumber(number){
    return (number < 10) ? "0" + number : number; 
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