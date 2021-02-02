# 비동기 처리 이해

> **동기적 (Synchronous)** : 작업이 끝낼 때까지 기다린 후 다음 작업을 처리. 즉, 다음 작업은 이전 작업이 끝날 때까지 멈추고 기다려야됨.
>
>**비동기적 (Asynchronous)** : 작업의 흐름이 멈추는 일 없이 동시에 모든 작업을 처리할 수 있음. 기다리는 과정에서도 다른 함수를 호출할 수 있음.

![sync, async](https://user-images.githubusercontent.com/51367622/106598115-a7d42800-659a-11eb-929f-6260b2f62274.PNG)

## 동기

```javascript
function work() {
    
    const start = Date.now();
    
    for(let i=0; i<1000000000; i++) {
        
    }
    const end = Date.now();
    
    console.log(end - start + 'ms');
}

work();
console.log('다음 작업!');

// 521ms , 다음 작업! 이 순서대로 출력된다. 
// 즉, work 함수가 다 끝난 다음 출력된 것이다. 
```



## 비동기

```javascript
function work() {
    setTimeout( () => {
        
       const start = Date.now();
    
    	for(let i=0; i<1000000000; i++) {
        
    	}
    	const end = Date.now();
    
    	console.log(end - start + 'ms');
    }, 0) //0이어도 웹 브라우저 상에선 4ms로 처리됨.
}

console.log('작업 시작!');
work();
console.log('다음 작업!');

// 작업 시작!, 다음 작업!, 526ms로 출력됨.
// 먼저 작업 시작!을 출력하고 work함수를 동작한다. work함수는 4ms 이후에 반복문을 실행한다. for loop가 실행 되는 도중에 다음 작업!이 출력되고, 반복문이 다 실행되면 얼마나 걸렸는지 출력하게 된다. 
```



## Callback 함수 이용

> 함수 타입의 값을 파라미터로 넘겨주고 파라미터로 받은 함수를 특정 작업이 끝난 후 호출해주는 것.



```javascript
function work(callback) {
    setTimeout( () => {
        
       const start = Date.now();
    
    	for(let i=0; i<1000000000; i++) {
        
    	}
    	const end = Date.now();
    
    	console.log(end - start + 'ms');
        
        callback(end - start);
    }, 0) //0이어도 웹 브라우저 상에선 4ms로 처리됨.
}

console.log('작업 시작!');
work((ms) => {
	console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요!');
});
console.log('다음 작업!');


// 작업 시작!, 다음 작업!, 518ms, 작업이 끝났어요!, 518ms 걸렸다고 해요! 순으로 출력.
// work함수를 실행할 때 work 함수의 인자로 화살표 함수를 넣어준다. 즉, callback 자체에 함수를 넣어준 것이다.
// 그리고 callback 함수의 인자로 end - start 값을 넣어준다. 그것이 ms가 되고 화살표 함수를 실행한다.
```



