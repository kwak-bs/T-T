# Truthy and Falsy

> Truthy는 true 같은 것이고 Falsy는 false 같은 것이다. 이렇게 말하면 이해가 불가능하니 
>
> 코드를 확인하자.

```javascript
console.log(!undefined); // true 출력.
console.log(!null); // true 출력.
console.log(!0); // true 출력.
console.log(!''); // true 출력.
console.log(!NaN); // true 출력.
console.log(!false); // true 출력.

/*
const value = 1 / 'asdf';  
console.log(value); // NaN출력.
*/

// 위의 true를 출력한 값들은 전부 falsy한 값이다.
// 위의 값들은 제외한 값들은 웬만하면 truthy한 값이다.

console.log(!3); // false 출력.
console.log(!'hello'); // false 출력.
console.log(!['array']); // false 출력.
console.log(![]); // false 출력.
console.log(!{}); // false 출력.
// 참고로 배열과 객체는 그냥 truthy한 값이다.

// falsy한 값을 잘 알아두자.
```



```javascript
const value = {};

const truthy = !!value; // 삼항연산자 대신 이런식으로도 작성가능하다.
console.log(truthy); // true 출력.
// 빈 객체는 true이므로 앞에 느낌표를 두 번 붙여줌으로써 다시 true로 변환하여 출력한다.
```

