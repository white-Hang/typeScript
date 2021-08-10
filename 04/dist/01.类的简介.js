"use strict";
class Person {
    constructor() {
        this.name = "houzi";
    }
}
//在属性前使用static关键字可以定义类属性（静态属性）
Person.age = 18;
const per = new Person();
console.log(per);
