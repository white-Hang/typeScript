//使用字面量进行类型声明,其本身
var a;
a = 1;
//可以使用|来连接多个类型（联合类型）
var b;
b = 'male';
b = 'female';
var c;
c = true;
c = "hello";
//any:表示的是任意类型，一个变量设置类型设置any相当于对变量关于TS的类型监测
// let d:any
//声明变量如果不指定类型，则TS解析会自动判断变量的类型为any（隐式any）
var d;
d = 10;
d = 'hello';
d = true;
//unknown表示未知类型的值
var e;
e = 10;
e = 'hello';
e = true;
var s;
//d的类型是any，它可以赋值给任意类型
// s=d
//unknown实际上是一个类型安全的any，类型的值不能赋值给其他类型
e = "hello";
// s=e
if (typeof e === 'string') {
    s = e;
}
//类型断言 可以用来告诉解析器变量的实际类型
s = e;
var newArr1 = [{ title: '123' }, { title: '123' }, { title: '12' }];
var newArr2 = [{ title: '1213' }, { title: '1231' }, { title: '123' }];
var newArr = newArr1.concat(newArr2);
var obj = {};
var arr = newArr.reduce(function (pre, cur) {
    obj[cur.title] ? '' : (obj[cur.title] = true && pre.push(cur));
    return pre;
}, []);
console.log(arr, 'arr');
