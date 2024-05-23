//in object what we learned
//default typed object
//update property
//add new property
//define custom type property
//use any with object
//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//name
//roll
// number
//grade
/*let objectname = {
    key1: 'value1',
    key2: 'value2',
};*/
//let student = {
name: "touseef";
rollnumber: 23;
grades: [85, 90, 75,];
//};
//console.log(student.grades[1]);
//let products = {
//  name: "laptop",
//price: "8000",
//description: "high performancce latop with fast processor"
//}
//console.log(products.price);
//type interface
//interface person {
//  name: string;
//age: number;
//city: string;
//}
//let person1: person ={
//name: "john",
//age: 30,
//city: "London"
//}
//let person2 : person  = {
//  name: "ahmed",
//age: 35,
//city: "Lahore"   
//}
//console.log(person2.name);
//type annotation
//let myVariable: string ="hello";
//type infers
//let anotherVariable = 'wold'
//let person = {
//  name:"john",
//age: 30,
//city: "london"
//}
//updated property
//person.age= 35;
//person.city = "lahore";
//console.log(person);
//add new property
//person["gender"] = "male";
//console.log(person);
//define custom type property
// any property
//let myvariable: any;
//myvariable = 10;
//myvariable = "hello";
//myvariable = true;
var objectcontainingItems = {
    "laptop": {
        name: "laptop",
        price: "8000",
        description: "high performancce laptop with fast processor"
    },
    "mouse": {
        name: "mouse",
        price: "10000",
        description: "high performancce laptop with fast processor"
    },
    "keyboard": {
        name: "keyboard",
        price: "5000",
        description: "high performancce laptop with fast processor"
    },
};
console.log(objectcontainingItems);
