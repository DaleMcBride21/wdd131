const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "Aba Nigeria Temple"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "Manti Utah Temple"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        alt: "Payson Utah Temple"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "Yigo Guam Temple"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "Washington D.C. Temple"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "Lima Peru Temple"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "Mexico City Temple"
    },
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20",
        area: 45251,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/2ff304d05520229fae54c290f936ba01b20173e5/full/320%2C/0/default",
        alt: "Hamilton New Zealand Temple"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl: "https://churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/320%2C/0/default",
        alt: "Anchorage Alaska Temple"
    },
    {
        templeName: "Star Valley Wyoming",
        location: "Star Valley, Wyoming, United States",
        dedicated: "2016, October, 30",
        area: 18609,
        imageUrl: "https://churchofjesuschrist.org/imgs/ea2493d57ba9e201bdc6d815545ec72ac8d4f39a/full/320%2C/0/default",
        alt: "Star Valley Wyoming Temple"
    }
    // Add more temple objects here...
];

// old temple page code
const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    filterTemples(temple => {
        let allTemples = temple;
        return allTemples
    }, "Home");
});

oldTemplesLink.addEventListener("click", () => {
    filterTemples(temple => {
        let dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedYear < 1900;
    }, "Old Temples");
});

newTemplesLink.addEventListener("click", () => {
    filterTemples(temple => {
        let dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedYear >= 2000;
    }, "New Temples");
});

largeTemplesLink.addEventListener("click", () => {
    filterTemples(temple => temple.area > 50000, "Large Temples");
});

smallTemplesLink.addEventListener("click", () => {
    filterTemples(temple => temple.area <= 50000, "Small Temples");
});

function filterTemples(predicate, title) {
    let filteredTemples = temples.filter(predicate);
    renderTempleCards(filteredTemples, title);
}

function createTempleCard(temple) {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">`;

    return templeCard;
}

function renderTempleCards(temples, title) {
    const templeCardsContainer = document.getElementById("templeCards");
    templeCardsContainer.innerHTML = "";
    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeCardsContainer.appendChild(templeCard);
    });
    document.querySelector("#title").textContent = title;
}

window.addEventListener("DOMContentLoaded", () => {
    renderTempleCards(temples, "Home");
});


//Navigation Code
const navMenu = document.querySelector(".navigation-links");
const navButton = document.querySelector("#navigation");
const title = document.querySelector("#title");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
});

window.addEventListener("resize", function() {
    if (this.window.innerWidth >= 768) {
        navMenu.classList.remove("show");
        navButton.classList.remove("show");
    }
});

navMenu.addEventListener("click", function(event) {
    if (event.target.tagName === 'A') {
        title.textContent = event.target.textContent;
    }
});

// this is the code for the footer of each assignment
// code below if for latest modification

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");

// Format the date for better readability
let formattedDate = `${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`;

lastModified.innerHTML = `<p>Last Modification: ${formattedDate}</p>`;
