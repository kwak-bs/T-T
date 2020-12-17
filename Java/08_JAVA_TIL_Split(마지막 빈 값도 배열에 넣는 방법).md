# Split

## 마지막 값이 공백일 경우에도 배열에 넣는 방법

#### 일반적인 Split 사용법

```java
String str1 = "a b c d e";
String str2 = "a b c d e  ";
String[] arrStr1 = str1.split(" ");
String[] arrStr2 = str2.split(" ");
```

arrStr1의 경우 a, b, c, d, e가 정상적으로 배열에 저장된다. <br/>하지만 arrStr2의 경우 마지막에 있는 빈 값은 제외한 a, b, c, d, e만 배열에 저장된다.



### 그러면 마지막 빈 값을 배열에 넣을려면 어떻게 해야 될까?

마지막의 빈 값도 배열에 저장하기 위해서는 JAVA 에서 제공하는 다음의 메소드를 사용해주면 된다.

```
String[] split(String regex, ``int` `limit)
```



```java
String str1 = "a b c d e";
String str2 = "a b c d e  ";
String[] arrStr1 = str1.split(" ");
String[] arrStr2 = str2.split(" ", -1); // 음수를 넣어주면 마지막 빈 값도 저장된다.
String[] arrStr3 = str2.split(" ",3);
```

- limit 값을 양수로 넘겨줄 경우에는 배열의 크기를 limit 에 맞춰서 저장한다. <br/>즉, arrStr3 = {"a","b","c d e"}; 이다. 

