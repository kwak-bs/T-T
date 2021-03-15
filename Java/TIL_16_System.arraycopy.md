# System.arraycopy

> 백준 알고리즘 문제를 풀다가 발견한 새로운 문법
>
> [백준 1917번 정육면체 전개도](https://www.acmicpc.net/problem/1917)

>**System.arraycopy**는 자바 배열의 값을 복사할 경우 사용한다. 
>
>형식 : arraycopy(Object src, int srcPos, object dest, int destPos, length);

```markdown
**파라미터**
	src - 원본 배열 (복사 배열)
	srcPos - 원본 배열 시작점
	dest - 사본 배열 (붙여넣기 배열)
	destPos - 사본 배열 시작점
	length - 길이 (시작점부터 몇개를 복사할건지)
```



## 특징

### 일반적인 for-loop 복사보다 장점이 많음

```java
for(int i = 0; i <= arr.length - 1; i++) {
	newArr[i] = arr[i];
}
```

##### 1. for-loop 복사는 매 루프마다 배열을 호출하고 복사해서 메모리와 시간을 불필요하게 낭비하지만 System.array는 아님

##### 2. for-loop 복사는 특정 인덱스 지정이 불가하지만 System.array는 가능

##### 3. 타입에 대한 변환이 자유로움

##### 4. 문법만 안다면 코드의 가독성이 훨씬 향상될 것임.

