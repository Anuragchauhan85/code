class person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hii my name is ${this.name}`);
    }
}

class student extends person{
    constructor(name,age,marks) {
      super(name, age);
      this.marks = marks;
    }
}

class teacher extends person {
  constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
  }
}