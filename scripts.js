// Placeholder for interactive functionality
console.log("JavaScript loaded.");

const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");
const eventCards = document.querySelector(".event-cards");

scrollLeftBtn.addEventListener("click", () => {
    eventCards.scrollBy({ left: -300, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
    eventCards.scrollBy({ left: 300, behavior: "smooth" });
});