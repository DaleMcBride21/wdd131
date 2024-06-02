const navMenu = document.querySelector(".navigation-links");
const navButton = document.querySelector("#navigation");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
})