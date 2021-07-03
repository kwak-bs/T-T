# 변수 명명 규칙

>  자바스크립트에선 **변수 명명 시 두 가지 제약 사항**이 있다.

1. **변수명에는 오직 문자와 숫자, 그리고 기호 `$`와 `_`만 들어갈 수 있습니다.**
2. **첫 글자는 숫자가 될 수 없습니다.**

- 여러 단어를 조합하여 변수명을 만들 땐 ***카멜 표기법(camelCase)***가 흔히 사용된다. 카멜 표기법은 단어를 차례대로 나열하면서 첫 단어를 제외한 각 단어의 첫 글자를 대문자로 작성한다<br/>

  ex ) `myVeryLongName`

- 대/소문자를 구별한다 . `apple`과 `Apple`은 서로 다른 변수이다. 

- [예약어(reserved name) 목록](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)에 있는 단어는 변수명으로 사용할 수 없다. 이 단어들은 자바스크립트 내부에서 이미 사용 중이기 때문이다.<br/>

  ex ) `let` , `const`, `return`, `function`



# 상수

> **변화하지 않는 변수를 선언할 땐, `let` 대신 `const`를 사용한다.**

- `const`로 선언한 변수를 '상수(constant)'라고 부른다. 상수는 재할당할 수 없으므로 상수를 변경하려고 하면 에러가 발생한다.

- **대문자 상수** 

  - 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습입니다.

    이런 상수는 대문자와 밑줄로 구성된 이름으로 명명합니다.

  - 대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 사용하면 된다.

ex) 

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```



## 정리

`var`, `let`, `const`를 사용해 변수를 선언할 수 있다. 

- `let` – 모던한 변수 선언 키워드.
- `var` – 오래된 변수 선언 키워드. 잘 사용하지 않는다. 
- `const` – `let`과 비슷하지만, 변수의 값을 변경할 수 없다. (상수)

변수명은 변수가 담고 있는 것이 무엇인지 쉽게 알 수 있도록 지어져야 한다.