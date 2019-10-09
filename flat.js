/*
 * Array.flat()
 * Array.flatMap()
 */

let semesterClasses = [
  [
    "Matemática Fundamental",
    "Lógica de Programação",
    "Algoritmos",
    "Inglês Técnico",
    "Introdução a Computação"
  ],
  [
    "Cálculo 1",
    "Programação",
    "Estrutura de Dados 1",
    ["Projeto 1", "Normas Academicas"],
    "Banco de Dados"
  ],
  [
    "Cálculo 2",
    "Programação O.O.",
    "Estrutura de Dados 2",
    "Engenharia de Software",
    "Sistemas Operacionais"
  ],
  [
    "Redes",
    "Programação Web",
    "Compiladores",
    ["Projeto 2", "Produção de Texto"],
    "Micro controladores"
  ]
];

let classes = [];

classes = [].concat.apply([], semesterClasses);

classes = semesterClasses.flat();
console.log(classes);

classes = semesterClasses.flat(2);
console.log(classes);

classes = semesterClasses.flat(Infinity);
console.log(classes);

let grades = [7.8, 6.2, 8.0, 6.4];
let roundGradesStudents = grades.map(grade => [grade, Math.round(grade)]);
console.log(roundGradesStudents);

let gradesFlat = [];

gradesFlat = [].concat.apply([], roundGradesStudents);
console.log("concat", gradesFlat);

gradesFlat = grades.flatMap(grade => [grade, Math.round(grade)]);
console.log("flatMap", gradesFlat);
