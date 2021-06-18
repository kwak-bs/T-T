# 투 포인터 / 슬라이딩 윈도우

<br/>

## 차이점

투 포인터는 슬라이딩 윈도우와 비슷하지만 다르다. 

<br/>

**투 포인터**는 부분 배열의 길이가 **가변적**이지만 **슬라이딩 윈도우**는 부분 배열의 길이가 **고정적**이다.

투포인터 알고리즘을 해결하기 위해서는 보통 2개의 변수를 많이 사용하는데 바로 left, right이다. 

취향에 따라 start, end라고 해도된다. 

또 문제에 따라서는 target 변수(목표로 하는 값)도 사용된다.

즉, arr[left] 부터 arr[right-1] 까지의 합이 target이 되도록 하는것이 알고리즘의 목표이다. 

while문을 사용해서 해결하면 편하다. 

쉽게 생각한다면 여기서 알아둬야 할 점은 부분배열의 합이 target 보다 작으면 

right++을 해주고 target보다 같거나 크면 left++를 해준다는 것이다. 

여기서 같은데 왜 left++를 해주냐 라는 질문을 할 수가 있다. (내가 그랬음) 

만약 갯수를 세는 문제라면 부분 배열의 합 == target인 경우 count++도 해준다. 

하지만 여기서 끝나는 것이 아니라 또 다른 부분 배열을 찾아야 하기 때문에 left++를 해주는 것이다. (은근 코드 작성하다 보면 헷갈림 약간 이분탐색 코딩할 때랑 비슷한 맥락)

어쨋든 제일 중요한 메커니즘은 부분 배열의 합을 설정할때 arr[left] 부터 arr[right-1] 까지 한다는 사실을 잊지 않는게 중요하다.  

## 투 포인터 대표 문제

###  수들의 합2 (백준, 2003)

```java
package problemSolve5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_2003 {
	// BOJ / 2003번 / 수 들의합2 / 투 포인터 / 실버3
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer stk = new StringTokenizer(br.readLine(), " ");
		
		int n = Integer.parseInt(stk.nextToken());
		int m = Integer.parseInt(stk.nextToken());
		stk = new StringTokenizer(br.readLine(), " ");
		int [] arr = new int[n];
		for(int i=0; i<n; i++) {
			arr[i] = Integer.parseInt(stk.nextToken());
		}
		
		int l = 0;
		int r = 0;
		int sum = 0;
		int answer = 0;
		while(true) {
			if(sum >= m) {
				sum -= arr[l++];
			}
			else if( r == n) break;
			else if(sum < m) {
				sum += arr[r++];
			}
			if(sum == m) {
				answer++;
			}
		}
		
		System.out.println(answer);
	}
}

```





## 슬라이딩 윈도우 대표 문제

슬라이딩 윈도우 알고리즘에서는 두 변수 left와 right를 사용하지 않아도 문제 해결이 가능하다. 

그 이유는 윈도우의 크기만 지정해주면 되기 때문이다. 

반복문 안에서 윈도우의 크기만 벗어났을경우 가장 오래된 값(배열의 가장 왼쪽 값)을 빼주고 현재 값을 더해주는 방식으로 문제 해결이 가능하다. 

윈도우 크기를 벗어났을 경우를 해결하는 방법은 여러가지다. 자료구조인 큐, 스택 등을 이용해도 되고 보통은 반복문 안에서 해결한다. 

<br/>

### N번째 큰 수 (백준, 2075)

이 문제는 우선 순위 큐 자료 구조를 사용하였다. 

슬라이딩 윈도우에서는 size가 불변이라는 것이 중요한데 큐에서 조건이 맞으면 빼고 넣는 것을 반복하여 사이즈를 유지하였다.

두 개의 변수 (left, right)를 사용하지 않고 슬라이딩 윈도우 알고리즘을 적용할 수 있는 문제이다.

```java
package problemSolve5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class BOJ_2075 {
	// BOJ / 2075번 / N번째 큰 수 / 슬라이딩 윈도우 / 골드5
	public static void main(String[] args) throws NumberFormatException, IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		
		PriorityQueue<Integer> pq = new PriorityQueue<>();
		
		StringTokenizer stk;
		stk= new StringTokenizer(br.readLine(), " ");
		for(int i=0; i<n; i++) {
			pq.add(Integer.parseInt(stk.nextToken()));
		}
		
		for(int i=1; i<n; i++) {
			stk = new StringTokenizer(br.readLine(), " ");
			for(int j=0; j<n; j++) {
				int num = Integer.parseInt(stk.nextToken());
				
				if(pq.peek() < num) {
					pq.poll();
					pq.add(num);
				}
			}
		}
		
		System.out.println(pq.poll());
	}
}
```

<br/>

### 게으른 백곰 (백준, 10025)

이 문제는 일반적인 반복문을 사용하였다.  딱 간단하게 말해서 윈도우의 크기(d)를 지정해주고 

반복문을 처음부터 시작하여 윈도우의 크기를 벗어난다면 가장 오래된 값(맨 왼쪽 값)을 빼주고 

최신 값(현재 값)을 더해준다. 이런 식으로 반복하여 최댓값을 구해주면된다. 

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_10025 {
	// BOJ / 10025번 / 게으른 백곰 / 슬라이딩 윈도우 / 실버4
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer stk = new StringTokenizer(br.readLine(), " ");
		
		int n = Integer.parseInt(stk.nextToken());
		int k = Integer.parseInt(stk.nextToken());
		
		int arr[] = new int[1000001];
		for(int i=0; i<n; i++) {
			stk = new StringTokenizer(br.readLine(), " ");
			int w = Integer.parseInt(stk.nextToken());
			int p = Integer.parseInt(stk.nextToken());
			
			arr[p] = w; 
		}
		int sum = 0;
		int max = 0;
		int d = 1 +(2*k);
		for(int i=0; i<=1000000; i++) {
			if(i >= d) {
				sum -= arr[i-d];
			}
			sum += arr[i];
			if(sum > max) {
				max = sum;
			}
		}
		System.out.println(max);
	}
}
```

<br/>