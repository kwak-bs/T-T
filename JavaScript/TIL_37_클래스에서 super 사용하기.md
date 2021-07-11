# 클래스에서 super 사용하기  

> **super** 키워드는 부모 오브젝트의 함수를 호출할 때 사용된다. 
>
> 클래스에서는 부모의 생성자 함수를 호출할 때 사용된다. 
>
> 생성자에서는 `super` 키워드 하나만 사용되거나 `this` 키워드가 사용되기 전에 호출되어야 한다. 또한 `super` 키워드는 부모 객체의 함수를 호출하는데 사용될 수 있다. 



```javascript
// super

class Parent {
  name;

  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log("hello", this.name);
  }
}

class Child extends Parent {
  age = 37;

  constructor(name, age) {
    // this가 호출되기 전에 부모 클래스에 있는 변수를 먼저 설정할 수 있도록 한다.
    super(name);
    this.age = age;
  }

  hello() {
    console.log("hello", this.name, this.age);
  }
}

const p = new Parent("Mark");
const c = new Child("Sam", 25);

console.log(p, c); // Parent { name: 'Mark' } Child { name: 'Sam', age: 25 } 출력

```

