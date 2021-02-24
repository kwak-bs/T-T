# 삼항 연산자

> condition ? true : false;
>
> 조건이 참이면 true 반환, 거짓이면 false를 반환한다 
>
> true 혹은 false 위치에 어떠한 값이 와도 상관없다. 결과에 따라 해당 값을 반환한다.

```javascript
const array = [];
let text = array.length === 0
	? '배열이 비어있습니다.'
	: '배열이 비어있지 않습니다.';

console.log(text); // '배열이 비어있습니다.'출력. 

// 현재 array 배열의 길이가 0인 것이 true이므로 true의 값인 '배열이 비어있습니다.'가
// 출력되는 것이다.
```



```javascript
const condition1 = false;
const condition2 = false;

const value = condition1
	? '와우!'
	: condition2
		? 'blabla'
		: 'foo'

console.log(value);
// foo 출력.
// condition1이 false 이므로 condition2를 호출한다. 
// condition2는 false 이므로 foo를 호출한다.
// 이렇게 중첩으로 사용할 수 있지만 이런 식으로 작성할 바에 if 문으로 구현하는게 훨씬 
// 더 깔끔하다.
```

