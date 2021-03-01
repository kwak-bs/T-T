# 조건문 더 스마트하게 쓰기

> 특정 값이 여러 값 중에 하나인지 확인해야 될 상황에 유용하다.
>
> 결론 :  객체를 활용하면 더 보기 좋은 코드를 만들 수 있다.

```javascript
function isAnimal(text) {
    return (
    	text === '고양이' || text === '개' || text === '거북이'
    );
}
console.log(isAnimal('개')); // true 출력.
console.log(isAnimal('노트북')); // false 출력.
```

이런 식으로 번잡하게 확인해야 되는 것을 더 간단하게 사용할 수 있다.

```javascript
function isAnimal(text) {
    const animals = ['고양이', '개', '거북이'];
	
    return animals.includes(text);
}
console.log(isAnimal('개')); // true 출력.
console.log(isAnimal('노트북')); // false 출력.

const isAnimal = text => ['고양이', '개', '거북이'].includes(text);
// 화살표 함수로도 사용 가능하다
```

또 다른 예를 들어보자. 잘못된 코드는 아니다

```javascript
function getSound(animal) {
    if(animal === '개') return '멍멍!';
    if(animal === '고양이') return '야옹~';
    if(animal === '참새') return '짹짹';
    if(animal === '비둘기') return '구구 구 구';
    return '...?'
}

console.log(getSound('개')); // '멍멍!' 출력.
console.log(getSound('비둘기'));// '구구 구 구' 출력.
console.log(getSound('인간')); // '...?' 출력.
```

하지만 객체를 활용하여 더 보기 좋은 코드를 만들어보자.

```javascript
function getSound(animal) {
	const sounds = {
        개 : '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개')); // '멍멍!' 출력.
console.log(getSound('비둘기'));// '구구 구 구' 출력.
console.log(getSound('인간')); // '...?' 출력.
```

단축 평가 논리 계산법으로 더 가독성 있는 코드를 만들어보았다. 

|| 연산자를 이용하여 파라미터로 들어온 값이 sounds 내에 있는 key이면 해당하는 key의 값을 호출하고 아니면 '...?'를 호출한다.



이런 식으로도 코드를 구현해볼 수 있다.

```javascript
function makeSound(animal) {
	const tasks = {
		개: () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹!');
        },
        비둘기() {
            console.log('구구 구 구');
        }
    };
    if(!tasks[animal]) {
        console.log('...?');
        return;
    }
    
    const task = task[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('개'); // '멍멍!' 출력.
makeSound('비둘기');// '구구 구 구' 출력.
makeSound('인간'); // '...?' 출력.
```

