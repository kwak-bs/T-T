# 배열 내장 함수



## Map

> 배열에 있는 값들을 가지고 원하는 방식으로 변환 및 활용하고 싶을때 사용.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map(n => n * n);

console.log(squared);
//[1, 4, 9, 16, 25, 36, 49, 64] 출력.
```



## indexOf, findIndex, find

> **indexOf** : 해당 값이 속해 있는 인덱스 번호를 반환한다.
>
> **findIndex** :  특정 조건으로 객체 혹은 원소의 인덱스 번호를 찾고자 할 때 사용. 가장 첫번째로 찾은 항목을 알려줌.
>
> **find** : findIndex와 유사하나 객체 자체 혹은 원소 자체를 반환한다.

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

const index = superheroes.indexOf('토르');
console.log(index);
// 2 출력.


```



```javascript
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    },
]

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
// 2 출력.

const todo = todos.find(todo => todo.id === 3);
console.log(todo);
// Object {id: 3, text: "객체와 배열 배우기", done: true} 출력.
```



## filter 

> 특정 조건을 만족하는 원소들을 찾아서 그 원소들로 새로운 배열을 만드는 함수.

```javascript
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    },
]

const tasksNotDone = todos.filter(todo => todo.done === true);

console.log(tasksNotDone);

//[Object, Object, Object] 출력.
// 0: Object
//	id: 1
//	text: "자바스크립트 입문"
//	done: true
// ~2 까지 출력 
```



## splice, slice

> **splice** : 기존 배열을 특정 인덱스부터 특정 인덱스까지 삭제하고 반환한다.
>
> **slice** : splice와 다르게 기존의 배열을 건드리지 않는다. 시작 인덱스부터 끝 인덱스 전까지 자른다.



```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2); // index부터 2개를 삭제한다.

console.log(spliced); // [30, 40] 출력. (삭제된 원소들 출력)
console.log(numbers); // [10, 20] 출력. (삭제하고 남은 결과 출력)


const numbers = [10, 20, 30, 40];

const sliced = numbers.slice(0, 2); // 0번째 원소부터 2번째 원소 전까지 자른다.

console.log(sliced); // [10, 20] 출력. (삭제된 원소들 출력)
console.log(numbers); // [10, 20, 30, 40] 출력. (그대로 유지)
```

