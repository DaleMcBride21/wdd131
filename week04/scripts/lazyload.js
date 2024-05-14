










// this is the code for the footer of each assignment
// code below if for latest modification

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");

// Format the date for better readability
let formattedDate = `${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`;

lastModified.innerHTML = `<p>Last Modification: ${formattedDate}</p>`;