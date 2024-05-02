const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (studentReport; studentReport < 30;) {
    console.log(studentReport);
}

let number = 0
while (number <= 6) {
    if (studentReport[number] < 30) {
        console.log(studentReport[number]);
        number++
    }
    number++
}

studentReport.forEach(value => {
    if (value < LIMIT) {
        console.log(value);
    }
});

for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index])
    }
}

const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0; i < DAYS; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);
    const dayName = daysOfWeek[futureDate.getDay()];
    console.log(dayName);
}