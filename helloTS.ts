console.log('hello world')

// 一、常用类型
// 基础类型
let age:number = 18
console.log(age)



// 类型别名
type Customer=(number| string)[]
let arr1 : Customer = ['a',1,'b',2]
let arr2 : Customer = [1,1,1,1]

// 函数类型
function demo(num1:number,num2:number):number{
    return num1+num2
}

const demo1 = (num1:number,num2:number):number =>{
    return num1+num2
}

const demo2 :(num1:number,num2:number)=>number =(num1,num2)=>{
    return num1+num2
}

// 函数没有返回值
const demo3:(num1:number,num2:number)=>void =(num1,num2)=>{
    num1+num2
}
// 函数可选参数
const demo4=(num1:number,num2:number,num3?:number):void =>{
    console.log(num1,num2,num3)
}
demo4(1,2)

// 对象类型
let Person:{name:string,age:number,interests?:string,sayHi():void} ={
    name:'JACK',
    age:18,
    sayHi() {
        
    },
}

// 接口(只能给对象指定)// 类型别名（可以给任意类型指定 ）
// 接口类型：定义的变量比接口少了一些属性是不允许的：多了一些也是不允许的，必须完全吻合
interface Person1{name:string,age:number,interests?:string,sayHi():void}
let newPerson : Person1 ={
    name:'JACK',
    age:18,
    sayHi() {
        
    },
}

// 接口继承
interface Person2 extends Person1{gender:'male'|'female'}
let newnewPerson : Person2={
    name:'JACK',
    age:18,
    gender:'male',
    sayHi() {
        
    },
}
console.log(newnewPerson.name)




// 枚举(枚举成员都有值)
enum Direction {Up=18,Down=4,Left,Right}
function changeDirection(direction:Direction1){
    console.log(direction)
}

// 元组
let position:[number,number,string] = [1,1,'red']

// 类型推论(省略部门 类型定义)
let newAge = 18

function demo5(num1:number,num2:number){
    return num1+num2
}

// 类型断言（指定更加具体的类型）
// const alink = document.getElementById('link') as HTMLAnchorElement

// 字面量类型
let Str1 = 'hello ts'
// string
const Str2 = 'hello ts'
// hello ts

// 字面量类型配合枚举类型
function changeDirection1(direction:'up'|'down'|'left'|'right'){
    return direction
}

enum Direction1 {Up='UP',Down='DOWN',Left='DOWN',Right='DOWN'}

changeDirection(Direction1.Left)


// type of
let p ={num1:1,num2:2}
function demo6(direction:typeof p){
    return(direction)
}


// 二、高级类型
// 1.class类
class Student{
age:number;
name:string
constructor(age:number,name:string){
    this.age=age,
    this.name=name
}
}

let p1 = new Student(18,'Jack')
p1.name='skj'
console.log(p1,'p1')

// 继承
class Animal{
    name:string;
    constructor(name:string){
        this.name=name
    }
    move(){
        console.log('move')
        return 1
    }
}
class Dog extends Animal{
    bark(){
        console.log('汪')
        return 1
    }
}
const mimi = new Dog('mimi')
console.log(mimi.move())


// 实现接口
interface Alarm{
    alert():void
}

interface Light{
    lightOn():void
    lightOff():void
}

// 这里如果实现接口的类中没有定义Light里面的全部两个属性，就会报错

class Car implements Alarm,Light{
    alert() {
      console.log('alarm')
        
    }
    lightOn(){
        console.log('lightOn')
        
    }
    lightOff(): void {
        console.log('lightOff')
    }
}
const mini = new Car()
console.log(mini.alert())

// 2.泛型
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']