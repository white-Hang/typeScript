class Person{

    /**
     * 直接定义的属性是实例属性，需要通过对象的实例去访问
     * const per = new Person()
     * per.name
     */

    //定义实例属性
    name:string = "houzi"
    //在属性前使用static关键字可以定义类属性（静态属性）,直接通过类去访问
    // Person.age
    static age:number = 18

    //readonly开头的属性表示一个只读的属性，无法修改
    readonly hobbies:string = "houzi"

    //定义方法
    sayHello(){
        console.log('dajiahao1')
    }
}

const per = new Person()

console.log(per)