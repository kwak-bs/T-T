# testing-mocha

테스트 자동화는 과제뿐만 아니라 현업에서도 광범위하게 쓰인다. 



## 테스트를 하는 이유

> 코드를 수동으로 '재실행' 하면서 테스트를 하면 무언가를 놓치기 쉽다. 

예를 들어, 함수 `f`가 있다고 가정한다. `f`에 대한 코드를 작성한 후, `f(1)`이 제대로 동작하는지 확인한다. `f(1)`은 제대로 동작하지만 `f(2)`를 테스트해보니 제대로 동작하지 않는다. 코드를 수정한 후, `f(2)`를 다시 테스트 해본 결과, 잘 동작한다. 하지만 이번엔 `f(1)`이 동작하지 않는다. <br/>

이런 일은 아주 흔히 발생한다. 개발자는 코드를 짤 때 머릿속에 수많은 유스 케이스를 생각하며 코드를 작성하는데, 코드를 변경해야 할 때마다 모든 유스 케이스를 상기하면서 코드를 수정하는 것은 위와 같은 이유로 거의 불가능하다. <br/>

**테스팅 자동화는 테스트 코드가 실제 동작에 관여하는 코드와 별개로 작성되었을 때 가능하다. 테스트 코드를 이용하면 함수를 다양한 조건에서 실행해 볼 수 있는데, 이때 실행 결과와 기대 결과를 비교할 수 있다.**

 

## Behavior Driven Development(BDD)

> BDD는 테스트(test), 문서(document), 예시(example)를 한데 모아 놓은 개념이다. 
>
> 테스트 - 함수가 의도하는 동작을 제대로 수행하고 있는지 보장한다. 
>
> 문서 - 함수가 어떤 동작을 수행하고 있는지 설명해준다. `decribe`와 `it`에 설명이 들어간다.
>
> 예시 - 실제 동작하는 예시를 이용해 함수를 어떻게 사용할 수 있는지 알려준다. 

- BDD 산출물을 ***명세서(specification)*** 또는 ***스펙(spec)*** 이라 불린다. 

```javascript
describe("pow", function() { // (1)

  it("주어진 숫자의 n 제곱", function() { // (2)
    assert.equal(pow(2, 3), 8); // (3)
  });

});
```

스펙은 세 가지 주요 구성 요소로 이루어진다. 

- (1)  **`describe("title", function() { ... })`**
  - 구현하고자 하는 기능에 대한 설명이다. 위 예시에선 함수 `pow`가 어떤 동작을 하는지에 대한 설명이 들어간다. `it` 블록을 한데 모아주는 역할도 한다.
- (2) **`it("유스 케이스 설명", function() { ... })`**
  - `it`의 첫 번째 인수엔 특정 유스 케이스에 대한 설명이 들어간다. 이 설명은 누구나 읽을 수 있고 이해할 수 있는 자연어로 적어준다. 두 번째 인수엔 유스 케이스 테스트 함수가 들어간다. 
- (3) **`assert.equal(value1, value2)`**
  - 함수 `assert.*`는 `pow`가 예상한 대로 동작하는지 확인해준다. 위 예시에선 `assert.equal`이 사용되었는데, 이 함수는 인수끼리 동등 비교 했을 때 다르다고 판단되면 에러를 반환한다. 

### 개발 순서

1. 명세서 초안을 작성합니다. 초안엔 기본적인 테스트도 들어갑니다.
2. 명세서 초안을 보고 코드를 작성합니다.
3. 코드가 작동하는지 확인하기 위해 [Mocha](http://mochajs.org/)라 불리는 테스트 프레임워크를 사용해 명세서를 실행합니다.(Mocha에 대해선 아래에서 다룰 예정입니다.) 이때, 코드가 잘못 작성되었다면 에러가 출력됩니다. 개발자는 테스트를 모두 통과해 에러가 더는 출력되지 않을 때까지 코드를 수정합니다.
4. 모든 테스트를 통과하는 코드 초안이 완성되었습니다.
5. 명세서에 지금까진 고려하지 않았던 유스케이스 몇 가지를 추가합니다. 테스트가 실패하기 시작할 겁니다.
6. 세 번째 단계로 돌아가 테스트를 모두 통과할 때까지 코드를 수정합니다.
7. 기능이 완성될 때까지 3~6단계를 반복합니다.

```html
<!DOCTYPE html>
<html>
<head> 
  <!-- 결과 출력에 사용되는 mocha css를 불러옵니다. -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- Mocha 프레임워크 코드를 불러옵니다. -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    mocha.setup('bdd'); // 기본 셋업
  </script>
  <!-- chai를 불러옵니다 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai의 다양한 기능 중, assert를 전역에 선언합니다.
    let assert = chai.assert;
  </script>
</head>

<body>

  <script>
	function pow(x, n) {
  		if (n < 0) return NaN;
  		if (Math.round(n) != n) return NaN;

  	let result = 1;

  	for (let i = 0; i < n; i++) {
    	result *= x;
  	}

  	return result;
	}
  </script>

  <!-- 테스트(describe, it...)가 있는 스크립트를 불러옵니다. -->
  <script src="test.js"></script>

  <!-- 테스트 결과를 id가 "mocha"인 요소에 출력하도록 합니다.-->
  <div id="mocha"></div>

  <!-- 테스트를 실행합니다! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
```

1. `<head>` – 테스트에 필요한 서드파티 라이브러리와 스타일을 불러옴
2. `<script>` – 테스트할 함수(`pow`)의 코드가 들어감
3. 테스트 – `describe("pow", ...)`를 외부 스크립트(`test.js`)에서 불러옴
4. HTML 요소 `<div id="mocha">` – Mocha 실행 결과가 출력됨
5. `mocha.run()` – 테스트를 실행시켜주는 명령어

```javascript
describe("pow", function() {

  describe("x를 세 번 곱합니다.", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });
    
  it("n이 음수일 때 결과는 NaN입니다.", function() {
    assert.isNaN(pow(2, -1));
  });

  it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
    assert.isNaN(pow(2, 1.5));
  });


  // describe와 it을 사용해 이 아래에 더 많은 테스트를 추가할 수 있습니다.
});
```

