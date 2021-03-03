# async, await

> async, await은 자바스크립트에서 비동기 처리를 하게 될 때, Promise를 더욱 쉽게 사용할 수 있게 해주는 문법이다. 
>
> 이 문법은 ES8에서 소개된 문법이다.



```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요!');
    await sleep(1000);
    console.log('반갑습니다!');
    
    return true;
}

process().then(value => {
    console.log(value); // true 출력.
})

// '안녕하세요!' 출력하고 1초 뒤에 '반갑습니다!' 출력한다. 
// async, await 키워드를 사용할 때는 함수 앞에 async를 붙여주고 
// promise 앞에 await을 붙여주면 된다. 
// async, await를 사용하면 분기점을 활용하는 것도 쉽고 값을 공유하는데에도 용이하다.
// 또한 함수의 결과물은 promise를 반환한다.
// 그래서 .then에 들어갈 파라미터는 true가 들어가서 true를 출력하게 된다.
```



### error 발생 시 

```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
	await sleep(1000);
    const error = new Error();
    throw error;
}

async function process() {
    try {
        await makeError();
    } catch(e) { // e가 makeError() 함수에 있는 throw가 반환한 객체를 뜻한다.
        console.error(e); // Error 출력.
    }
}

process();

// async, await에서 에러를 잡아낼 때는 try, catch문을 사용하면 된다.
```

