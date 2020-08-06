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
  let subjects = [];
  let studSubjects = Object.keys(stud.subjects);
  studSubjects.forEach((subj) => {
    subj = subj.toLowerCase(subj);
    let subjFirstLetter = subj.slice(0, 1).toUpperCase();
    subj = subj.slice(1, subj.length);

    const re = new RegExp(`_`, `g`);
    subj = subj.replace(re, ` `);
    const subjectName = subjFirstLetter + subj;
    subjects.push(subjectName);
  });

  return subjects;
};
console.log(`Student"s subjects are:`, getSubjects(students[0]));

// function#2
const getAverageMark = (stud) => {
  let averSum = 0;
  let studSubjects = Object.values(stud.subjects);
  studSubjects = studSubjects.flat();

  studSubjects.reduce(function (accumulator, currentValue) {
    return (sum = accumulator + currentValue);
  });
  averSum = (sum / studSubjects.length).toFixed(2);
  return averSum;
};
console.log(`Average mark of all subjects is:`, getAverageMark(students[0]));

// function#3
const getStudentInfo = (stud) => {
  const { course, name } = stud;
  const someStudInfo = {
    course,
    name,
  };
  const averageMark = getAverageMark(stud);

  const studInfo = {
    ...someStudInfo,
    averageMark,
  };
  return studInfo;
};
console.log(`Information about student:`, getStudentInfo(students[0]));

// function#4
const getStudentsNames = (students) => {
  studNames = [];
  students.forEach((stud) => {
    studNames.push(stud.name);
  });
  return studNames.sort();
};
console.log(`Student"s names are:`, getStudentsNames(students));

// function#5
const getBestStudent = (students) => {
  let studInfo = {};
  students.forEach((stud) => {
    averageMark = Number(getAverageMark(stud));
    const { name } = stud;
    studInfo = {
      name,
      averageMark,
    };
  });
  Math.max(averageMark);
  return studInfo.name;
};
console.log(`The best student is:`, getBestStudent(students));

//function#6

const calculateWordLetters = (sent) => {
  wordArr = sent.split(``);
  wordObj = wordArr.reduce(function (word, letter) {
    if (letter in word) {
      word[letter]++;
    } else {
      word[letter] = 1;
    }
    return word;
  }, {});
  return wordObj;
};
console.log(
  `Object: keys=letters,values=count of letters of the word:`,
  calculateWordLetters(`test`)
);
