export interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
};

const student1: Student = {
  firstName: "Ato",
  lastName: "Toffah",
  age: 22,
  location: "Ghana"
};

const student2: Student = {
  firstName: "David",
  lastName: "Arko",
  age: 12,
  location: "South Africa"
};

const studentArray: Array<Student> = [student1, student2];


const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table')
  const header = document.createElement('tr')
  const col1 = document.createElement('th')
  col1.innerText = 'FirstName'
  const col2 = document.createElement('th')
  col2.innerText = 'Location'
  header.insertAdjacentElement('beforeend', col1)
  header.insertAdjacentElement('beforeend', col2)
  table.insertAdjacentElement('beforeend', header)

  for (const student of students) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.innerText = student.firstName;
    const location = document.createElement('td');
    location.innerText = student.location;
    row.insertAdjacentElement('beforeend', name);
    row.insertAdjacentElement('beforeend', location);
    table.insertAdjacentElement('beforeend', row);

  }

  document.body.insertAdjacentElement('beforeend', table)
}



displayStudents(studentArray);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';