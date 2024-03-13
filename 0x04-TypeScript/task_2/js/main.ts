export interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

export interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }

}

export function createEmployee(salary: number | string): Director | Teacher {
  if ((typeof (salary) === "number") && (salary < 500)) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}


export function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  else {
    return (employee as Teacher).workTeacherTasks();
  }
}

// Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

// it takes todayClass as an argument
// it will return the string Teaching Math if todayClass is Math
// it will return the string Teaching History if todayClass is History


export type Subjects = "Math" | "History"


export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  else {
    return "Teaching History";
  }
}
