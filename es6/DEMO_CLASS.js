class Animal {
    // 构造函数，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }
    // toString 是原型对象上的属性
    toString() {
        return 'name:' + this.name + ',color:' + this.color;
    }
}

var animal = new Animal('dog','white');//实例化Animal
console.log(animal.toString());

console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); // false
console.log(animal.__proto__.hasOwnProperty('toString')); // true

class Cat extends Animal {
    constructor(action) {
        // 子类必须要在constructor中指定super 函数，否则在新建实例的时候会报错.
        // 如果没有置顶consructor,默认带super函数的constructor将会被添加、
        super('cat','white');
        this.action = action;
    }
    toString() {
        return super.toString();
    }
}

var cat = new Cat('catch')
console.log(cat.toString());

// 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true
