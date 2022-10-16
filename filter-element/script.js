let select = document.querySelector("select");

select.addEventListener("change", () =>{
  display(select.value);
})

function display(e){
let card = document.querySelectorAll(".card");
card.forEach( cards => {
  if(cards.classList.contains(e)){
    cards.style.display = "block";
  } else{
    cards.style.display = "none";
  }
})
}

display('card')


let btns = document.querySelectorAll(".btn");
btns.forEach( button => {
button.addEventListener("click",() =>{
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  button.className += " active";
})
})