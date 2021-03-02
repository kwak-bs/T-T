# Promise

> 비동기 작업을 조금 더 편하게 처리할 수 있도록 도입된 ES6 기능이다.
>
> 이전에는 비동기 작업을 처리할 때는 callback 함수를 통해 했지만 비동기 작업이 많아질 경우에는 코드가 난잡해지는 경우가 있다.
>
> 이를 예방하기 위해 Promise가 나왔다.



### 만약 Promise를 사용하지 않고 callback으로만 비동기 작업을 처리한다면?

```javascript
function increaseAndPrint(n , callback) {
    setTimeout( () => {
        const increase = n+1;
        console.log(increased);
        if(callback) {
            callback(increased);
        }
    },1000) // 1000ms = 1초
}

// 5까지 더하는 callback 함수 중복문이다. 
// 이런 코드를 callback 지옥이라고 불른다.
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n=> {
                increaseAndPrint(n, n=> {
                    console.log('작업 끝!');
                })
            })
        })
    })
})

// 1, 2, 3, 4, 5, 작업 끝! 순서대로 출력된다.
```



### Promise를 사용하여 callback 지옥을 탈출해보자.

#### Promise를 만드는 법부터 알아보자.

```javascript
// Promise가 성공할 때는 resolve를 호출하고 실패할 경우에는 reject를 호출한다.
const myPromise = new Promise((resolve, reject) => {
    // 성공 코드
    setTimeout( () => {
        resolve('result');
    }, 1000)
    
    // 실패 코드 
    setTimeout( () => {
        reject(new Error());
    }, 1000);
});

myPromise.then(result => {
    console.log(result); // 성공시 resolve를 호출하고 'result'를 출력한다.
}).catch(e => {
    console.error(e); // Error 출력.
})


```

#### Promise 예제

```javascript
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const value = n+1;
            if(value === 5) { // value가 5가 되면 reject를 호출한다.
                const error = new Error();
                error.name = 'ValueIsFiveError'; // 에러 이름을 정해줄 수 있다.
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000)
    })
}

// return 값이 그대로 다음 함수의 파라미터로 들어가기 때문에 아래와 같이 작성하는 것도 가능하다.
increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.log(e); // 'ValueIsFiveError' 출력.
})

// 하지만 이것도 불편하다 에러를 잡을 때 어느 부분에서 에러가 발생했는지 파악하기가 어렵다
// 그리고 분기를 나누는 작업도 불편하다.
// 또 이를 해결하기 위해 나온 것이 async, await 이다. 
```

