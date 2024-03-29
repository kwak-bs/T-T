## MSA에서 적용할 수 있는 서버 이중화

> **대용량 트래픽**

 우리 LiveMD에서는 `MSA`를 기반으로 구현된 프로젝트이다. `MSA`에서는 `API Gateway`를 활용하여 각각의 서버로 사용자의 요청을 하나의 `EndPoint`로 받아 분산시켜주는 것이 필수적이다. 

LiveMD에서는 `NginX` 웹 서버가 `Reverse Proxy`를 통해 API Gateway 역할을 하고 있다. 그러면 이를 통해 API 서버 별 Scale out(부하 분산)은 할 수 있다. (기능 별 서버가 다르기 때문.) 

하지만 대용량 트래픽이 발생했을 경우, 특정 서버에만 집중적인 요청이 있다면 이 또한, Scale out(부하 분산)이 필요하다. (예를 들어, 채팅 서버에만 집중적으로 요청이 가는 경우) 이것은 어떻게 해결할까? 

 핵심은 `서버 이중화`이다. 그렇다면 서버 이중화는 어떻게 구현할까? MSA 를 자세히 생각해보면 하나의 서비스를 여러 개의 서비스로 잘개 쪼갠 모양이다. 잘개 쪼개진 서비스는 곧 하나의 소규모 팀이 맡아 개발 및 유지 보수를 하게 된다. 그렇다면 나눠진 서비스는 하나의 서버를 갖게되는 것이고 소규모 팀은 그 서버를 담당하는 것이다. 즉, 그 서버를 `AMI`를 통해 서버를 복사하고 `ELB`를 통해 서버 이중화를 해주면 된다. 

 이러한 방식이 곧 MSA 안에서 수행할 수 있는 서버 이중화라고 나는 생각한다. 
