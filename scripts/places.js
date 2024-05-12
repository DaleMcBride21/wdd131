const temperature = 9;
const windSpeed = 5;
var windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16));

var windChill = Math.round(windChill);
if (temperature <= 10 && windSpeed>4.8) {
    document.getElementById("windChill").innerHTML= `${windChill}&deg;`
} else {
    document.getElementById("windChill").innerHTML= `N/A`
}




// this is the code for the footer of each assignment
// code below if for latest modification

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");

// Format the date for better readability
let formattedDate = `${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`;

lastModified.innerHTML = `<p>Last Modification: ${formattedDate}</p>`;