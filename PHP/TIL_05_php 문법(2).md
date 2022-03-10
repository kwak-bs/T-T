## PHP 문법(2)
> 실무에서 자주 사용되는 PHP 문법.


### -> , =>

- `->` 
  - Object Operator
  - 객체 범위 내에서 객체에 접근하기 위해서 사용하는 오퍼레이터이다. 

- `=>`
  - Double Arrow Operator
  - 배열의 키, 값을 할당할 때 사용하는 오퍼레이터이다. 


### ::

- `::` 
  - new 라는 지시자로, class를 미리 객체화 시켜놓지 않고 사용하는 시점에서 객체가 생성되고 지정된 메소드가 실행되도록 하는 접근자이다. 


### .=

- `.=`
  - 문자열을 더하는 연산자이다. 


### foreach

- value만 가져오는 경우
  - `foreach($array as $value)`

- key와 value를 가져오는 경우
  - `foreach($array as $key => $value)`