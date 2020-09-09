# MyBatis

> **MyBatis는 자바 오브젝트와 SQL문 사이의 자동 Mapping 기능을 지원하는 ORM 프레임워크이다.** 

- MyBatis는 SQL을 별도의 파일로 분리해서 관리하게 해주며, 객체-SQL 사이의 파라미터 Mapping 작업을 자동으로 해주기 때문에 많은 인기를 얻고 있는 기술이다. 
- MyBatis는 Hibernate나 JPA(Java Persistence Api)처럼 새로운 DB 프로그래밍 패러다임을 익혀야 하는 부담이 없이, 개발자가 익숙한 SQL을 그대로 이용하면서 JDBC 코드 작성의 불편함도 제거해주고, 도메인 객체나 VO 객체를 중심으로 개발이 가능하다는 장점이 있다.

<br/>

<br/>

## 특징 

- **쉬운 접근성과 코드의 간결함**
  - 가장 간단한 퍼시턴스 프레임워크
  - XML 형태로 서술된 JDBC 코드라고 생각해도 될 만큼 JDBC의 모든 기능을 MyBatis가 대부분 제공한다.
  - 복잡한 JDBC코드를 걷어내며 깔끔한 소스코드를 유지할 수 있다.
  - 수동적인 파라미터 설정과 쿼리 결과에 대한 맵핑 구문을 제거할 수 있다.
- **SQL문과 프로그래밍 코드의 분리**
  - SQL에 변경이 있을 때마다 자바 코드를 수정하거나 컴파일 하지 않아도 된다.
  - ㄴSQL 작성과 관리 또는 검토를 DBA와 같은 개발자가 아닌 다른 사람에게 맡길 수도 있다.
- **다양한 프로그래밍 언어로 구현가능**
  - Java, C#, .NET , Ruby

<br/><br/>

## MyBatis와 MyBatis-Spring을 사용한 DB 액세스 Architecture

![캡처1](https://user-images.githubusercontent.com/51367622/92624887-fa1e5f00-f302-11ea-9311-2a7747c2e0e1.PNG)

<br/><br/>

## MyBatis3의 주요 컴포넌트



| 컴포넌트                                | 설명                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| **MyBatis 설정파일 (SqlMapConfig.xml)** |  데이터베이스의 접속 주소 정보나 Mapping 파일의 경로 등의 고정된 환경정보를 설정한다. |
| **SqlSession FactoryBuilder**           |  MyBatis 설정 파일을 바탕으로 SqlSessionFactory를 생성한다. |
| **SqlSessionFactory**                   |  SqlSession을 생성한다.                                     |
| **SqlSession**                          |  핵심적인 역할을 하는 클래스로서 SQL 실행이나 트랜잭션 관리를 실행한다.<br/> SqlSession 오브젝트는 Thread-Safe 하지 않으므로 thread마다 필요에 따라 생성한다. |
| **mapping 파일 (user.xml)**             |  SQL문과 OR Mapping을 설정한다.                             |

<br/><br/>

## MyBatis-Spring의 주요 컴포넌트

![asdf](https://user-images.githubusercontent.com/51367622/92624961-102c1f80-f303-11ea-904a-7c3e9286a6d9.PNG)

| 컴포넌트                            | 설명                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| MyBatis 설정파일 (SqlMapConfig.xml) |  VO 객체의 정보를 설정한다.                                 |
| SqlSession FactoryBean              |  MyBatis 설정파일을 바탕으로 SqlSessionFactory를 생성한다.<br/> Spring Bean으로 등록해야 한다. |
| SqlSessionTemplate                  |  핵심적인 역할을 하는 클래스로서 SQL 실행이나 트랜잭션 관리를 실행한다.<br/> SqlSession 인터페이스를 구현하며, Thread-safe하다. <br/> Spring Bean으로 등록해야 한다. |
| Mapping 파일 (UserMapper.xml)       |  SQL문과 OR Mapping을 설정한다.                             |
| Spring Bean 설정파일(beans.xml)     |  SqlSessionFactoryBean을 Bean 등록할 때 DataSource 정보와 MyBatis Config 파일정보, Mapping 파일의 정보를 함께 설정한다. <br/> SqlSesseionTemplate을 Bean으로 등록한다. |

<br/><br/>

##  Layered Architecture (계층화 아키텍처)

![asg](https://user-images.githubusercontent.com/51367622/92625002-1de1a500-f303-11ea-8a19-5edf3c0fcc06.PNG)

<br/><br/>

## Mapper 인터페이스

> Mapper 인터페이스는 Mapping 파일에 기재된 **SQL을 호출하기 위한 인터페이스.**

- Mapper 인터페이스는 SQL을 호출하는 프로그램을 Type Safe 하게 기술하기 위해 MyBatis3.x부터 등장.
- Mapping 파일에 있는 SQL을 자바 인터페이스를 통해 호출할 수 있도록 해준다.

<br/>

###  # Mapper 인터페이스를 사용하지 않았을 때

![ag](https://user-images.githubusercontent.com/51367622/92625204-55505180-f303-11ea-850b-210a23c735df.PNG)

- Mapper 인터페이스를 사용하지 않으면, SQL을 호출하는 프로그램은 SqlSession의 메서드의 아규먼트에 문자열로 **네임스페이스+”.”+SQL ID** 로 지정해야 한다.
- 문자열로 지정하기 때문에 오타에 의해 버그가 숨어있거나, IDE에서 제공하는 code assist 를 사용할 수 없다.

<br/>

### # Mapper 인터페이스를 사용하였을 때

![asge](https://user-images.githubusercontent.com/51367622/92625075-3782ec80-f303-11ea-8fb5-db1a7e858fc7.PNG)

- UserMapper 인터페이스는 개발자가 작성한다.
- **패키지 이름+”.”+인터페이스 이름+”.”+메서드 이름**이 **네임스페이스+”.”+SQL ID가 되도록 네임스페이스와 SQL의 ID**를 설정해야 한다.
- 네임스페이스 속성에는 패키지를 포함한 Mapper 인터페이스 이름이 들어가야 한다.
- SQL ID에는 매핑하는 메서드 이름을 지정하는 것이다.

<br/><br/><br/>

##### 출처

Spring Framework 입문과 활용 (저자 : 백명숙)

