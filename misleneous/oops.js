//factory function
// function personmaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hii my name is ${this.name}`)
//         },
//     };
// return person
// }



// //contructor function
// function person(name, age) {
//     this.name=name;
//     this.age=age;
//     console.log(this)
// }

// person.prototype.talk = function () {
//     console.log(`hii my name is ${this.name}`);
// };

// let p1 = new person("adam", 45);


class person {
    constructor(name ,age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hii my name is ${this.name}`);
    }
}
let p1 = new person("adam", 45);



