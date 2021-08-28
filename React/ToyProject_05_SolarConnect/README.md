 <p align='middle'>
 <a href='https://github.com/six-sense/4_solarConnect_team4'><img src='https://www.solarconnect.kr/assets/img/common/sc-logo.svg' width="300px;" alt="solarConnect" /></a></p>
 <p align='middle'><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/six-sense/4_solarConnect_team4?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/six-sense/4_solarConnect_team4"> 
 <h1 align='middle'><a href='https://six-sense.github.io/4_solarConnect_team4/'>https://six-sense.github.io/4_solarConnect_team4/</a></h1>



---
🧐[노션 미팅 로그](https://www.notion.so/team4-65604469bf2d4197bb4dd81875a8e5f4)에서 더 다양한 개발 과정을 확인해보세요!

😎[Team Repository](https://github.com/six-sense/4_solarConnect_team4)

---

 <br/>

 ## 📌 프로젝트 소개

 ###  [Assignment 6]  SolarConnect 기업 과제
> ❕ **Sorting Machine 구현하기**❗

<br/>

<details>
     <summary><STRONG>
        📚 과제 요구사항 보기
         <STRONG></summary>
     <div markdown="1">
<h3>과제 요약</h3>
- 소팅 기능을 가진 서비스입니다.<br/>
- 숫자를 스트링으로 입력 받고, 버튼을 누르면 결과가 나타납니다.<br/>
<h3>과제 조건</h3>
1. 타이머<br/><br/>
- [1, 6. 타이머]는 재활용이 가능한 Component로 구성합니다.<br/>
- [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타냅니다. (예> 2021년 7월 20일 화요일)<br/>
- [6. 타이머]는 “en-US” 지역시간 표기법으로 나타냅니다. (예> Tuesday July 20, 2021)<br/>
- 한국 표준시를 기준으로 나타냅니다.<br/>
<br/>
2. 입력<br/><br/>
- 사용자의 입력을 받습니다.<br/>
- 입력 데이터의 형식은 “숫자,숫자,숫자…” 입니다. (예> 1,2,3,4)<br/>
- 잘못된 형식의 입력데이터는 예외처리하여 사용합니다.<br/>
<br/>
3. 시작<br/><br/>
- 사용자가 버튼을 누르면 소팅이 시작됩니다.<br/>
- [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 됩니다.<br/>
<br/>
4. 결과<br/><br/>
- 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1, 2, 3, 4)<br/>
- [4. 결과 필드]에서는 오름차순 결과를 나타냅니다.<br/>
- [5. 결과 필드]에서는 내림차순 결과를 나타냅니다.<br/>
- 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.<br/>
<br/>
5. 기타 조건<br/>
<br/>
- ReactJS로 구현합니다.<br/>
- 과제를 위한 추가적인 패키지 설치는 자유입니다.<br/>
- 레이아웃은 그림을 참고하되, UI 및 UX는 작성자 편의에 맞게 구현합니다.<br/>
- 상기 조건을 제외한 모든 부분들은 작성자 편의에 맞게 구현합니다.<br/>
<br/>
<h3>추가</h3>
- 과제 수행중에 참고했던 사이트가 있다면 README.md 파일에 출처를 기입합니다.<br/>
    - 예> 정렬알고리즘 : https://정렬알고리즘.co.kr<br/>
     </div>
      </details>

 <br/>

 ## 📑 구현 목록

 `타이머`

 - 현재 시각을 한국 표기법, 미국 표기법으로 출력.
 - 하나의 컴포넌트로 국가에 따른 다른 표기법 출력.
 - `dateObject`라는 객체 안에 함수를 정의하여, 다양한 국가의 표기법으로 쉽게 현재 시간을 변환할 수 있다.

 `입력`

 - Validation ( 숫자(정수), "," , "-" 만 입력 가능하도록 정규표현식 구현) 
 - `const regex = /[^-\d,]+/;`

 `정렬`

 - 퀵소트를 직접 구현하여 오름차순 정렬.

- 내림차순은 오름차순의 역순으로 출력.

`토스트 메시지`

- 미흡 입력에 대한 토스트 메시지 출력 
- `양식에 맞게 입력해주세요`, `값을 입력해주세요`, `올바르지 않은 양식입니다.`, `"-"만 올 수 없습니다` , `-가 올바르지 않은 곳에 있습니다.`  등 출력.



<details>
     <summary><STRONG>
        🛠해결한 Error Case
         <STRONG></summary>
     <div markdown="1">
		<code>1,3,45,5,1,3,34,5,2,23,1 1342345</code><br/>
        <code>1,1-1,1</code><br/>
         <code>1,--1,1</code><br/>
		<code>1,a,1</code><br/>
		<code>1,,1</code><br/>
		<code>1,11-,1</code><br/>
		<code>1,-,1</code><br/>
     </div>
      </details>

 <br/>

 ## 👨‍💻 실행 방법

 ### 설치

 `npm install`

 ### 실행

 `npm start`



 <br/>

## 🌎 참고

이것이 취업을 위한 코딩테스트다 - 나동빈



