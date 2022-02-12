# match()



> `match()` 메서드는 문자열이 정규식과 매치되는 부분을 검색한다. 
>
> `str.match(regexp)`

`regexp`

- ​	정규식 개체이다. 
- RegExp가 아닌 객체 obj가 전달되면, `new RegExp(obj)`를 사용하여 암묵적으로 `RegExp`로 변한된다. 
- 매개변수를 전달하지 않고 match()를 사용하면, 빈 문자열 : [""]이 있는 Array가 반환된다. 



#### 결과 값

- 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 온다. 일치하는 것이 없으면 `null`이 반환된다. 



#### 설명

- 정규식에 `g` 플래그가 포함되어있지 않으면, `str.match()`는 `RegExp.exec()`와 같은 결과를 반환한다. 반환된 `Array`는 원래 문자열의 값을 가지는 `input` 속성을 포함한다. 그리고 문자열에서 제로 베이스의 인덱스를 나타내는 `index` 속성 또한 포함한다. 
- 정규식에 `g` 플래그가 포함되어 있으면, 일치는 객체가 아닌 일치하는 하위 문자열을 포함하는 **Array**를 반환한다. 캡처된 그룹은 반환되지 않는다. 일치하는 것이 없으면 `null`이 반환된다.



#### TIP

- 문자열이 정규표현식 `RegExp`와 일치 여부를 알아야할 때, `RegExp.test()`를 사용하는 것이 좋다. 
- 일치하는 것 중 제일 첫번째 것만 알고싶을 때, `RegExp.exec()`을 사용하자. 
- 캡처 그룹을 알고 싶고 전역 플래그가 셋팅되어 있다면, `RegExp.exec()`를 사용하자. 



#### 출처

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match
