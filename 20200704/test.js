function Person(){
    this.name="zs";
    this.age=18;
    this.gender="男"
}
let obj={
    hobby:"看书"
}
//  将构造函数的this绑定为obj
let changePerson = Person.bind(obj);
//  直接调用构造函数,函数会操作obj对象,给其添加三个属性;
changePerson();
//  1、输出obj
console.log(obj);
//  用改变了this指向的构造函数,new一个实例出来
let p = new changePerson();
// 2、输出obj
console.log(p);
