# Hoisting

> hoisting이란 자바스크립트에서 아직 선언되지 않은 함수 혹은 변수를 끌어올려서 사용할 수 있는 자바스크립트의 작동 방식을 의미한다.



```javascript
myFunction();

function myFunction() {
    console.log('hello world');
}
// 이렇게 함수가 선언 되기도 전에 함수를 호출해도 자바스크립트에서는 잘 작동한다. 
// 이것이 바로 hoisting이다. 
```



### 하지만 hoisting은 웬만하면 피해야 한다.  hoisting은 방지해야 하는 것이다. 

그 이유는 코드를 이해하기가 어려워 질 수 있기 때문이다. 

변수를 var로 선언할 경우는 hoisting이 된다. 하지만 undefined가 뜰 것이다. 

const나 let은 cannot access before~ 오류를 발생시킨다. 



### hoisting 방지 하는 방법

```javascript
myFunction(); // error 발생

const myFunction = function myFunction() {
    console.log('hello world');
}
```

이런식으로 hoisting을 방지할 수 있지만 굳이 이렇게 하지 않아도 그냥 코드를 작성할 때,

함수를 선언 후, 함수를 호출하는 습관을 들이자.

근데 어차피 ESlint 사용하면 경고창으로 다 알려준다. 걱정 하지말자.