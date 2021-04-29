# 정규 표현식(Regular Expression)

> 문자열이 정해져 있는 형식으로 구성되어 있는지 검증할 때 사용한다. 
>
> 즉, 특정한 규칙을 가진 문자열의 집합을 표현하기 위해 쓰이는 형식 언어이다.
>
> ex) 이메일, 전화번호, 비밀번호 등
>
> 문자 또는 숫자 기호와 반복 기호가 결합된 문자열이다. 

<br/>

## 자주 사용하는 정규 표현식

| 정규 표현식                                | 설명         |
| ------------------------------------------ | ------------ |
| ^[0-9]*$                                   | 숫자         |
| ^[a-zA-Z]*$                                | 영문자       |
| ^[가-힣]*$                                 | 한글         |
| \\w+@\\w+\\.\\w+(\\.\\w+)?                 | E-Mail       |
| ^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-z]+$       | E-Mail       |
| ^\d{2,3}-\d{3,4}-\d{4}$                    | 전화번호     |
| ^01(?:0\|1\|[6-9])-(?:\d{3}\|\d{4})-\d{4}$ | 휴대전화번호 |
| \d{6} \- [1-4]\d{6}                        | 주민등록번호 |
| ^\d{3}-\d{2}$                              | 우편번호     |

<br/>

## 정규표현식 작성 방법

정규 표현식을 작성하는 방법은 자바 API `java.util.regex` 패키지를 사용해야 한다. 

주로 `java.util.regex` 패키지 안에 있는 `Pattern`클래스와 `Matcher`클래스를 주로 사용한다.



### Pattern 클래스

- 정규 표현식에 대상 문자열을 검증하는 기능은 `java.util.regex.Patter` 클래스의 `matches()`메소드를 활용하여 검증할 수 있다. matches() 메소드의 첫 번째 인자 값은 정규 표현식이고 두 번째 인자 값은 검증 대상 문자열이다. 검증 후 대상 문자열이 정규 표현식과 일치하면 true, 아니면 false를 반환한다.

- 패턴을 생성하려면 Pattern 객체를 반환하는 정적 compile 메소드를 호출해야한다. 
- matches() 메소드를 활용하여 검증한다.  

```java
import java.util.regex.Pattern;

public class RegexExample {
	public static void main(String[] args)  {
    
            String pattern = "^[0-9]*$"; //숫자만
            String val = "123456789"; //대상문자열
        
            boolean regex = Pattern.matches(pattern, val);
            System.out.println(regex); // true 출력.
    }
}
```

> ### pattern 클래스 주요 메서드
>
> **compile(String regex) **
>
> 주어진 정규표현식으로부터 패턴을 만든다.
>
> **matcher(CharSequence input)**
>
> 대상 문자열이 패턴과 일치할 경우 true를 반환한다.
>
> **pattern()**
>
> 컴파일된 정규표현식을 String 형태로 반환한다.
>
> **split(CharSequence input)**
>
> 문자열을 주어진 인자값 CharSequence 패턴에 따라 분리한다.





### Matcher 클래스

- Matcher 클래스는 대상 문자열의 패턴을 해석하고 주어진 패턴과 일치하는지 판별할 때 주로 사용된다. Matcher 클래스의 입력값으로는 CharSequence라는 새로운 인터페이스가 사용되는데 이를 통해 다양한 형태의 입력 데이터로부터 문자 단위의 매칭 기능을 지원 받을 수 있다. Mathcer 객체는 Pattern 객체의 `Matcher()`  메소드를 호출하여 받아 올 수 있다.

- Pattern 객체의 Matcher() 메소드를 호출해서 얻는다. 
- matches() 메소드를 활용하여 검증한다.
- 아래 예제는 Mathcher 클래스의 `find()` 메소드를 활용하여 대상 문자열이 영문자인지 검증하는 예제이다. 영문자가 맞다면 true, 아니면 false를 반환한다.

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
	public static void main(String[] args)  {
            Pattern pattern = Pattern.compile("^[a-zA-Z]*$"); //영문자만
            String val = "abcdef"; //대상문자열
	
            Matcher matcher = pattern.matcher(val);
            System.out.println(matcher.find()); // true 출력.
	}
}
```

> ### Matcher 클래스 주요 메서드
>
> **matches() **
>
> 대상 문자열과 패턴이 일치할 경우 true 반환.
>
> **find()**
>
> 대상 문자열과 패턴이 일치할 경우 true를 반환하고 그 위치로 이동.
>
> **find(int start)**
>
> start위치 이후부터 매칭 검색을 수행.
>
> **start(int group)**
>
> 지정된 그룹이 매칭되는 시작 위치 반환.
>
> **start()**
>
> 매칭되는 문자열 시작 위치 반환.
>
> **group()**
>
> 매칭된 부분을 반환.
>
> **group(int group)**
>
> 매칭된 부분중 group번 그룹핑 매칭부분을 반환.
>
> **groupCount()**
>
> 패턴내 그룹핑한 (괄호지정) 전체 갯수를 반환.



## 정규표현식 문법

![정규표현식 1](https://user-images.githubusercontent.com/51367622/116569953-d2890f00-a944-11eb-912c-7b3833da52ad.png)

![정규표현식 2](https://user-images.githubusercontent.com/51367622/116570036-e3d21b80-a944-11eb-9bfa-38e48ee45283.png)

주의할 점은 `백슬래쉬(\)` 가 포함되어 있는 기호들이다. 

정규 표현식에서 `백슬래쉬(\)` 는 확장 문자로, 다음에 일반 문자가 오면 특수문자로 취급하고, 백슬래쉬 다음에 특수문자가 오면 그 문자 자체를 의미한다. 

예를 들어, 알파벳이나 숫자를 나타내는 \w 같은 경우 자바에서 \ 자체는 특수 문자로 취급하기 때문에, 알파벳이나 숫자를 판별하는 정규식 기호는 다음과 같이 작성을 해야한다.

```java
\\w // 알파벳이나 숫자를 나타낸다.
```

자주 사용하는 기호들

```java
[] () \w * + {} ^ $
```

