# Polymorphism ( 다형성 )

## 1. 개념

> 말 그대로 여러가지 형태를 가질 수 있는 것이다.  하나의 메소드나 클래스가 있을 때, 이것들은 다양한 방법으로 동작한다. 대표적으로 ***오버로딩, 오버라이딩*** 이 있다. 또한, 하나의 참조변수로 여러 타입의 객체를 참조할 수 있다. 즉, **부모타입의 참조변수로 자식타입(상속관계)의 객체를 다룰 수 있는 것이 다형성의 기본 개념이다.**
>


- ※ 참고 : A instanceof B - A가 B의 자식이거나 같은 class 타입이면 true, A가 B의 부모이면 false
- reference 변수를 polymorphic하다고 할 수 있다.

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



























