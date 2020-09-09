# Encasulation(캡슐화)

## 1. 개념

> 캡슐화는 Class구현에 대한 상세내용을 숨기는 것이다.  <br />
캡슐화의 목적은 중요한 데이터를 보존, 보호하기 위해 사용하는 것이다. <br />
즉, 캡슐화는 Class에 담는 내용중 중요한 데이터나 기능을 외부에서 접근하지 못하게 사용한다고 생각하면 된다. <br />
<em> 캡슐화 = 은닉성</em> 


- Class 사용자는 Class의 내부 구현에는 신경 쓸 필요 없이, 제공되는 Interface(method)를 이용하기만 하면 된다. 
- 내부 로직은 private로 선언하여, 외부에서 보이지 않게 한다. 즉, 변환에 관계 없이 외부에서는 Interface만을 이용하므로, 사용자 관점에서는 유지보수가 편해 진다.
- Encapsulation은 Data보호뿐 아니라, Class의 세부 구현도 숨긴다는 점에서 Information Hiding의 확장이라고 볼 수 있다.

<br/>

<br/>

## 2. 캡슐화 방법
1. 멤버 변수 앞에 접근 제어자 private를 붙인다.
2. 멤버 변수는 getter/setter 메서드를 이용하여 참조한다.

<br/>

<br/>

## 3. 예제 



```java
public class PersonEntity{
	private String name; // 멤버 변수 앞에 접근 제어자 private를 붙인다.
	private char gender;
	private String ssn;
	private String address;
	private String phone;
    
	public PersonEntity() {
		
	}
	
	public PersonEntity(String name, String ssn, String address, String phone) {
		setName(name);
		setSsn(ssn);
		setAddress(address);
		setPhone(phone);
	}
    
    public String getName() { //멤버 변수는 getter/setter 메서드를 이용하여 참조한다.
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
    // gender, ssn, address, phone 관련 메소드 생략
}
```

```java
public classs PersonTest {
    
    public static void main(String[] args) {
           PersonEntity PE = new PersonEntity();
           PE.setName("홍길동");
           PE.SetGender('남');
           PE.SetGender("010-1234-5689");
 
           System.out.println("이름 :" +PE.getName());
           System.out.println("성별 :" +PE.getGender());
           System.out.println("번호 :" +PE.getGender());
       }
   }
```

<br/>

***이처럼 메소드를 이용해 간접적으로 접근해야 한다. 예를 들어 PE.name처럼 접근하려 하면 바로 오류가 날 것이다.***