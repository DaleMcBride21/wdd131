const navMenu = document.querySelector(".navigation-links");
const navButton = document.querySelector("#navigation");
const title = document.querySelector("#title");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
})

window.addEventListener("resize", function() {
    if (this.window.innerWidth >= 768) {
        navMenu.classList.remove("show");
        navButton.classList.remove("show");
    }
})

navMenu.addEventListener("click", function(event) {
    if (event.target.tagName === 'A') {
        title.textContent = event.target.textContent;
    }
})

const year = document.querySelector("#year");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

// this is the code for the footer of each assignment
// code below if for latest modification

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");

// Format the date for better readability
let formattedDate = `${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`;

lastModified.innerHTML = `<p>Last Modification: ${formattedDate}</p>`;