// find method and sort method
// const students = [
//   { name: "Alice", grade: "A", age: 18 },
//   { name: "Bob", grade: "B", age: 20 },
//   { name: "Charlie", grade: "A", age: 22 },
//   { name: "Diana", grade: "C", age: 19 },
//   { name: "Ethan", grade: "A", age: 21 }
// ];


// console.log(students.find(student => student.grade === 'A'))

// Sorts the array in descending order of age.
// return the first student with grade A

// how do we do that
// we use the sort method and comparing a and b repetitively
// we will return a - b to make sure that when b is greater we get a negative number
// that will make a still hold its position before b

// const firstStudentA = students.sort((student1, student2) => student2.age - student1.age).find(student => student.grade === 'A')

// console.log(firstStudentA)
// console.log(students);


// CHALLENGE 2
const students = [
  { name: "Alice Smith", grades: [88, 92, 79], age: 17 },
  { name: "Bob Johnson", grades: [70, 65, 72], age: 18 },
  { name: "Carmen Lee", grades: [95, 98, 100], age: 17 },
  { name: "Dylan Moore", grades: [85, 89, 84], age: 19 },
  { name: "Esha Patel", grades: [93, 90, 91], age: 17 },
  { name: "Faisal Khan", grades: [60, 59, 62], age: 18 }
];


// expected:
// 1.	Filter students who have an average grade of 90 or above — these are the honor roll students.
// 2.	Among those, sort them in descending order of age.
// 3.	Find the first student who is under 18.
// 4.	Return an object with just their name and averageGrade.

const studentWithHonor = students
    .filter(student => {
    // pseudocode
    // let average = somefunction to calculate the average of the items in the array
    // return average >= 90 (if its true then the student has an honor);
        let average = student.grades.reduce((average, grade) => average += (grade / student.grades.length), 0);
        return average >= 90;})
    .sort((studentA, studentB) => studentB.age - studentA.age);


console.log(studentWithHonor);   // expected Lee and Patel.

const firstStudentWithHonor = studentWithHonor.find(student => student.age < 18);
console.log(firstStudentWithHonor);  // expected Carmen Lee

// new array with objects of students that stores their average grades.
const studentWithHonorGrades = studentWithHonor.map(student => {
        let average = student.grades.reduce((average, grade) => average += (grade / student.grades.length), 0);
        return {name: student.name, averageGrade: average};
    })

console.log(studentWithHonorGrades)


// cleaner approach
const honorRollWithAverages = students
  .map(student => {
    const average = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
    // the ... is the spread operator .. that says copy all the key-value pairs of this object in this new object
    return { ...student, averageGrade: average };
    // that line will instruct that the props and methods in student all be conserved and add new property to this new array being created.
  })
  .filter(student => student.averageGrade >= 90)
  .sort((a, b) => b.age - a.age);


  console.log('new appraoch')
console.log(honorRollWithAverages);

const topHonorStudent = honorRollWithAverages.find(student => student.age < 18);

// displaying the student object with selected infromation only.
console.log({name: topHonorStudent.name, averageGrade: topHonorStudent.averageGrade.toFixed(2)})

