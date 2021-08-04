//使用字面量进行类型声明,其本身
let a:1

a=1

//可以使用|来连接多个类型（联合类型）

let b:'male'|'female'

b='male'
b='female'

let c:boolean|string

c=true
c="hello"


//any:表示的是任意类型，一个变量设置类型设置any相当于对变量关于TS的类型监测

// let d:any

//声明变量如果不指定类型，则TS解析会自动判断变量的类型为any（隐式any）
let d

d=10
d='hello'
d=true


//unknown表示未知类型的值
let e:unknown

e=10
e='hello'
e=true

let s:string

//d的类型是any，它可以赋值给任意类型
// s=d

//unknown实际上是一个类型安全的any，类型的值不能赋值给其他类型
e="hello"

// s=e

if(typeof e==='string'){
    s=e
}

//类型断言 可以用来告诉解析器变量的实际类型

/**
 * 语法：
 * 变量 as 类型
 * <类型>变量
 * 
 */
s=e as string

s=<string>e

//void 用来表示空，以函数为例，就表示没有返回值的函数

function fn():void{
    return
}

//never 表示永远不会返回结果

function fn1():never{
    throw new Error('报错了！')
}

