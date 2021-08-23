<p align='middle'>
<a href='https://hayanmind.com/'><img src='https://user-images.githubusercontent.com/51367622/130241597-089feaa3-3b61-4772-bcb7-81520a27d3a5.png' width="300px;" alt="Hayanmind" /></a></p>
<p align='middle'><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kwak-bs/wanted_hayanmind?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/kwak-bs/wanted_hayanmind"> 
<h1 align='middle'><a href='https://kwak-bs.github.io/wanted_hayanmind/'>https://kwak-bs.github.io/wanted_hayanmind/</a></h1>


---

#### 🚀[Blog](https://bbangson.tistory.com/92) 포스팅 보러가기
#### 🧐 [repository](https://github.com/kwak-bs/wanted_hayanmind) 보러가기
---

<br/>

## 📌 프로젝트 소개

###  프리온보딩 코스 Hayanmind 기업 과제

> ❕ **무한 스크롤 구현하기**❗

<br/>

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>
    <div markdown="1">
<h4>1. Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.</h4>
<h4>2. Data API</h4>
<pre>
   - The user's dummy comment data can be called through the API below.<br/>
   		- https://jsonplaceholder.typicode.com/comments<br/>
   - The following parameters are supported:<br/>
     	- <code>_page</code><br/>
       		- it starts at 1.<br/>
        - <code>_limit</code><br/>
       		- Please set the `_limit` parameter to 10.<br/>
   - Example of the first comment page<br/>
     	- https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10<br/>
   - Sample data<br/><code>
   [
     {
       "postId": 1,
       "id": 1,
       "name": "id labore ex et quam laborum",
       "email": "Eliseo@gardner.biz",
       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"
     }, 
   ]
   </code><br/></pre>
<h4>3. You can use id as comment id, email as user's email and body as comment text</h4>
<h4>4. Please look at the following design guide link and reflect the design. </h4>
   - https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA<br/>
 <h4>5. You don't have to make it into a responsive design. </h4>
 <h4>6. You don't have to specify a font for the text. </h4>
</div>
</details>

<br/>

## 📽 시연 영상

![ezgif com-gif-maker](https://user-images.githubusercontent.com/51367622/130284641-d3c9ac2f-90d9-4fec-a1f4-7f593c0c89c6.gif)

<br/>

## 👨‍💻 실행 방법

### 설치 

`yarn install`

### 실행

`yarn start`

<br/>

## ⚙ 사용 라이브러리 && API

`IntersectionObserver` API

- 이번 무한 스크롤링을 구현하기 위해 사용한 API입니다.