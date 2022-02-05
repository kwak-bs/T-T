## React Testing Library

> CRA로 리액트 앱을 생성하면 기본적으로 테스팅 할 때 React Testing Library를 사용한다. 
>
> 그렇다면 React Testing Library가 무엇인가?



- React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축된다. 
- DOM Testing Library란 Dom 노드를 테스트하기 위한 매우 가벼운 솔루션이다. 
- CRA로 생성된 프로젝트는 즉시 React Testing Library를 지원한다. 그렇지 않은 경우 다음과 같이 npm을 통해 추가할 수 있다.
  - `npm install --save-dev @testing-library/react`



- 즉, 리액트 컴포넌트를 테스트하는 가벼운 솔루션이다. 



![image](https://user-images.githubusercontent.com/51367622/152647229-9d385618-4453-44e6-92d1-d00e3e08f78c.png)

**구현 주도 테스트**에서는 위의 UI를 테스트할 때 주로 `<p>` 태그가 쓰였고, Edit 등의 문자가 들어갔다는 것을 테스트한다. 그래서 만약 `<p>`태그를 `<h2>` 태그로 바꾸면 에러가 날 것이다. 



하지만 **행위 주도 테스트**에서는 사용자의 입장에서 테스트 하기 때문에 `<p>` 태그가 쓰이던 `<h3>`태그가 쓰여서 글을 표현하는것이 중요한게 아니라, 어떠한 이벤트를 발생시켰을 때 화면이 어떻게 변화 되는지 같은 테스트가 더 주를 이루게 된다. 



아직 자세히는 이해가 되지 않지만 간단하게 적어놓고 넘어가자.

