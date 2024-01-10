interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

const director : Directors = {
    firstName: 'Ahmed',
    lastName: 'Abd ElHameed',
    fullTimeEmployee: true,
    location: 'cairo',
    numberOfReports: 18
}

interface printTeacherFunction {
    (param1: string, param2: string): string,
}


const printTeacher: printTeacherFunction = (firstName, lastName):string => {
    return firstName[0] + '. ' + lastName
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface
}

interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomework: () => string,
    displayName: () => string,
}




class StudentClass implements StudentClassInterface {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName
    }
}




const student1 = new StudentClass('Ahmed', 'AbdElHameed');
const student2 = new StudentClass('Farida', 'Mohamed');
console.log(student1.displayName());
console.log(student1.workOnHomework());
console.log(student2.displayName());
console.log(student2.workOnHomework());
console.log(student1);
console.log(student2);
