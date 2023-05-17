const inputStudents = [
    { name: "John", age: 21, grade: 90 },
    { name: "Jane", age: 20, grade: 85 },
    { name: "Alice", age: 22, grade: 90 },
    { name: "Bob", age: 20, grade: 80 },
    { name: "David", age: 21, grade: 85 },
];
const out = [
    { name: "Alice", age: 22, grade: 90 },
    { name: "John", age: 21, grade: 90 },
    { name: "David", age: 21, grade: 85 },
    { name: "Jane", age: 20, grade: 85 },
    { name: "Bob", age: 20, grade: 80 },
];
function sortStudents(students) {
    return students.sort((a, b) => {
        if (a.grade !== b.grade) {
            return b.grade - a.grade; //Сортування за оцінкою
        }
        if (a.age !== b.age) {
            return b.age- a.age; // Сортування за віком, спочатку старші
        }
        return a.name.localeCompare(b.name); // Сортування імен за алфавітом 
    });
}
const sortedStudents = sortStudents(inputStudents);
sortedStudents.forEach(student => {
  console.log(student);
});
