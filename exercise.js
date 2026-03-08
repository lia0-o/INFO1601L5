//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};
const students = [bob, sally, paul];

//-------------------------------Get Average Grade-----------------------------------
function getAverageGrade(student, course) {
  for (let i = 0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      let grades = student.transcript[i].grades;
      let sum = 0;
      for (let j = 0; j < grades.length; j++) {
        sum += grades[j];
      }
      return sum / grades.length;
    }
  }
  return -1; // course not found
}
 console.log("Bob's Average Grade: " + getAverageGrade(bob, 'INFO 1601'));
 
 //-----------------------------Get Assignment Mark-----------------------------------
function getAssignmentMark(student, course, num) {
  for (let i = 0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      return student.transcript[i].grades[num]; 
      // if you want assignment 1 = first, use grades[num - 1]
    }
  }
  return -1;
}
console.log("Sally's A1 Grade: " + getAssignmentMark(sally, 'INFO 1601', 1));

//----------------------------Average Assesments--------------------------------------
function averageAssessment(students, course, num) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < students.length; i++) {
    let transcript = students[i].transcript;
    for (let j = 0; j < transcript.length; j++) {
      if (transcript[j].course === course) {
        if (transcript[j].grades[num] !== undefined) {
          total += transcript[j].grades[num];
          count++;
        }
      }
    }
  }

  if (count > 0) {
    return total / count;
  } else {
    return -1;
  }
}
console.log("Average Grade for INFO 1601: " + averageAssessment(students, 'INFO 1601', 2))

