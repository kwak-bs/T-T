# 단축 평가 논리 계산법

> 논리 연산자를 사용해서 코드를 더 짧게 쓰는법을 의미한다.
>
> Show me the code

## && 연산자

```javascript
const dog = {
    name: '멍멍이'
};

function getName(animal) {
    return animal && animal.name;
}

const name = getName();
console.log(name);
// getName(dog); 는 dog출력. getName()은 undefined출력.
```



```javascript
console.log(true && 'hello'); // true 출력.
// 앞에 있는 것이 true면은 뒤에 값 출력.

console.log(false && 'hello'); // false 출력.
// 앞에 있는 것이 false면은 뒤에 값은 보지도 않는다.

console.log('hello' && 'bye'); // 'bye' 출력.
// 앞에 있는 것이 truthy한 값이기 때문에 뒤에 값을 출력한다.

console.log(null && 'hello'); // null 출력.
// 앞에 있는 것이 falthy한 값이기 때문에 null 출력.


// && 연산자는 앞에 있는 값이 truthy한 값이면 뒤에 값을 출력하고
// 앞에 있는 값이 falthy한 값이면 그 값을 출력한다. 

const object = { name : 'asdf'};

const name = object && object.name;
console.log(name); // 'asdf' 출력.

// 만약 object = null 이라면 name은 null을 출력한다.
```



## || 연산자

```javascript
const namelessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // '이름이 없는 동물입니다.' 출력.
// 만약 name에 값을 줬다면 해당 값이 출력된다.
```



```java
console.log(false || 'hello'); // 'hello' 출력.
console.log(null || 'ㅎㅇ'); // 'ㅎㅇ' 출력.
console.log(undefined || 'defined 되지 않았다.') // 'defined 되지 않았다.' 출력.

// or 연산자는 앞에 값이 false하면 뒤에 값이 출력된다.
    
console.log(1 || '음'); // 1 출력. 
// 앞에 값이 truthy하면 뒤에 값을 보지 않는다.

console.log(true || '여긴 안본다.'); // true 출력.
console.log('와아' || '나좀 봐줘'); // '와아' 출력.
console.log([] || 'ㅋㅋ'); // [] 출력.

// or 연산자는 어떠한 값이 없을 때, 없으면 이 값을 사용할래! 할 때 유용하다.
```

