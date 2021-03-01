# spread 

> 기존의 객체 혹은 값을 참조해서 새로운 객체를 만들고 싶을 때 사용하는 연산자이다.



```javascript
const slime = {
    name : '슬라임'
};

const cuteSlime = {
    ...slime, // slime 객체가 가지고 있는 정보를 다 가져옴 
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime, // cuteSlime 객체가 가지고 있는 정보를 다 가져옴
    color: 'purple'
};

const greenCuteSlime = {
    ...purpleCuteSlime, // 덮어쓰기도 가능하다.
    color: 'green'
};

console.log(purpleCuteSlime === cuteSlime);
// false 출력.
```

spread 연산자는 기존 객체를 복사하고 거기에 추가적인 정보를 추가해 새로운 객체를 나타내기 때문에 기존의 객체와는 다른 객체이다. (복사했다고 같은 객체가 아님.)



### 배열에서도 사용 가능하다

```javascript
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
// animals.concat('비둘기'); 랑 같은 코드임

console.log(animals); // ["개", "고양이", "참새"] 출력.
console.log(anotherAnimals); //["개", "고양이", "참새", "비둘기"] 출력.
```





### 연속 사용도 가능하다.

```javascript
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);
// [1,2,3,4,5,1000,1,2,3,4,5] 출력.
```

