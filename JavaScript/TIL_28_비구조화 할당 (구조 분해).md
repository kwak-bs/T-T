# 비구조화 할당 (구조 분해)



기본적인 비구조화 할당이다 (함수)

``` javascript
const object = { a: 1, b: 2};

function print({a=0,b=0}) {
    console.log(a); // 1 출력.
    console.log(b); // 2 출력.
}
print(object);

// 만약 값이 주어지지 않았다면 기본 값도 설정해줄 수 있다.
// a=0 , b=0 코드가 기본 값 설정해준 코드다.
```



비구조화 할당을 하면서 네이밍을 바꿔줄 수도 있다.

```javascript
const animal = { 
	name: '멍멍이',
    type: '개'
};

const {name: nickname} = animal;

console.log(nickname); // '멍멍이' 출력.

console.log(animal); // 기존 animal 객체 출력.
// 이름을 바꿔줬다고 해서 기존의 객체가 변경되는 것은 아니다.
```



객체가 아닌 배열에도 비구조화 할당을 할 수 있다.

```javascript
const array = [1];

cosnt [one, two = 2] = array;

console.log(one) // 1 출력.
console.log(two) // 2 출력.
```



객체의 깊숙한 곳에 있는 값을 꺼내는 방법을 알아보자. 2가지 방법이 있다.

```javascript
const deepObject = {
    state : {
        info: {
            name : bbangson
            lang: ['kor', 'eng']
        }
    },
    value : 5
}

// 방법 1.
const {name, lang} = deepObject.state.info;
const {value} = deepObject;

// 방법 2. (개인적으로 이건 좀 더러움)
const {
    state: {
        info: {
            name, lang:[firstLang, secondLang]
        }
    }, 
    value
} = deepObject

const extracted1 = {
    name,
    lang,
    value
};

const extracted2 = {
    name,
    firstLang,secondLang,
    value
}

console.log(extracted1); // 'bbangson', ['kor'],['eng'], 5 출력.
console.log(extracted2); // 'bbangson', 'kor', 'eng', 5 출력.
```

