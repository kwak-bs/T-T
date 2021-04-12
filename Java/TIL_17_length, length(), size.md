# length, length(), size()

> 맨날 ide에서 자동 완성으로 코딩해버릇하니까 length, length()의 차이. 어느 문법에서 이들을 적재적소에 활용해야 하는지에 대한 고민을 안했었다. 
>
> 최근에는 프로그래머스 내장 에디터에서 코딩을 연습하고 있는데 이러한 문제들을 많이 깨달아서 정리해보고자 한다. 

### length

arrays(int[], double[], String[] 등)의 배열 길이를 알려준다. 

즉, 배열 길이를 알고자 할 때 사용한다. `length`는 메소드가 아니므로 오브젝트로 사용되지 않는다.

<br/>

### length() 

**String related Object ( `String,  StringBuilder, StringBuffer etc`)**

문자열의 길이를 알고자 할 때 사용한다. 

**스트링**은 배열이 아니므로 `.length`를 사용할 수 없다. 또한, **컬렉션**이 아니므로 `.size()`도 사용할 수 없다. 그래서 나온게 `length()`이다. 

<br/>

### size()

**Collection Object ( `ArrayList, Set etc)**

컬렉션 타입의 크기(길이)를 알고자할 때 사용한다. 

()가 있으므로 메소드 이기도하다. 