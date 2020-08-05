const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// function#1
const getSubjects = (stud) => {
  let studSubjects = Object.keys(stud.subjects);
  studSubjects.forEach((name) => {
    name = name.toLowerCase(name);
    let name1 = name.slice(0, 1).toUpperCase();
    name = name.slice(1, name.length);
    //console.log(name1 + name);
    let re = new RegExp(`_`, `g`);
    name = name.replace(re, ` `);
    console.log(name1 + name);
  });
  //studSubjects = studSubjects.toUpperCase[0];
  return studSubjects;
};
console.log(getSubjects(students[2]));
