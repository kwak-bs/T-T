## 문자열 내에서 변수 값을 끼워넣는 방법

> 실무에서 자주 사용되는 PHP 문법.

```php

echo 'Hello '.$name.'. '.$name.', you have 10 unread messages';
// Hello foo. foo, you have 10 unread messages

echo "Hello {$name}. {$name}, you have 10 unread messages";
// Hello foo. foo, you have 10 unread messages
```

작은 따옴표를 사용하는 경우, 따옴표 밖에 있는 점(.) 즉 PHP의 문자열 결합 연산자를 통해서만 문자열과 변수를 결합 할 수 있다.

큰 따옴표를 쓰는 경우에는 PHP 문자열 결합 연산자(.)를 사용하지 않고 문자열 안에 변수를 끼워 넣을 수 있지만, 위 예제와 같이 변수 명을 중괄호{}로 감싸는 것이 좋다. 그 이유는 “$nameyou can..”과 같이 인접 문자열과 변수가 구분되지 않을 때를 위해서다.

참고로 PHP는 큰 따옴표만 문자열 끼워 넣기를 할 수 있다.

또한, 큰 따옴표(”)로 감싼 문자열 중에 큰 따옴표 문자가 포함되어 있거나, 작은 따옴표(’)로 감싼 문자여 중에 작은 따옴표 문자가 포함되어 있으면 안 됩니다. PHP에서는 큰 따옴표나 작은 따옴표를 문자열의 시작 지점이나 종료 지점으로 판단하기 때문에, 오류가 발생하게 된다. 이것은 MYSQL의 SQL문과 같다.
