const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf-8').toString().split('\n');
    data = data.slice(1, data.length);
    console.log(`Number of students: ${data.length}`);

    const dict = {};

    data.forEach((element) => {
      const student = element.split(',');

      if (!(student[3] in dict)) {
        dict[student[3]] = [student[0]];
      } else {
        dict[student[3]].push(student[0]);
      }
    });

    Object.keys(dict).forEach((key) => {
      console.log(`Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}`);
    });
    // console.log(dict);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
