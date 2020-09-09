# Bean 등록 메타정보 구성 전략 (빈 설정방법)



## ＃ 전략(1) <Span style="color : red">XML 설정 단독 사용</span> 

- <Span style="color : red">**모든 Bean을 명시적으로 XML에 등록하는 방법이다.**</span>
-  생성되는 모든 Bean을 XML에서 확인할 수 있다는 장점이 있으나 Bean의 개수가 많아지면 XML 파일을 관리하기 번거로울 수 있다.
- 여러 개발자가 같은 설정파일을 공유해서 개발하다 보면 설정파일을 동시에 수정하다가 충돌이 일어나는 경우도 적지 않다.
- DI에 필요한 적절한 setter 메서드 또는 constructor가 코드 내에 반드시 존재해야 한다.
- 개발 중에는 어노테이션 설정방법을 사용했지만, 운영 중에는 관리의 편의성을 위해 XML설정으로 변경하는 전략을 쓸 수도 있다.

<br/><br/>

## ＃ 전략(2) <Span style="color : red">어노테이션과 XML 설정 혼용해서 사용</span>

- Bean으로 사용될 클래스에 특별한 어노테이션(Annotation)을 부여해주면 이런 클래스를 자동으로 찾아서 Bean으로 등록한다.
- @Component 어노테이션이 선언된 클래스를 자동으로 찾아서 Bean으로 등록 해주는 방식을 **빈 스캐닝(Bean Scanning)을 통한 자동인식 Bean 등록 기능**이라고 한다.
- 어노테이션을 부여하고 자동 스캔으로 Bean을 등록하면 XML 문서 생성과 관리에 따른 수고를 덜어주고 개발 속도를 향상시킬 수 있다.
- 애플리케이션에 등록될 Bean이 어떤 것들이 있고, Bean들 간의 의존관계가 어떻게 되는지를 한눈에 파악할 수 없다는 단점이 있다.

<br/>

## ※ Bean 등록 Annotation

| 어노테이션  | 설명                                                         |
| ----------- | ------------------------------------------------------------ |
| @Component  | 컴포넌트를 나타내는 일반적인 스테레오 타입으로 태그와 동일한 역할을 함 |
| @Repository | 퍼시스턴스(persistence) 레이어, 영속성을 가지는 속성(파일, 데이터베이스)을 가진 클래스 |
| @Service    | 서비스 레이어, 비즈니스 로직을 가진 클래스                   |
| @Controller | 프리젠테이션 레이어, 웹 어플리케이션에서 웹 요청과 응답을 처리하는 클래스 |

- **@Repository, @Service, @Controller는 더 특정한 유즈케이스에 대한 @Component의 구체화된 형태이다.**

<br/>

## ※ Bean 의존관계 주입 Annotation

> @Autowired, @Resource 어노테이션은 의존하는 객체를 자동으로 주입해 주는 어노테이션이다. 
>
> @Autowired는 타입으로, @Resource는 이름으로 연결한다는 점이 다르다

- **@Autowired**
  - 정밀한 의존관계 주입 (Dependency Injection)이 필요한 경우에 유용하다.
  - @Autowired는 변수, setter 메서드, 생성자, 일반메서드에 적용 가능하다.
  - 의존하는 객체를 주입할 때 주로 Type을 이용하게 된다.
  - @Autowired는 `<property>`, `<constructor-arg>`  태그와 동일한 역할을 한다.
- **@Resource**
  - 어플리케이션에서 필요로 하는 자원을 자동 연결할 때 사용된다.
  - @Resource는 변수, setter 메서드에 적용 가능하다.
  - 의존하는 객체를 주입할 때 주로 Name을 이용하게 된다.
- **@Value**
  - 단순한 값을 주입할 때 사용되는 어노테이션이다. 
  - @Value(“Spring”)은 `<property .. value="Spring" />`  와 동일한 역할을 한다.
- **@Qualifier**
  - @Qualifier는 @Autowired 어노테이션과 같이 사용되어 진다.
  - @Autowired는 타입으로 찾아서 주입하므로, 동일한 타입의 Bean객체가 여러 개 존재할 때 특정 Bean을 찾기 위해서는 @Qualifier를 같이 사용해야 한다.

<br/>

## ※ Component Scan을 지원하는 태그

### 	※ `<context:component-scan>` 태그

> @Component를 통해 자동으로 Bean을 등록하고, @Autowired로 의존관계를 주입받는 어노테이션을 클래스에서 선언하여 사용했을 경우에는 해당 클래스가 위치한 특정 패키지를 Scan하기 위한 설정을 XML에 해주어야 한다.

**`<context:component-scan base-package=“myspring.di.annot" />`**

- `<context:include-filter>`태그와 `<context:exclude-filter>`태그를 같이 사용하면 자동 스캔 대상에 포함시킬 클래스와 포함시키지 않을 클래스를 구체적으로 명시할 수 있다.

<br/><br/>

## ＃ 전략(3) <Span style="color : red">어노테이션 설정 단독 사용 (ver3.0</span>) 

- Spring JavaConfig 프로젝트는 XML이 아닌 자바 코드를 이용해서 컨테이너를 설정할 수 있는 기능을 제공하는 프로젝트이다.
- 스프링 부트에 이용되는 전략이다.
- @Configuration 어노테이션과 @Bean 어노테이션을 이용해서 스프링 컨테이너에 새로운 빈 객체를 제공할 수 있다.
- Spring 3.0 부터는 어노테이션을 이용한 Bean의 등록 및 Bean들 간의 연결 설정을 자바 코드 내부에 하므로 XML을 전혀 사용하지 않는다 .
- 하지만 스프링이 제공하는 스키마에 정의된 전용 태그를 사용할 수 없다. (aop, tx등을 비롯한 10여 개의 스키마와 그안에 정의된 전용 태그를 쓸 수 없게 됨)



<br/>

## ※ Bean 등록과 설정 Annotation

| 어노테이션     | 설명                                                         |
| -------------- | ------------------------------------------------------------ |
| @Bean          | @Bean 어노테이션은 새로운 빈 객체를 제공할 때 사용되며 @Bean이 적용된 메서드의 이름을 Bean의 식별값으로 사용한다. |
| @Configuration | 클래스에 @Configuration 어노테이션을 선언하는 것은 스프링 IoC 컨테이너가 해당 클래스를 Bean 정의의 설정으로 사용한다는 것을 나타낸다. |

- Spring의 새로운 자바 설정 지원의 핵심 부분은 @Configuration 어노테이션이 붙은 클래스이다. 이러한 클래스들은 스프링 IoC 컨테이너가 관리하는 객체의 인스턴스화, 설정, 초기화 로직을 정의하는 @Bean 어노테이션이 붙은 메서드들로 이루어져 있다. 

<br/>



## ※ Spring-Test에서 테스트를 지원하는 어노테이션(Annotation)

### @ContextConfiguration

- @ContextConfiguration(classes=HelloConfig.class, loader=AnnotationConfigContextLoader.class)
- Spring 3.1 M2는 @Configuration 클래스를 지원하기 위해 새로운 AnnotationConfigContextLoader를 소개하고 @ContextConfiguration 주석은 loader 속성을 통해 @Configuration 클래스의 선언을 지원 하도록 업데이트 됐다.











##### 출처

Spring Framework 입문과 활용 (저자 : 백명숙)

