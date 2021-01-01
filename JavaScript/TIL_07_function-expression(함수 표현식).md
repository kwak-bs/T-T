# 함수 표현식



## 함수 선언문

- 함수 선언문은 아래와 같다.
- 변수에 저장하지 않는다. 

```javascript
function sayHi() {  // (1) 함수 생성
  alert( "Hello" );
}

alert( sayHi ); // sayHi 함수 코드가 보인다.

let func = sayHi;    // (2) 함수 복사

func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행된다.)
sayHi(); // Hello    //     본래 함수도 정상적으로 실행된다.
```

- (1) 에서 함수 선언 방식을 이용해 함수를 생성한다. 생성한 함수는 sayHi라는 변수에 저장된다.
- (2) 에서 sayHi를 새로운 변수 func에 복사한다. 이때 sayHi 다음에 괄호가 없다는 점에 유의해야 한다. 괄호가 있었다면 `func = sayHi()`가 되어 sayHi 함수 그 자체가 아니라, ***함수 호출 결과(함수의 반환 값)***가 func 변수에 저장된다. 
- sayHi()와 func()로 함수를 호출할 수 있게 된다.

## 함수 표현식

- 함수 표현식은 아래와 같다. 
- 변수에 저장하는 것이다.

```javascript
let sayHi = function() {
  alert( "Hello" );
};


```



## 콜백 함수 

> 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 ***"나중에 호출(call back)"*** 하는 것이 콜백 함수의 개념이다.

- 예시

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "동의하셨습니다." );
}

function showCancel() {
  alert( "취소 버튼을 누르셨습니다." );
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);
```

- 함수 `ask`의 인수, `showOk`와 `showCancel`은 ***콜백 함수*** 또는 ***콜백***이라 불린다. 
- 위 예시에서 사용자가 "yes" 라고 대답한 경우 `showOk`가 콜백이 되고, "no"라고 대답한 경우 `showCancel`가 콜백이 된다.

### 익명 함수

> 이름 없이 선언한 함수를 익명 함수(anonymous function)라고 부른다.

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);
```

- 익명 함수는 (변수에 할당된게 아니기 때문에) ask 바깥에선 접근할 수 없다. 



## 함수 표현식 vs 함수 선언문

1. 문법

- ***함수 선언문 :*** 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재한다.

```javascript
// 함수 선언문
function sum(a, b) {
  return a + b;
}
```

- ***함수 표현식:*** 함수는 표현식이나 구문 구성(syntax construct) 내부에 생성된다. 아래 예시에선 함수가 할당 연산자 `=`를 이용해 만든 "할당 표현식"이 우측에 생성된다.



```javascript
// 함수 표현식
let sum = function(a, b) {
  return a + b;
};
```

<br/>

<br/>

2. 함수를 실행하는 **시점**

- 함수 표현식은 실제 실행 흐름이 해당 함수에 **도달했을 때** 함수를 생성한다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있다.
- 함수 선언문은 함수 선언문이 **정의되기 전에**도 호출할 수 있다. 따라서 전역 함수 선언문은 스크립트 어디에 있느냐에 상관없이 어디에서든 사용할 수 있다. 

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

// 함수 선언문은 어디서든 접근할 수 있다.
```



```javascript
sayHi("John"); // error!

let sayHi = function(name) {  // (*) 이곳에 도달했을 때 함수가 만들어진다.
  alert( `Hello, ${name}` );
};

// 함수 표현식은 정의한 함수가 선언되기 전에는 접근하는게 불가능하다.
```

<br/>

<br/>

3. 스코프 

- 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있다. 하지만 블록 밖에서는 함수에 접근하지 못한다.



### 그러면 함수 선언문과 함수 표현식 중 무엇을 선택하는 것이 좋은가?

- 함수 선언문을 사용해 함수를 선언하는 것을 먼저 고려하는 게 좋다.
  - 함수가 선언되기 전에 호출할 수 있어서 코드 구성을 자유롭게 할 수 있다.
  - 가독성 면에서도 좋아진다. 