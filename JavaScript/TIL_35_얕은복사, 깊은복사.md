# 깊은 복사, 얕은 복사



> 자바스크립트에서 값은 원시값과 참조값으로 나뉜다. 

### 원시값 

- Number 
- String 
- Boolean

- Null
- Undefined

### 참조값 

- Object
- Symbol

<br/>

**결론부터 말하자면 얕은 복사는 객체의 참조값(주소값)을 복사하고, 깊은 복사는 객체의 실제 값(Value)을 복사한다.**

>  **원시값**은 값을 복사 할 때 복사된 값을 다른 메모리에 할당 하기 때문에 원래의 값과 복사된 값이 서로에게 영향을 미치지 않는다. 

```javascript
const a = 1;
let b = a;
b = 2;
console.log(a); // 1;
console.log(b); // 2; 
```



> 하지만 **참조값**은 변수가 객체의 주소를 가리키는 값이기 때문에 복사된 값(주소)이 같은 값을 가리킨다. 

```javascript
const a = {number: 1};
let b = a;
b.number = 2;

console.log(a); // {number: 2}
console.log(b); // {number: 2}
```

<br/>

<br/>

## 얕은 복사 Shllow Copy

> **얕은 복사**란 객체를 복사할 때 위의 예제처럼 원래값과 복사된 값이 같은 참조를 가리키고 있는 것을 말한다. 객체 안에 객체가 있을 경우 한 개 의 객체라도 원본 객체를 참조하고 있다면 이를 얕은 복사라고 한다. 

<br/>

### 1. Array.prototype.slice

얕은 복사의 대표적인 예다. 주로 배열을 깔끔하게 복사할 때 사용한다. start부터 end까지 대상 배열에서 꺼내와 새로운 배열을 만들어 값을 집어 넣는 메소드이다. start와 end를 따로 설정하지 않으면, 전체 배열을 얕은 복사한다.

```javascript
const arr = [1,2,3];
const copied = arr.silce();

console.log(JSON.stringify(arr) === JSON.stringify(copied)); // true
copied.push(4);
console.log(JSON.stringify(arr) === JSON.stringify(copied)); // false
```

복사는 깔끔하게 이루어졌고 문제가 없어보일 수 있지만, 얕은 복사는 중첩된 구조 복사를 제대로 수행할 수 없다는 단점이 있다. 즉 , 기존 복사와 같은 구조의 객체를 변경하려 하면 원본도 영향을 받는다. 

```javascript
const arr = [
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];
const copied = arr.slice();

console.log(JSON.stringify(arr) === JSON.stringify(copied)); // true

// 복사된 배열에만 변경과 추가를 해줬다.
copied[0][0] = 99; 
copied[0].push(98);

console.log(JSON.stringify(arr) === JSON.stringify(copied)); // true

console.log(copied);
// [ [ 99, 1, 1, 0, 4 ], [ 1, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 1, 0, 0, 0 ] ] 출력
console.log(arr);
// [ [ 99, 1, 1, 0, 4 ], [ 1, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 1, 0, 0, 0 ] ] 출력
```

copied가 복사된 객체라 기존 arr와 아무런 연관이 없어야하지만 중첩된 구조를 변경하면 원본과 복사본 모두 영향을 받는다. 즉, `Array.prototype.slice()`는 얕은 복사를 수행하기 때문에, 모든 값을 독립적으로 복사할 수 없다. 

<br/>

### 2. Object.assign()

> 첫 번째 요소로 들어온 객체에 다음 인자로 들어온 객체를 복사해준다. 

```javascript
const object = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = Object.assign({}, object);

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true
```

 복사된 객체 `copiedObj` 자체는 기존 `object`와 다른 객체지만 그 안에 들어가 있는 값은 기존 `object`안의 값과 같은 참조값을 가리키고 있다. 

MDN에는 `Object.assign()`에 대해 이렇게 설명했다. 

> “For deep cloning, we need to use alternatives because `Object.assign()` copies property values. If the source value is a reference to an object, it only copies that reference value.”
>
> ```
> 깊은 복사의 경우 Object.assign ()이 속성 값을 복사하기 때문에 대안을 사용해야합니다. 원본 값이 개체에 대한 참조 인 경우 해당 참조 값만 복사합니다.
> ```

<br/>

### 3. 전개 연산자

> 마찬가지 얕은 복사다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = {...obj}

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true
```

<br/>

<br/>

## 깊은 복사 Deep Copy

> **깊은 복사**된 객체는 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 말한다. 

사실 이것이 이 글을 쓰는 진짜 이유다. 복사를 하는 목적은 기존 객체의 값만 복사본으로 가져와 별도로 활용하기 위함인데, 기존 객체까지 건드린다면 이것은 복사를 하는 목적에 벗어난다고 생각한다. 

***하지만 분명히 얕은 복사를 하는 목적은 존재할 것이다. 내가 아직 모를 뿐..***

<br/>

### 1. JSON.parse && JSON.stringify

> `JSON.stringfy()`는 객체를 json 문자열로 변환하는데 이 과정에서 원본 객체와의 참조가 모두 끊어진다.
>
> 객체를 json 문자열로 변환 후, `JSON.parse()`를 이용해 다시 자바스크립트 객체(원래 객체)로 만들어준다. 
>
> 이 방법이 가장 간단하고 쉽지만 다른 방법에 비해 아주 **느리다**는 것이 단점이다. 

```javascript
const arr = [1, 2, [3, 4]];
const copied = JSON.parse(JSON.stringify(arr));
checker(arr, copied); // true
copied[2].push(5);
checker(arr, copied); // false
```

<br/>

### 2. 재귀함수를 이용한 복사

> 복잡하다는 것이 단점이다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

function copyObj(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = copyObj(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

const copiedObj = copyObj(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false 
```

<br/>

### 3. 라이브러리 사용

> `lodash` 라이브러리를 사용하면 깊은 복사를 더 쉽게 할 수 있다. 
>
> 하지만 설치를 해야하니, 코테나 이런 곳에서는 쓸모가 없을 수도 있다. 

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = _.cloneDeep(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false
```

h
