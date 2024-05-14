// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
    enrollStudent: function (sectionNum) {
        const index = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (index >= 0) {
            this.sections[sectionIndex].enrolled++;
            outputSections(this.sections)
        }
    }, 
    dropStudent: function (sectionNum) {
        const index = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (index >= 0) {
            this.sections[sectionIndex].enrolled--;
            outputSections(this.sections)
        }
    }
};

function getNameNumber(course) {
    const getName = document.querySelector("#courseName")
    const getCode = document.querySelector("#sectionNumber")
    getName.textContent = aCourse.name;
    getCode.textContent = aCourse.code;
}

function outputSections(sections) {
    const table = sections.map(
        (section) => `<tr>
        <th>${section.sectionNum}</th>
        <th>${section.roomNum}</th>
        <th>${section.enrolled}</th>
        <th>${section.days}</th>
        <th>${section.instructor}</th></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

document.getElementById("enrollStudent").addEventListener("click", function() {
    let sectionNumber = document.getElementById("sectionNumber").value;
    aCourse.enrollStudent(sectionNumber)
})

document.getElementById("dropStudent").addEventListener("click", function() {
    let sectionNumber = document.getElementById("sectionNumber").value;
    aCourse.dropStudent(sectionNumber)
})


setCourseInfo(aCourse);
outputSections(aCourse.sections);
