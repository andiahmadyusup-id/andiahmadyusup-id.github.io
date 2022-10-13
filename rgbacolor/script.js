let allRange = document.querySelectorAll("input");
let box = document.querySelector(".box");
let colorText = document.querySelector(".color-text");
let btnCopy = document.querySelector(".copy");
allRange.forEach(range => {
    range.addEventListener("input", () => {

        let red = document.querySelector(".red").value;
        let green = document.querySelector(".green").value;
        let blue = document.querySelector(".blue").value;
        let alpha = document.querySelector(".alpha").value;

        box.style.backgroundColor = `rgba(${red},${green}, ${blue}, ${alpha})`;
        colorText.value = `background-color: rgba(${red}, ${green}, ${blue}, ${alpha})`; 
    })
})
  btnCopy.addEventListener("click", () => {
            colorText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(colorText.value);
            alert("Copied the text: " + colorText.value);
  })
