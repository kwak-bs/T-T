# 배열 렌더링하기



### sample.js

```react
const users = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com'
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com'
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com'
  }
];
```

만약에 이 내용을 컴포넌트로 렌더링한다면 가장 기본적인 방법으론 비효율적이지만, 그냥 그대로 코드를 작성하는 것 입니다.



### UserList.js

```react
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

#### 결과화면

![image](https://user-images.githubusercontent.com/51367622/113509821-8db2c800-9592-11eb-8645-4886538b0027.png)

배열이 고정적이라면 상관없지만, 배열의 인덱스를 하나하나 조회해가면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못합니다. 

<br/>

동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 `map()`을 사용합니다. 

`map()` 함수는 배열안에 있는 각 원소를 변환하여 새로운 배열을 만들어줍니다.  리액트에서 동적인 배열을 렌더링해야 할 때는 이 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됩니다. 

<br/>

리액트에서 배열을 렌더링 할 때에는 `key`라는 props를 설정해야합니다. `key`값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 지금의 경우엔 `id`가 고유값입니다. 

만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 `map()` 함수를 사용할 때 설정하는 콜백함수의  두 번째 파라미터 `index`를 `key`로 사용하면 된다. 

```react
<div>
  {users.map((user, index) => (
    <User user={user} key={index} />
  ))}
</div>
```

위처럼 사용하면 됩니다. 

하지만 `index`로 `key`를 사용하게 되면 브라우저 상에서 경고창은 안뜨게 할 수 있지만, 성능적으로는 좋지 않습니다. 