# Promise all, Promise.race







```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    const dog = await getDog();
    console.log(dog);
    
    const rabbit = await getRabbit();
    console.log(rabbit);
    
    const turtle = await getTurtle();
    console.log(turtle);
}

process();
// '멍멍이', '토끼', '거북이' 순으로 출력된다.
// 한번에 동시 다발적으로 실행되는건 아님.
// 동시 다발적으로 하고 싶으면 promise.all 키워드를 사용하면 된다.
```



### promise.all 사용법

```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    try {
		const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);       
    	console.log(results); // ['멍멍이', '토끼', '거북이'] 출력.
    } catch (e) {
        console.log(e);
    }
    // 모든 promise들을 다 실행하고나서 모두 끝나면 각각 배열 요소들의 반환 값이 배열 형태로 변수에 저장 된다.
    // getTurtle()이 3초이기 때문에 실제로 걸린 시간은 3초이다.
    // promise.all은 배열 안의 promise중 하나라도 에러가 발생하면 전체 promise가 에러가 발생한 거라고 간주한다.
    
    /*
    구조 분해 문법으로 아래와 같이도 할 수있다.
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    */
}

process();
```



### Promise.race

Promise.all 과는 사용법이 비슷하지만 역할은 완전히 다르다. 

promise.all은 배열 안의 promise들을 각각 다 반환하는 반면, promise.race는 배열 내에 가장 빨리 반환하는 값만 반환한다.

```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    try{
       const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
       console.log(first); // '토끼' 출력.
    } catch (e) {
        console.log(e);
    }

    // Promise.race는 가장 빨리 반환되는 값에 대하여 에러가 발생했을 경우에만 에러가 발생했다고 간주한다. 토끼가 가장 빨리 성공적으로 끝났는데, 그 뒤에 멍멍이가 실패하면 이건 에러로 간주하지 않는다.
}

process();
```





#### promise.all은 쓸 일이 많을 수 있지만, promise.race는 잘 안쓰인다. 

