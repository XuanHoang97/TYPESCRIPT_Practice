// TYPE ALIAS
type StringOrNumber = string | number;
type Student = {
    name: string;
    id: StringOrNumber
}

const studentDetails = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student Name: ${studentName} and ID: ${id}`);
}

// studentDetails(123, 'John');
// studentDetails('456', 'John');


