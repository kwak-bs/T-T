# reduce

> 배열 안의 모든 값들을 사용하여 연산을 할 때 사용한다.
>
> 인자로는 4개가 있다.
>
> **accumulator** : 누적된 값
>
> **current**  :  배열 안의 각 원소들을 가리킨다.
>
> **index** : 배열 안의 각 원소가 몇 번째 인덱스인지 알려준다.
>
> **array** : 함수를 실행하고 있는 배열 자기 자신을 의미한다.



```javascript
const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, current) => 
                          accumulator + current, 0);
// 0은 accmulator의 초기값이다. 

console.log(sum);
// 15 출력


const avg = numbers.reduce((accumulator, current, index, array) => {
    if(index == array.length-1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);

// 마지막 인덱스 전 까지는 그냥 더하고 마지막 인덱스에는 더하고 배열의 길이 만큼 나눠준다.
// 즉, 평균을 구할 수 있다.

console.log(avg);
// 3 출력.
```





## 다른 예시

```javascript
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, cur) => {
    
    // acc배열 안에 해당 원소가 있는지 확인 한다.
    // acc['a'] 혹은 acc.a와 같음
    if(acc[cur]) {
        acc[cur] += 1;
    }
    
    // 초기 acc는 빈 배열이므로 해당 원소가 존재하지 않는다면 acc[cur]에 1이 들어간다.
    else {
        acc[cur] = 1;
    }
    
    return acc;
} , {} )


console.log(counts);

// Object {a: 3, b: 1, c: 2, d: 1, e: 1}가 출력된다.
```

