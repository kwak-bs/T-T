# 비트 마스크



## 비트 연산

- A << B는 A X 2^B와 같다.
- A >> B는 A / 2^B와 같다.
- (A + B) / 2는 (A+B) >> 1로 쓸 수 있다.



## 비트마스크

> 정수로 집합을 나타낼 수 있다.
>
> {1, 3, 4, 5, 9} = 570 = 2^1 + 2^3 + 2^4 + 2^5 + 2^9

#### 장점

- 공간을 적게 사용한다. (정수 1개로 집합을 표현하기 때문. 또한, 1부터 N까지 정수로 이루어진 집합을 사용하는 건 공간이 2배 더 필요하다.)
- 정수라는 것. ex) A[{1, 3, 4, 5, 9}] => A[570] 으로 표현 가능. (0 ~ N-1 까지 N개의 정수로 이루어진 집합에서 사용 가능)
-  집합에 대한 검사, 추가, 삭제에 대한 시간 복잡도가 모두 O(1)이다. 



#### 현재 집합이 S일때

- i를 추가
  - S | (1 << i)
- i를 검사
  - S & (1 << i)
- i를 제거
  - S & ~(1 << i)
- i를 토글(0을 1로, 1을 0으로)
  - S ^ (1 << i)



```java
package problemSolve2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_11723 {
	// BOJ / 11723번 / 집합 / 비트마스킹 / 실버5
	public static void main(String[] args) throws NumberFormatException, IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer stk;
		StringBuffer sb = new StringBuffer();
		int t = Integer.parseInt(br.readLine());
		int S = 0;
		int n = 0;
		while(t-- > 0) {
			stk = new StringTokenizer(br.readLine(), " ");
			
			String comm = stk.nextToken();
			
			if(!(comm.equals("empty") || comm.equals("all"))) {
				n = Integer.parseInt(stk.nextToken());
			}
			
			if(comm.equals("add")) {
				S = S | (1 << n);
			} 
			else if(comm.equals("check")) {
				if((S & (1 << n)) > 0) {
					sb.append("1\n");
				}
				else {
					sb.append("0\n");
				}
			}
			else if(comm.equals("remove")) {
				S = S & ~(1 << n);
			}
			else if(comm.equals("toggle")) {
				S = S ^ (1 << n);
			}
			else if(comm.equals("all")) {
				S = (1 << 21) -1;
			}
			else if(comm.equals("empty")) {
				S = 0;
			}
		}
		System.out.println(sb);
	}
}

```



