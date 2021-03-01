# rest

> 생김새는 spread와 비슷하다.
>
> 하지만 역할이 다르다.  
>
> Spread는 다른 객체나 배열안에서 퍼뜨리는 역할을 한다면
>
> rest는 객체, 배열 등이 퍼져있는 것을 모아오는 역할을 한다.
>
> 함수의 파라미터에서 사용할 수 있다. 

```javascript
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest} = purpleCuteSlime;

console.log(color); // 'purple' 출력. 
console.log(rest); // Object {name: "슬라임", attribute: "cute"} 출력.
// 컬러를 제외한 다른 객체 요소들을 출력한다.
// 이름을 rest말고 다른걸로 사용해도 무방하다.

const { attribute, ...slime} = cuteSlime;
console.log(slime); // Object {name: "슬라임"} 출력.
```



### 배열에서도 사용 가능하다.

```javascript
const number = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;
console.log(one); // 0 출력.
console.log(rest); // 1,2,3,4,5,6 출력.

/*
const [...rest, last] = numbers;
위 코드는 할 수 없다. rest 연산자를 처음부터 쓰고 그 이후로 따로따로는 안된다.
배열에서의 rest 연산자는 맨 마지막에 와야한다.
*/
```

