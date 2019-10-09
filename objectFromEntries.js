/*
 * Object.fromEntries()
 */

let students = {
  ana: 15,
  beatriz: 22,
  carlos: 18,
  diogo: 17,
  manuel: 21
};

let vectorStudents = Object.entries(students);

console.log(students);
console.log("Object.entries", vectorStudents);

let older = vectorStudents.filter(([name, age]) => {
  return age >= 18;
});

console.log(older);

let olderStudents = {};

for (let [name, age] of older) {
  olderStudents[name] = age;
}

console.log("map", olderStudents);

olderStudents = {};
olderStudents = Object.fromEntries(older);
console.log("Object.fromEtries", olderStudents);
