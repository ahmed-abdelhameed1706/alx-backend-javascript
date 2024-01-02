export default function createIteratorObject(report) {
    const employeesNames = []
    const employees = report.allEmployees

    for (let departmentName in employees) {
        employeesNames.push(...[...employees[departmentName]])
    }

    return employeesNames
}