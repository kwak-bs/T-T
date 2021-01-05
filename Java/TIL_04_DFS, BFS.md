# DFS( 깊이 우선 탐색 , Depth-First Search)

> 루트 노드( 혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기(branch)를 완벽하게 탐색하는 방법

-  미로를 탐색할 때 해당 분기에서 갈 수 있을 때까지 계속 가다가 더 이상 갈 수 없게 되면 다시 가장 가까운 갈림길로(새로운 분기)로 돌아와서 다른 방향으로 다시 탐색을 진행하는 방법과 유사하다. 
- 모든 노드를 방문하고자 할 때, 이 방법을 선택함
- 너비우선탐색(BFS)보다 더 간단하다.
- 검색 속도 자체는 너비우선탐색(BFS)에 비해서 느리다.



## 특징

- 자기 자신을 호출하는 순환 알고리즘의 형태를 지님
- 이 알고리즘을 구현할 때 가장 큰 차이점은 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야한다는 것 (이를 검사하지 않을 경우 무한루프에 빠질 수 있다. )
  - *ex) visit[index] = true;*

## 과정

![img](https://t1.daumcdn.net/cfile/tistory/9983A7335BD0156910)


## 코드
```java
// dfs, 재귀, 인접 행렬, i 정점부터 시작한다. 
public static void dfs(int i) {
    visit[i] = true; 
    System.out.print(i + " "); 
    
    for(int j=1; j<n+1; j++) { 
        if(map[i][j] == 1 && visit[j] == false) {
            dfs(j); } 
    } 
}
```


# BFS( 너비 우선 탐색 , Bread-First Search)

> 루트 노드(혹은 다른 임의의 노드)에서 시작한 인접 노드를 먼저 탐색하는 방법

- 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법
- 깊게(deep) 탐색하기 전에 넓게(wide) 탐색하는 것
- 두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때 이 방법을 사용한다.
  - ex) 지구 상에 존재하는 모든 친구 관계를 그래프로 표현한 후 A와 B 사이에 존재하는 경로를 찾는 경우 
    - DFS의 경우 - 모든 친구 관계를 다 살펴봐야 할지도 모른다.
    - BFS의 경우 - A와 가까운 관계부터 탐색한다.

## 특징

- BFS는 재귀적으로 동작하지 않는다.
- 이 알고리즘을 구현할 때 가장 큰 차이점은 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야한다는 것 (이를 검사하지 않을 경우 무한루프에 빠질 수 있다. )
- BFS는 방문한 노드들을 차례로 저장한 후 꺼낼 수 있는 자료 구조인 큐를 사용한다.
- 즉, 선입선출 원칙으로 탐색한다.

## 과정

깊이가 1인 모든 노드를 방문하고 나서 그 다음에, 깊이가 2인 모든 노드를, 그 다음엔 깊이가 3인 모든 노드를 방문하는 식으로 계속 방문하다가 더 이상 방문할 곳이 없으면 탐색을 마친다. 

![img](https://t1.daumcdn.net/cfile/tistory/99960F405BD01A8D18)

## 코드
```java
// bfs, q사용, 인접행렬, i 정점부터 시작한다. 
public static void bfs(int i) { 
	Queue<Integer> q = new LinkedList<>(); 
	q.offer(i); 
	visit[i] = true; 
	
	while(!q.isEmpty()) { 
		int temp = q.poll(); 
		System.out.print(temp + " ");
        
		for(int j=1; j<n+1; j++) { 
			if(map[temp][j] == 1 && visit[j] == false) { 
			q.offer(j); visit[j] = true; 
			} 
		} 
	} 
}
```

## BFS와 DFS의 차이

![img](https://t1.daumcdn.net/cfile/tistory/997C3C3E5BD01AF41D)