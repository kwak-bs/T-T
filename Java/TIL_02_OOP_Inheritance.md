# Inheritance ( 상속 )

## 1. 개념

> 말 그대로 자식이 부모로부터 무언가를 물려받는 것이다. 단, 현실 세계의 상속과 차이라고 한다면 현실 세계에서는 자식이 부모를 선택할 수 없지만
>
> 자바에서는 **자식(클래스)이 상속받고 싶은 부모(클래스)를 선택해서 물려받을 수 있다.**(?????????????????????헐) </br>
>
> 이때 상속받는 클래스를 자식 클래스, 하위 또는 서브 클래스라고 부른다. 상속을 해주는 클래스를 부모 클래스, 상위 또는 슈퍼 클래스라고 부른다.


- 문법 : ***class 자식클래스 extends 부모클래스{ ... }***
- 자바에서의 상속은 단일 상속만 지원한다. 즉, 자식은 하나의 부모만 가질 수 있다.
- 단일 상속의 제한점 극복 : interface 이용
- 다중 상속을 허용하지 않는 이유 : 코드의 모호성 배제.
- **장점**

  - 비슷한 유형의 코드 재사용
  - 검증된 코드를 사용 -> 오류의 최소화
  - 관련된 여러 클래스들의 공통점 통일화

<br/>

<br/>

## 2. 상속의 대상
- 자식 클래스가 부모 클래스로부터 상속을 받게 되면 **부모 클래스의 필드와 메서드**를 물려받는다. 단, 접근 제어자가 private을 갖는 필드나 메소드는 상속이 불가능하고, 패키지가 다를 경우 접근 제어자가 default인 경우도 상속이 불가능하다.

| 멤버 변수 or 멤버 메소드 | 설명                                                         |
| ------------------------ | ------------------------------------------------------------ |
| **private**              | 클래스 내부에서만 참조 가능                                  |
| **default**              | 같은 디렉토리(같은 package)내의 다른 클래스에서 참조 가능    |
| **protected**            | default 참조 범위 및 상속 관계에 있을 때 Package관계없이 참조가능 |
| **public**               | 어디서나 참조 가능                                           |

- 클래스는 public, default 만 가능하다.



<br/>

<br/>

## 3. Method Overriding ( 재정의 )

> 자식 클래스에서 부모 메소드의 기능을 자신의 기능에 맞게 메소드 내용(Body)을 새롭게 재정의 하는 것.

```java
public class Employee{
	public String name;
    public double salary;
    public MyDate birthDate;
    
    public String getDetails() { // 부모 메소드
        return "Name: " + name + "\n" + "Salary: " + salary;
    }
}
```

```java
public class Manager extends Employee {
 	public String department;
 	
    @Override
    public String getDetails(){ // 자식 클래스에서 새롭게 재정의 
 		return "Name: " + name + "\n" + "Salary: " + salary + "\nDepartment: " + department;
 	}
}

```

<br/>

<br/>



## 4. Super 키워드

- 부모 객체를 가리킨다.
- 용도 
  - 부모의 멤버변수 참조 :  **super.*멤버변수_이름***
  - 부모의 멤버메소드 참조 :  **super.*멤버메소드_이름***
  - 부모의 생성자 호출 : **super( *파라미터_리스트 )***



```java
public class Employee { 
 	private String name;
 	private double salary;
 	private MyDate birthDate;
 
    public String getDetails() { // 부모의 멤버메소드 
        return "Name: " + name + "\n" + "Salary: " + salary;
 	}
}

```



```java
public class Manager extends Employee {
    private String department;
 
    public Manager() {
 
    }
    
 
    public String getDetails() { // 부모의 멤버 메소드 참조 super.getDetails()
        return super.getDetails() + "\nDepartment: " + department;
    }
}

```













**추후 추가 예정**

- 오버로딩 vs 오버라이딩



























