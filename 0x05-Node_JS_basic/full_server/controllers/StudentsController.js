import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      response.status = 200;
      const title = 'This is the list of our students';
      const obj = await readDatabase('./database.csv');
      let content = '';
      for (const cls in obj) {
        if (cls) content += `\nNumber of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`;
      }
      response.send(`${title}${content}`);
    } catch (error) {
      response.send(500, 'Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    }
    try {
      const obj = await readDatabase('database.csv');
      const content = `List: ${obj[major].join(', ')}`;
      response.status = 200;
      response.send(`${content}`);
    } catch (error) {
      response.status = 500;
      response.send('Cannot load the database');
    }
  }
}

export default StudentsController;
