var container1 = { content: 100 };
var container2 = { content: "Hello" };
var person1 = { name: "John" };
//3-vazifa
var Student = /** @class */ (function () {
    function Student(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.getInfo = function () {
        return "".concat(this.name, "ning bali:").concat(this.grade);
    };
    return Student;
}());
var student1 = new Student("Yunus", 3);
console.log(student1.getInfo());
