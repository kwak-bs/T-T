# 반복문 



## for of 

> **배열 내부를 접근한다.** 
>
> 헷갈리면 of 말고 자바 처럼 사용하는 것도 괜찮다.

```javascript
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
} 

for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 둘이 같음. 10 20 30 40 50 출력.
```



## for in

> **객체 내부를 접근한다.**

```javascript
const doggy = {
    name : '멍멍이',
    sound: '멍멍',
    age : 2
};

for (let key in doggy) {
    
    console.log(key);
    // name, sound, age 출력.
    
    console.log(`${key}: ${doggy[key]}`);
    // name: 멍멍이, sound: 멍멍, age: 2 출력.
}
```





## Object 

> 예시로 확인하자.

```javascript
const doggy = {
    name : '멍멍이',
    sound: '멍멍',
    age : 2
};

console.log(Object.keys(doggy));
// ["name", "sound", "age"] 출력.

console.log(Object.values(doggy));
// ["멍멍이", "멍멍", 2] 출력.

console.log(Object.entries(doggy));
// [Array[2], Array[2], Array[2]]
/* 0: Array[2]
	0: "name"
	1: "멍멍이"
   1: Array[2]
	0: "sound"
	1: "멍멍"
...*/
```



