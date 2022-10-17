
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth +
    (cardMarginRight * (cardCount / 3)) -
    carouselWidth - cardMarginRight);
let cards = document.querySelectorAll(".card");
let count = 0;
leftButton.addEventListener("click", function () {
    if (offset !== 0) {
        offset += 200 + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
        count--;
        cards.forEach(cardS => {

            let current = document.getElementsByClassName("size");
            current[0].className = current[0].className.replace(" size", "");
            cards[count].className += " size";
        })
    }
})

rightButton.addEventListener("click", function () {

    if (offset !== maxX) {
        offset -= 200 + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
        // cards.nextElementSibling.style.backgroundColor = "blue";
        count++;
        cards.forEach(cardS => {

            let current = document.getElementsByClassName("size");
            current[0].className = current[0].className.replace(" size", "");
            cards[count].className += " size";
        })

    }
})