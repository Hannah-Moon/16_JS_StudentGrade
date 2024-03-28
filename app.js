/* <Homework Requirement>
1. Create a button element.
2. Add an event listener to the button that triggers a prompt window.
3. Inside the event listener, prompt the user to enter the grade and assignment name.
4. Update the student's grade and assignment fields accordingly.
5. Update the display on the screen to reflect the changes. */


// ------------------- { Reference Code from the Class }
let allStudents = {
  jordan: {
    name: "Jordan",
    grade: "",
    missingAssignments: [],
  },
  kyle: {
    name: "Kyle",
    grade: "",
    missingAssignments: [],
  },
  maxine: {
    name: "Maxine",
    grade: "",
    missingAssignments: [],
  },
  kadesha: {
    name: "Kadesha",
    grade: "",
    missingAssignments: [],
  },
};

let students = ["jordan", "kyle", "maxine", "kadesha"];

let body = document.querySelector("body");

const generateStudents = () => {
    students.forEach((student) => {
        let newParent = document.createElement("div");
        newParent.setAttribute("class", "studentContainer");

        let studentName = document.createElement("div");
        studentName.setAttribute("class", "namer");
        studentName.innerHTML = `Name: ${allStudents[student].name}`;

        let studentGrade = document.createElement("div");
        studentGrade.setAttribute("class", "grader");
        studentGrade.innerHTML = `Grade: ${allStudents[student].grade} `;

        let studentAssign = document.createElement("div");
        studentAssign.setAttribute("class", "assign");
        studentAssign.innerHTML = `Assignment: ${allStudents[student].missingAssignments.join(', ')}`;

// ------------------- { Create another button and letting users to enter score and assignemtnt name }

        let addButton = document.createElement("button");
        addButton.innerHTML = "Add Grade & Assignment";
        addButton.addEventListener("click", () => {

          // Prompt pop up to collect the data from users. 
            let grade = prompt(`Enter grade for ${allStudents[student].name}:`);
            let assignmentName = prompt(`Enter assignment name for ${allStudents[student].name}:`);
          
          // Add event Listener 
            allStudents[student].grade = grade || allStudents[student].grade;
            if (assignmentName) {
                allStudents[student].missingAssignments.push(assignmentName);
            }
          
          // Display on the screen
            studentGrade.innerHTML = `Grade: ${allStudents[student].grade}`;
            studentAssign.innerHTML = `Assignment: ${allStudents[student].missingAssignments.join(', ')}`;
        });

        newParent.append(studentName);
        newParent.append(studentGrade);
        newParent.append(studentAssign);
        newParent.append(addButton);
        body.append(newParent);
    });
}


// Call the function to generate students when the page loads
generateStudents();