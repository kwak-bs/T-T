# bbangson Todo List
> 나만의 투두리스트를 만들어 보고자 진행한 토이 프로젝트입니다. 
>
> 노마드 코더의 Momonton 클론 코딩을 고도화 했습니다.
>
> 투두리스트 챌린지 출전해보았습니다. (2021.02.16)

[구경가기](https://kwak-bs.github.io/momentum/)
[레포지토리 이동](https://github.com/kwak-bs/momentum)

#### 결과물1

> 처음 들어갔을 때 화면입니다. 가운데에 현재 재생되고 있는 음악의 정보와 애니메이션이 구현되고 있습니다.  하단에 있는 네모 박스를 탭하여 음악을 들을 수 있습니다. 
>
> 전체적인 디자인은 구글의 확장 프로그램은 `Momentum`을 참고하였습니다.

![결과물1](https://user-images.githubusercontent.com/51367622/107965857-63ab4380-6fee-11eb-9d34-2f266a42b56a.PNG)

#### 결과물2

>우측 하단에 있는 Todo 버튼을 클릭하여 TodoList를 보이게한 화면입니다.

![image](https://user-images.githubusercontent.com/51367622/113708284-ff6a4d80-971b-11eb-8403-09eaabdfe4dc.png)

#### 결과물3

> 다크 모드를 적용하여 나타낸 화면입니다. 
>
> Done탭은 완료한 TodoList를 시간별로 나열하였습니다. 

![image](https://user-images.githubusercontent.com/51367622/113708665-7b649580-971c-11eb-94da-423436956ce3.png)



 ## 기능

### Center

- 시계, 날짜
- 음악 정보, 애니메이션
- 이름 입력. (LocalStorage)
- 주요 할 일 입력.(LocalStorage)

### Left

- 현재 위치 정보 및 날씨 정보 (상단)

- 밑에 사각형들을 클릭하면 음악이 재생된다는 것을 이탤릭체로 간단하게 영어로 작성해보았습니다. (하단)

### Right

- 다크 모드 기능( 상단 )
- Todo-List 기능( 하단 )

### Bottom

- Tab할 시 음악 재생 기능.



## 스택
- Vanila JS
- HTML5
- CSS



## 설명

- OpenWeather API 사용 (날씨)
- LocalStorage 활용
- gh-pages 배포
- navigator.geolocation.getCurrentPosition()  // 위치 정보 권한 허용
- prefers-color-schme CSS 미디어 쿼리 (다크 모드 기능)



## 느낀점

구글 익스텐션인 Momentum을 실제로 애용하고 있어서 유사한 TodoList를 구현하고 싶었지만 한계가 있었습니다. 

그래도 최대한 비슷하게 하고자 기존에 기획했던 Done Tab까지는 구현할 수 있었습니다. 

TodoList만 구현하면 재미가 떨어질 것 같아 구글링을 통하여 음악을 재생하는 방법을 찾아보았고 인터랙티브한 요소까지 포함하여 박스를 클릭하면 음악이 재생되는 기능을 구현해보았습니다. 

현재는 재생만 가능하고 일시정지, 정지는 구현하지 않았습니다. 

다크 모드 기능까지 공부한 적이 있어서 적용해보았는데 그렇게 어울리지는 않은 것 같습니다. 

참고로 노마드 코더 투드리스트 대회에 참가하여 9표를 받았습니다.

TodoList의 `Done` 탭을 구현하는 것이 제일 쉽지 않았던 것 같습니다. 제가 구현한 TodoList의 `To do` 탭은  말 그대로 할 일만 작성하고 체크 박스에 체크를 하면 `Done` 탭에 있는 리스트로 시간과 함께 넘어가게 됩니다. 체크를 한 TodoList의 Todo항목들을 Done탭으로 넘기는 것은 어렵지 않았습니다. 

하지만 시간 별로 나열하는 것이 생각보다 까다로웠습니다. 알고리즘에서 자주 사용하던 flag를 이용하여 해결했습니다. 문제를 해결한 과정은 다음과 같습니다. 

체크된 Todo 항목들은 Done 리스트로 내용, 시간(월, 일, 시각), flag 정보를 넘깁니다. flag의 디폴트 값은 true이고 사전에 먼저 넘어갔던 항목의 시간이 존재하면 flag=false로 바뀝니다. 

즉, Done 리스트로 넘어간 정보에서 해당 시간이 첫 번째로 로드되는 것이라면 `<h5>`태그를 생성하여 시간 정보를 배열에 추가하고 해당 시간이 기존에 존재하면 시간 정보를 제외한 내용만 배열에 추가합니다. 