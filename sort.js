/**
 *
 * Array.sort()
 * Implementing the arrays 'stable sort' sorting algorithm .sort () method allows
 * lists are organized more predictably when objects have multiple properties.
 * Prior to ES10, JavaScript used two ways to sort lists, the stable sort being used in
 * small vectors and the unstable sort was used for large vectors. That made some results even
 * more unpredictable. Now this problem is solved.
 */

const students = [
  { name: "Alan", grade: 9 },
  { name: "Bruna", grade: 8 },
  { name: "Carlos", grade: 10 },
  { name: "Cristina", grade: 10 },
  { name: "Diego", grade: 7 },
  { name: "Eliana", grade: 8 },
  { name: "Fabio", grade: 9 }
];

students.sort((a, b) => a.grade - b.grade);

console.log(students);
