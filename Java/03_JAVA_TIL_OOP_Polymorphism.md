# Polymorphism ( 다형성 )

## 1. 개념

> 말 그대로 여러가지 형태를 가질 수 있는 것이다.  하나의 메소드나 클래스가 있을 때, 이것들은 다양한 방법으로 동작한다. 대표적으로 ***오버로딩, 오버라이딩*** 이 있다. 또한, 하나의 참조변수로 여러 타입의 객체를 참조할 수 있다. 즉, **부모타입의 참조변수로 자식타입(상속관계)의 객체를 다룰 수 있는 것이 다형성의 기본 개념이다.**
>


- 문법 : ***class 자식클래스 extends 부모클래스{ ... }***
- 자바에서의 상속은 단일 상속만 지원한다. 즉, 자식은 하나의 부모만 가질 수 있다.
- 단일 상속의 제한점 극복 : interface 이용
- 다중 상속을 허용하지 않는 이유 : 코드의 모호성 배제.
- **장점**
- 비슷한 유형의 코드 재사용
  - 검증된 코드를 사용 -> 오류의 최소화
  - 관련된 여러 클래스들의 공통점 통일화

![캡처](https://user-images.githubusercontent.com/51367622/93668792-f42a3a00-fac9-11ea-87a0-5f28b294acf0.PNG)



<br/>

<br/>

## 2. Overloading
> 오버로딩은 가장 이해하기 쉬운 다형성의 예다. 

```java
class O{
    public void a(int param){
        System.out.println("숫자출력");
        System.out.println(param);
    }
    public void a(String param){
        System.out.println("문자출력");
        System.out.println(param);
    }
}

public class PolymorphismOverloadingDemo {
    public static void main(String[] args) {
        O o = new O();
        o.a(1);
        o.a("one");
    }
}

```

- 클래스 O의 메소드 a는 두 개의 본체를 가지고 있다. 동시에 두 개의 본체는 하나의 이름인 a를 공유하고 있다. 같은 이름이지만 서로 다른 동작 방법을 가지고 있기 때문에 오버로딩은 다형성의 한 예라고 할 수 있다. 

<br/>

<br/>



**참고**

- 자바 슬라이드 (by 백명숙)
- [생활코딩](https://www.opentutorials.org/module/516/6127)



























