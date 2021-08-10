class Car{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    run(){
        console.log(this)
    }
}

const car = new Car('保时捷',18)