const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", function() {
    
    const productNameSelect = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
});

window.addEventListener("load", function() {
    if (window.location.pathname === "/review.html") {
        let reviewCounter = localStorage.getItem("reviewCounter");
        if (!reviewCounter) {
            reviewCounter = 0;
        }
        reviewCounter++;
        localStorage.setItem("reviewCounter", reviewCounter);
    }
});




// code below if for latest modification

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");

// Format the date for better readability
let formattedDate = `${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`;

lastModified.innerHTML = `<p>Last Modification: ${formattedDate}</p>`;