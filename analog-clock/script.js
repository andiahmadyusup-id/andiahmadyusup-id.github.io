let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function rotate (){
    let date = new Date();
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getSeconds();

let sD = Math.floor(getSeconds * 360 / 60);
let mD = Math.floor(getMinutes * 360) / 60;
let hD = Math.floor(getHours * 360 / 12);



hours.style.transform = `rotate(${hD}deg)`;
minutes.style.transform = `rotate(${mD}deg)`;
seconds.style.transform = `rotate(${sD}deg)`;
console.log(getHours)
}

setInterval(rotate, 1000);
