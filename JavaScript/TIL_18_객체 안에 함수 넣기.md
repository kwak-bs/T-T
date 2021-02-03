# 객체 안에 함수 넣기



```javascript
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() {
        console.log(this.sound);
        //this는 객체 안의 자기 자신을 가리킨다. 즉 여기서 this는 dog객체를 가리킨다.
    },
    
    // 똑같이 작동함!!
    say: function() {
        console.log(this.sound);
    },
	say() {
        console.log(this.sound);
    },
	
	// 하지만 화살표 함수는 작동 안한다!!!
    say: () => {
        console.log(this.sound);
    }
    // TypeError: Cannot read property 'sound' of undefiend. 오류 출력한다.
    // 즉, this 객체를 읽지 못한다. 
    // 화살표 함수는 this를 자기가 속해 있는 곳으로 연결을 하지 않기 때문이다.
};

dog.say();
// 멍멍! 출력.

const cat = {
    name: '야옹이',
    sound: '야옹~' 
};

cat.say = dog.say;
cat.say();
// 야옹~ 출력.

const catSay = cat.say;
catSay();
// TypeError: Cannot read property 'sound' of undefiend. 오류 출력한다.
// 화살표 함수와 마찬가지로 catSay는 아무것도 연결되어 있지 않기때문에 
// 즉, this가 연결된 곳이 없기 때문에 에러가 발생한다. 
// 함수를 바깥으로 꺼내서 사용할 경우에는 this의 관계가 사라진다는 것을 알 수 있다.
```

