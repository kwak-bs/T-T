# coding-style

> 코딩 스타일 가이드는 코드를 '어떻게 작성할지'에 대한 전반적인 규칙을 담은 문서로, 어떤 따옴표를 쓸지, 들여쓰기할 때 스페이를 몇 개 사용할 지, 최대 가로길이는 몇까지 제한할지 등의 내용이 담겨있다.

유명 스타일 가이드 :

- [Google의 자바스크립트 스타일 가이드](https://google.github.io/styleguide/jsguide.html)
- [Airbnb의 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)
- [StandardJS](https://standardjs.com/)

## Linter

> Linter는 내가 작성한 코드가 스타일 가이드를 준수하고 있는지를 자동으로 확인할 수 있고, 스타일 개선과 관련된 제안도 받을수 있다. 이렇게 자동으로 스타일을 체크받아 보면, 변수나 함수 이름에 난 오타 등이 유발하는 버그를 미리 발견할 수 있어서 좋다. 아직 '코드 스타일'을 정하지 않았더라도 linter를 사용하면 버그를 예방할 수 있기 때문에 linter를 사용하는 것이 좋다.

유명 Linter : 

- [JSLint](http://www.jslint.com/) – 역사가 오래된 linter
- [JSHint](http://www.jshint.com/) – JSLint보다 세팅이 좀 더 유연한 linter
- [ESLint](http://eslint.org/) – 가장 최근에 나온 linter(요즘 이거 많이 씀)

### ESLint와 에디터를 통합해 사용하는 방법

1. [Node.js](https://nodejs.org/)를 설치한다.
2. npm(자바스크립트 패키지 매니저)을 사용해 다음 명령어로 ESLint를 설치한다. `npm install -g eslint`
3. 현재 작성 중인 자바스크립트 프로젝트의 루트 폴더(프로젝트 관련 파일이 담긴 폴더)에 `.eslintrc`라는 설정 파일을 생성한다.
4. 에디터에 ESLint 플러그인을 설치하거나 활성화한다. 주요 에디터들은 모두 ESLint 플러그인을 지원한다.

