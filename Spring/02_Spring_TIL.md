## JUnit 

> Java에서 독립된 단위테스트(Unit Test)를 지원해주는 프레임워크다. 
>
> ><em>**단위테스트(Unit Test)란?**</em>
> >
> > 소스 코드의 특정 기능이 의도된 대로 정확히 작동하는지 검증하는 절차, 
> >
> >즉, 모든 함수와 메소드에 대한 테스트 케이스를 작성하는 절차를 의미한다.
>
> JUnit은 보이지 않고 숨겨진 단위 테스트를 끌어내어 단위테스트를 쉽게 해주는 테스트 지원 프레임워크다.

- #### **특징**

  * 단정(assert) 메서드로 테스트 케이스의 수행 결과를 판별한다. 
    * ex) assertEquals(예상 값, 실제 값)
  * jUnit4부터는 테스트를 지원하는 어노테이션을 제공한다.
    * @Test, @Before, @After
  * 각 @Test 메서드가 호출할 때마다 새로운 인스턴스를 생성하여 독립적인 테스트가 이루어지도록 한다.



### ※ jUnit에서 테스트를 지원하는 어노테이션 (jUnit을 사용한 DI 테스트 클래스)

- **@Test**

  - @Test가 선언된 메서드는 테스트를 수행하는 메소드가 된다.
  - Junit은 각각의 테스트가 서로 영향을 주지 않고 독립적으로 실행됨을 원칙으로 하므로 @Test 마다 객체를 생성한다.

  

- **@Ignore**

  - @Ignore가 선언된 메서드는 테스트를 실행하지 않게 한다.

  

- **@Before**

  - @Before가 선언된 메서드는 @Test 메서드가 실행되기 전에 반드시 실행되어 진다.
  - @Test 메소드에서 공통으로 사용하는 코드를 @Before 메소드에 선언하여 사용하면 된다.

  

- **@After**

  - @After가 선언된 메소드는 @Test 메소드가 실행된 후 실행된다.

  

- **@BeforeClass**

  - @BeforeClass 어노테이션은 @Test 메소드 보다 먼저 한번만 수행되어야 할 경우에 사용하면 된다.

  

- **@AfterClass**

  - @AfterClass 어노테이션은 @Test 메소드 보다 나중에 한번만 수행되어야 할 경우에 사용하면 된다.



### ※ 테스트 결과를 확인하는 단정(assert) 메서드

| 메서드                   | 설명                                                         |
| ------------------------ | ------------------------------------------------------------ |
| assertEquals(a, b);      |  객체 A와 B의 값이 일치함을 확인한다.                       |
| assertArrayEquals(a, b); |  배열 A와 B의 값이 일치함을 확인한다.                       |
| assertSame(a, b);        |  객체 A와 B가 같은 객체임을 확인한다.<br /> assertEquals 메서드는 두 객체의 값이 같은지 확인하고, assertSame메서드는 두 객체의 레퍼런스가 동일한가를 확인한다. (== 연산자) |
| assertTrue(a);           |  조건 A가 참인가를 확인한다.                                |
| assertNotNull(a);        |  객체 A가 null이 아님을 확인한다.                           |



### ※ Spring-Test에서 테스트를 지원하는 어노테이션

- **@RunWith (SpringJUnit4ClassRunner.class)**
  - @RunWith는 jUnit 프레임워크의 테스트 실행방법을 확장할 때 사용하는 어노테이션이다. 
  - SpringJUnit4ClassRunner라는 클래스를 지정해주면 jUnit이 테스트를 진행하는 중에 ApplicationContext를 만들고 관리하는 작업을 진행해 준다.
  - @RunWith 어노테이션은 각각의 테스트 별로 객체가 생성되더라도 싱글톤(Singleton)의 ApplicationContext를 보장한다.
- **@ContextConfiguration**
  - 스프링 빈(Bean) 설정 파일의 위치를 지정할 때 사용되는 어노테이션이다.
- **@Autowired**
  - 스프링DI에서 사용되는 특별한 어노테이션이다.
  - 해당 변수에 자동으로 빈(Bean)을 매핑 해준다.
  - 스프링 빈(Bean) 설정 파일을 읽기 위해 굳이 GenericXmlApplicationContext를 사용할 필요가 없다.





##### 출처

Spring Framework 입문과 활용 (저자 : 백명숙)