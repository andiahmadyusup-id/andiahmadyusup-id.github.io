let btn = document.querySelector(".btn-generate");
let txt = document.querySelector(".txt-color");


function getColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
    txt.innerHTML = "#" + color;
}

btn.addEventListener("click", ()=>{
    getColor();
})