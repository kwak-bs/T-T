# Getter, Setter

> **getter** : 특정 값을 조회하고자 할 때 사용.
>
> **setter** : 특정 값을 설정하고자 할 때 사용.



```javascript
const numbers {
    // 명칭 중복 방지를 위해 _사용.
    _a: 1,
    -b: 2,
    sum: 3,
        
    calculate() {
        console.log('calculate 실행');
        this.sum = this._a + this._b;
    },
        
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    }
    
    set a(value) {
        this._a = value;
        this.calculate();
        // 값을 설정할 때마다 sum을 최신화 해주기 위해 calculate() 실행.
    }
    
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(sum);  // 3 출력
numbers.a = 5; // 'calculate 실행' 출력
numbers.b = 7; // 'calculate 실행' 출력
numbers.a = 9; // 'calculate 실행' 출력

console.log(numbers.sum); // 16 출력

// 조회할 때마다 계산하는게 아니라 값이 바뀔때 마다 계산하기 때문에 조금 더 효율적인 코드이다. (재사용)
```

