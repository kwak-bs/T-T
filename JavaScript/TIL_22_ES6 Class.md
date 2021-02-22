# ES6 Class



```javascript
class Animal {
    // 생성자
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    
    say() {
        console.log(this.sound);
    }
}

const dog1 = new Animal('개', '멍멍이', '멍멍');
const cat1 = new Animal('고양이', '야옹이', '야옹');

dog1.say(); // "멍멍" 출력.
cat1.say(); // "야옹" 출력.

// class 내부에 함수를 만들게 되면 자동으로 그 함수는 prototype으로 등록이 된다.
console.log(Animal.prototype.say);
// say()함수에 대한 정보가 출력된다.



// class 문법은 상속을 해야하는 상황에서 더 쉽게 할 수 있다.
class Dog extends Animal {
    /* 
    기존 Aniamal 객체에서 쓰는 constructor를 덮어 쓴다.
    이 과정에서 super 키워드를 이용하여 Animal이 가지고 있는 constructor를 
    먼저 호출하고 나서 자신이 해야할 일을 처리할 수 있다.
    */
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog2 = new Dog('멍멍이', '멍멍');
const cat2 = new Cat('고양이', '야옹');

dog2.say(); // "멍멍" 출력.
cat2.say(); // "야옹" 출력.
```

