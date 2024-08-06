interface Student {
  firstName: string;
  lastName:  string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};


const student2: Student = {
  firstName: "Angelo",
  lastName: "TheMan",
  age: 23,
  location: "Ghana",
};


const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell();
  const secondNameCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});


table.appendChild(tbody);
document.body.appendChild(table);
