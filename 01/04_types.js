//object表示一个js对象
var a;
a = {};
a = function () { };
//{}用来指定对象中可以包含哪些属性
//语法{属性名：属性值，属性名：属性值}
//在属性名后面加上一个?表示属性是可选的
var b;
b = { name: '1', age: 18 };
//[proName:string]:any  表示任意类型的属性
var c;
c = { name: '1', b: 2, c: 3 };
/**
 * 设置函数结构的类型声明
 *
 * 语法（形参：类型，形参：类型...）=>返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组类型
 * 类型[]
 * Array<类型>
 */
//string[]表示字符串数组
var e;
e = ['1', '2', '3'];
//number[]表示数值数组
var f;
var g;
/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型，类型，类型]
 */
var h;
h = ['1', '2'];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '1',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
