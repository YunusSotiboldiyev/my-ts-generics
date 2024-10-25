//1-vazifa
interface Container<T> {
     content: T;
}
 let container1: Container<number> = { content: 100 };
 let container2: Container<string> = { content: "Hello" };
//2-vazifa
interface Person {
     name: string;
     age: number;
}
let person1: Partial<Person> = { name: "John" };
//3-vazifa
class Student {
     private name: string;
     private grade: number;
     constructor(name: string, grade: number) {
         this.name = name;
         this.grade = grade;
     }
     getInfo():string{
          return`${this.name}ning bali:${this.grade}`
     }
}
const student1 = new Student("Yunus", 3);
console.log(student1.getInfo()); 
 
