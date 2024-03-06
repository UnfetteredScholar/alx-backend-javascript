export default function createIteratorObject(report) {
  const iterable = {
    * [Symbol.iterator]() {
      for (const department of Object.values(report.allEmployees)) {
        for (const employee of department) {
          yield employee;
        }
      }
    },
  };

  return iterable;
}
