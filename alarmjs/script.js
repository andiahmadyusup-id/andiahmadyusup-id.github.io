let sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true;
let displayTime = document.getElementById("clock");
let currentTime = setInterval(() => {
    let date = new Date();
    let hours = (12 - (date.getHours()));
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }


    displayTime.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + ampm;
}, 1000);

function addZero(time) {
    return (time < 10) ? "0" + time : time;
}

function hoursMenu() {
    let select = document.getElementById("alarm-hours");
    let hour = 12;

    for (i = 1; i <= hour; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}
hoursMenu();

function minutesMenu() {
    let select = document.getElementById("alarm-minutes");
    let minute = 59;

    for (i = 1; i <= minute; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}
minutesMenu();


function alarmSet() {
    sound.pause();
    let hour = document.getElementById('alarm-hours');
    let minute = document.getElementById('alarm-minutes');

    let apm = document.getElementById('am-pm');


    let selectedHour = hour.options[hour.selectedIndex].value;
    let selectedMin = minute.options[minute.selectedIndex].value;
    let selectedAP = apm.options[apm.selectedIndex].value;

    let alarmTime = selectedHour + ":" + selectedMin + ":" + "00" + selectedAP;
    console.log('alarmTime:' + alarmTime);
    document.getElementById('alarm-hours').disabled = true;
    document.getElementById('alarm-minutes').disabled = true;
    document.getElementById('am-pm').disabled = true;


    setInterval(function () {

        let date = new Date();
        let hours = (12 - (date.getHours()));
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


        //convert military time to standard time

        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 00) {
            hours = 12;
        } else {
            hours = hours;
        }

        let currentTimes = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + ampm;
        console.log("curent time : " + currentTimes);

        if (alarmTime == currentTimes) {
            sound.play();
            if (confirm("WAKE UP!!!!") == true) {
                document.getElementById('alarm-hours').disabled = false;
                document.getElementById('alarm-minutes').disabled = false;
                document.getElementById('am-pm').disabled = false;
                sound.pause();
            } else {
                document.getElementById('alarm-hours').disabled = false;
                document.getElementById('alarm-minutes').disabled = false;
                document.getElementById('am-pm').disabled = false;
                sound.play();
            }
        }

    }, 1000);



}