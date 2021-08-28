<p align='middle'>
  <a href='https://www.moduparking.com/'>
    <img src='https://user-images.githubusercontent.com/51367622/130882614-fdfde471-f2c6-4be5-b4e2-afd6181e310c.png' width="300px;" alt="모두 컴퍼니" />
  </a></p>
<p align='middle'><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ONE-TED/5_moduCompany_team1?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/ONE-TED/5_moduCompany_team1"> 
<h1 align='middle'><a href='https://one-ted.github.io/5_moduCompany_team1/'>https://one-ted.github.io/5_moduCompany_team1/</a></h1>



---

🧐[노션 페이지](https://www.notion.so/fb50665e31bc48ef83c8bb97b99e4182)에서 팀원별 상세 역할 등 다양한 내용을 확인해보세요!

😎[Discussions](https://github.com/ONE-TED/5_moduCompany_team1/discussions)탭에서 미팅 로그를 확인해보세요!

😁[Team Repository](https://github.com/ONE-TED/5_moduCompany_team1)

---

<br/>

## 📌 프로젝트 소개

###  프리온보딩 코스 모두의 주차장 기업 과제

> ❕ **Drag & Drop & filter 기능이 있는 TodoList 타입 스크립트로 구현하기**❗

<br/>

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        </STRONG></summary>

## 공통 가이드

- **`TypeScript`** 사용
- 데이터는 로컬의 dummy data 로 자유롭게 구성할 것 (format: **`json`**)
- UI 라이브러리 사용하지 않을 것을 권장

## **과제** A: To-Do List App **만들기** (UI)

- 간단한 **투두리스트** 애플리케이션에 적합한 UI/UX를 구성할 수 있다.

### **세부 가이드**

- 투두리스트에 적합한 데이터를 구성할 수 있다
- Task 데이터 타입에 필수적으로 들어가야할 필드: id, 할일의 제목, 할일 완료 여부 예시 (변수 명은 자유)

    ```css
    {
    	id: 1,
    	taskName: '자소서 쓰기',
    	isComplete: true
    }
    ```

- [필수] 적절한 Header를 만든다.
- [필수] 투두리스트에 적합한 기능을 구현하기 위해 **데이터를 조작**할 수 있다.
- [필수] 스크롤시 Header가 사라지지 않고 화면 상단에 고정되도록 한다.
- [필수] 필수적으로 추가해야할 기능: Task 목록 조회, 새로운 Task 추가, Task 삭제
- [필수] 투두리스트에 적절한 애니메이션을 추가할 수 있다.
    - [필수] Drag and Drop으로 Task의 순서를 변경한다.
    - 데이터를 변경하지 않고 화면 내에서 Task의 순서만 변경되면 됨
- [선택] 필수 구현 항목에 덧붙여 필요한 **데이터 속성을 추가하여 정의**할 수 있다
- [선택] 최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
- [선택] 최소 요구사항에 덧붙여 추가하고 싶은 UI/UX 및 애니매이션을 추가적으로 구현.

## **과제** B: To-Do List App**만들기** (Data)

- 간단한 투두리스트 애플리케이션에 적합한 데이터 구조를 정의하고 조작할 수 있다.

### **세부가이드**

- 투두리스트에 적합한 데이터 타입을 구성할 수 있다
- Task 데이터 타입에 필수적으로 들어가야할 필드:

    ```jsx
    const task = {
    	id: 1
    	taskName: '자소서 쓰기',
    	status: status.ONGOING
    	createdAt: '2021-02-03'
    	updatedAt: '2021-07-07'
    }
    ```

    - id
    - 할일의 제목
    - 할일의 상태 (최소 3가지 이상의 상태)
        - 예시 (변수 명은 자유)

            ```jsx
            const status = {
            	FINISHED = '완료',
            	ONGOING = '진행중',
            	NOT_STARTED = '시작안함'
            }
            ```

    - 생성일
    - 업데이트일 (상태변경일)
- [필수] 투두리스트에 적합한 기능을 구현하기 위해 데이터를 조작할 수 있다.
- [필수] 필수 기능:
    - Task 목록 조회
    - 새로운 Task 추가
    - Task 삭제
- [필수] 최소 두가지 이상의 조건으로 Task를 필터링 (ex. 상태, 생성일, 생성자, 중요도)
- [필수] Task의 상태 변경 (ex. 진행중 → 완료)
- [선택] 최소 요구사항에 덧붙여 필요한 데이터 속성을 추가하여 정의할 수 있다
- [선택] 최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
- [선택] 최소 요구사항에 덧붙여 추가하고 싶은 투두리스트에 적절한 UI/UX를 추가할 수 있다.
</details>

<br/>


## 📑 구현 목록

`TodoList` [곽병선](https://github.com/kwak-bs)

- [x] 할 일, 마감일, 진행 상태 입력 기능.
- [x] 항목에서 삭제, D-day 표시, 진행 상태와 Task 수정 기능.
- [x] Header FocusTodo 기능.

`Drag && Drop` [박현아](https://github.com/ha3158987)

- [x] Todo 항목 Drag && Drop 기능
- [x] 삭제 시, 컨펌 모달 구현

`Filter` [김유진](https://github.com/jellybrown)

- [x] 이중 필터 기능 
      - [x] 진행 상태 : `전체`, `시작 안함`, `진행중`, `완료`
      - [x] 정렬 : `기본`, `마감일순`
- [x] TodoList 영역 스타일링



## 👨‍💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`

