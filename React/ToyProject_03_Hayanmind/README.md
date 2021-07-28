# 하얀 마인드 기업 과제

<br/>

 > 📌 **Wanted 프리온보딩 코스 (프론트 엔드) 기업 과제**
 >
 > 📗 **무한 스크롤 구현하기**

<br/>

#### 🎈[배포 링크](https://kwak-bs.github.io/wanted_hayanmind/)

#### 🎐[Repository](https://github.com/kwak-bs/wanted_hayanmind)

<br/>

## 📚 과제 요구 사항

1. Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.

2. **Data API**

   - The user's dummy comment data can be called through the API below.
     - https://jsonplaceholder.typicode.com/comments

   - The following parameters are supported:
     - `_page`
       - it starts at 1.

     - `_limit`
       - Please set the `_limit` parameter to 10.

   - Example of the first comment page
     - https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10

   - Sample data

   ```jsx
   [
     {
       "postId": 1,
       "id": 1,
       "name": "id labore ex et quam laborum",
       "email": "Eliseo@gardner.biz",
       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"
     }, 
   ]
   ```

3. You can use id as comment id, email as user's email and body as comment text

4. Please look at the following design guide link and reflect the design.

   - https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA

5. You don't have to make it into a responsive design.

6. You don't have to specify a font for the text.

<br/>

## 👨‍💻 실행 방법

### 설치 

`yarn install`

### 실행

`yarn start`

<br/>

## 📽 시연 영상

<img src = "https://user-images.githubusercontent.com/51367622/127190596-29c73c04-354d-4e2d-a01a-10dc3d371134.gif" width="100%" >





<br/>

##   ⚙ 사용 라이브러리 && API

1. `styled-components`
   - 스타일 도구 사용 방법은 다양하지만 저희 팀은 이번 기업 과제에 styled-components(CSS-in-JS)를 채택했습니다.
2. `styled-reset`
   - CSS 초기화를 위해 사용하였습니다.
3. `gh-pages`
   - 깃헙 페이지 배포를 위해 사용하였습니다.
4. `IntersectionObserver` API
   - 이번 무한 스크롤링을 구현하기 위해 사용한 API입니다.
