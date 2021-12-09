## JSX는 주입 공격을 방지합니다. 



JSX에 사용자 입력을 삽입하는 것은 안전합니다. 

```react
const title = response.potetiallyMaliciousInput;
// 이것은 안전합니다. 
const element = <h1>{title}</h1>
```



기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 `이스케이프` 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 `XSS`(cross-site-scripting) 공격을 방지할 수 있습니다. 

