export default function createIteratorObject(report) {
  const employeesNames = [];
  const employees = report.allEmployees;

  for (const departmentName in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, departmentName)) {
      employeesNames.push(...employees[departmentName]);
    }
  }

  return employeesNames;
}
