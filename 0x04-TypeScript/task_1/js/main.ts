export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}


// Write a Class named StudentClass:

// The constructor accepts firstName(string) and lastName(string) arguments
// The class has a method named workOnHomework that return the string Currently working
// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface
// Requirements:

// You can reuse the Webpack configuration from the previous exercise to compile the code.
// When running npm run build, no TypeScript error should be displayed.
// Every variable should use TypeScript when possible.

interface IStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

interface IStudentClassConstructor {
  new(firstName: string, lastName: string): IStudentClass;
}

export class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}


export function createStudent(constructor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new constructor(firstName, lastName);
}

// export const testStudent = createStudent(StudentClass, 'Ato', 'Toffah');
// console.log(testStudent);
// console.log(testStudent.workOnHomework());
// console.log(testStudent.displayName());