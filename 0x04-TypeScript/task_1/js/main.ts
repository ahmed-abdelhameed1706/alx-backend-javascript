interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

const teacher : Teacher = {
    firstName: 'Ahmed',
    lastName: 'Abd ElHameed',
    fullTimeEmployee: null,
    location: 'cairo',
    contract: false
}

console.log(teacher)