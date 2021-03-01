# 함수의 기본 파라미터

> 함수를 호출 하게 될 때, 원래 넣어야 할 파라미터를 넣지 않게 됐을 때 기본 값으로 사용할 파라미터를 지정하는 것을 의미한다. 

```javascript
function calculateCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area);
// 50.2654~~~~ 출력.
// 만약 아무것도 넣어 주지 않으면 NaN을 출력한다.

// 아무것도 넣지 않아도 실행되게끔 하고 싶으면 단축 평가 논리 계산법을 사용하자 
```

```javascript
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area);
// 3.141592~~~~~~~~~~~출력.
// || 연산자는 앞에가 false이면 뒤에 값을 호출한다.
// 즉, r이 주어지지 않았으면 1로 radius 값을 지정한다.

// es6 문법부터는 더 간편하게 사용할 수 있다. 
function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

// 화살표 함수로도 사용 가능하다
const calculateCircleArea = (r = 1) => Math.PI * r * r;
```

