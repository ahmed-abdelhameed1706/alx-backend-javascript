interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Ahmed',
    lastName: 'Abd EL Hameed',
    age: 28,
    location: 'Cairo'
}

const student2: Student = {
    firstName: 'Farida',
    lastName: 'Mohamed',
    age: 3,
    location: 'Cairo'
}

const studentList: Array<Student> = [student1, student2]


const renderTable = (studentArray: Array<Student>) => {
    const table = document.createElement('table')

    const tbody = document.createElement('tbody')

    studentArray.forEach((student) => {
        const row = document.createElement('tr')

        const cell = document.createElement('td')

        cell.textContent = student.firstName

        row.appendChild(cell)

        cell.textContent = student.location

        row.appendChild(cell)
    })
}

renderTable(studentList)