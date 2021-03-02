# Scope 이해하기

> Scope란 변수 혹은 함수를 선언하게 될 때, 해당 변수 혹은 함수가 어디까지 유효한 지 범위를 나타내는 개념이다.
>
> Scope는 **Global**, **Function**, **Block**이 있다.
>
> global은 모든 범위에서 사용 가능한 것을 의미한다.
>
> function은 특정 함수 내부에서만 사용 가능한 것을 의미한다. 
>
> block은 if문, switch문, for문을 작성하게 될때 중괄호로 코드를 작성하게 되는데, 중괄호로 감싸진 블록 내부에서만 사용 가능한 것을 의미한다. 
>
> Scope가 자바스크립트의 문법이라기 보다는 작동 원리라고 이해하는 것이 좋다.



```javascript
const value = 'hello!'; // global scope변수이다. 

function myFunction() {
    console.log('myFunction: ');
    console.log(value); // 'hello!' 출력.
}

// 함수형 scope 변수이다.
function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye!'; // 특정 함수 내부에서만 사용 가능한 변수이다. 기존의 global 변수인 value에는 영향을 주지 않는다.
    console.log(value); // 'bye!' 출력.
}

myFunction();
otherFunction();

console.log('global scope : ');
console.log(value); // 'hello!' 출력.
// 'hello!'가 출력되는 것을 보아 함수 내부에서 선언한 value는 기존의 value에 영향을 주지 않는 것을 알 수 있다.
```



다른 예시를 보자

```javascript
const value = 'hello!'; // global scope변수이다. 

function myFunction() {
	const value = 'bye!';
    const anotherValue = 'world';
    
    function functionInside() {
        console.log('functionInside : ');
        console.log(value); // 'bye!' 출력.
        console.log(anotherValue); // 'world' 출력.
    }
    functionInside();
}

myFunction();
console.log('global scope : ');
console.log(value); // 'hello' 출력.
console.log(anotherValue); // 에러 출력. (is not defined)
// anotherValue는 함수 scope 안에 있는 것이기 때문에 밖에서 사용하고자 하면 에러를 발생한다.
```



block scope 예시를 보자

```javascript
const value = 'hello!'; // global scope변수이다. 

function myFunction() {
	const value = 'bye!';
    
    if(true) {
        const value = 'world'; // 이 값은 block scope이다.
        console.log('block scope: ');
        console.log(value); // 'world' 출력.
    }
    console.log('function scope: ');
    console.log(value); // 'bye!' 출력.
}

myFunction();
console.log('global scope : ');
console.log(value); // 'hello' 출력.

// 만약 위의 모든 변수를 var로 수정한다면, var는 function scope으로 설정되기 때문에 
// 'bye!'가 출력되지 않고 'world'가 출력된다.(기존의 값이 영향을 받음)
// var 보단 const나 let을 사용하는 것이 좋다.
```