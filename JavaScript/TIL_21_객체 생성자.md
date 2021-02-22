# 객체 생성자



```javascript
// 객채를 생성할 때는 변수명의 맨 앞글자는 대문자로 한다.
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // "멍멍" 출력
cat.say(); // "야옹" 출력


// 위의 코드는 비효율적인 이유가 새로운 Animal 객체를 생성할 때마다 똑같은 내용의 새로운 함수인 this.say 함수를 매 번 만들어 주고 있다는 것이다.

```



```javascript
// 객채를 생성할 때는 변수명의 맨 앞글자는 대문자로 한다.
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
}

/*
위의 prototype 코드는 아래 코드와 같은 역할을 한다.

function say() {
    console.log(this.sound);
}
dog.say = say;
cat.say = say;
즉, 모든 say 함수를 dog, cat 객체에 넣어준 것이다. 
*/

dog.say(); // "멍멍" 출력
cat.say(); // "야옹" 출력


// prototype은 선언해줌으로써 함수는 한번만 만들어 주고 새로운 객체가 들어올때마다 바인딩 시켜주는 역할은 한다. (재사용)
```

