# 이전 순열, 다음 순열 공식

> Java는 C++, python처럼 next, prev permutation 함수가 없기 때문에 따로 기억하기 위해서 기록한다.



## 다음 순열

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_10974 {
	// BOJ / 10974번 / 모든 순열 / 브루트포스 / 실3
	static int n;
	static int num[];
	static StringBuffer sb;
    
	public static void main(String[] args) throws NumberFormatException, IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(br.readLine());
		num = new int [n];
		sb = new StringBuffer();
        
		for(int i=0; i<n; i++) {
			num[i] = i+1;
		}
		
		do {
			for(int i=0; i<n; i++) {
				sb.append(num[i]).append(" ");
			}
			sb.append("\n");
		}while(next_permutation());
		
		System.out.println(sb);
	}
	public static boolean next_permutation() {
		int i = num.length-1;
		
		// 오른쪽 영역이 내림차순이 끝나는 시점.
		while(i>0 && num[i-1] >= num[i]) {
			i -= 1;
		}
		
		// 다음 순열이 없을때
		if(i <= 0) {
			return false;
		}
		
		// 우측 영역 비교
		int j = num.length-1;
		while(num[j] <= num[i-1]) {
			j -= 1;
		}
		
		// swap
		int temp = num[i-1];
		num[i-1] = num[j];
		num[j] = temp;
		
		// 오름차순
		j = num.length-1;
		while(i<j) {
			temp = num[i];
			num[i] = num[j];
			num[j] = temp;
			
			i++;
			j--;
		}
		return true;
	}
}

```



## 이전 순열

```java
import java.util.*;

public class Main {
    public static boolean prev_permutation(int[] a) {
        int i = a.length-1;
        while (i > 0 && a[i-1] <= a[i]) {
            i -= 1;
        }

        if (i <= 0) {
            return false;
        }

        int j = a.length-1;
        while (a[j] >= a[i-1]) {
            j -= 1;
        }

        int temp = a[i-1];
        a[i-1] = a[j];
        a[j] = temp;

        j = a.length-1;
        while (i < j) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i += 1;
            j -= 1;
        }
        return true;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i=0; i<n; i++) {
            a[i] = sc.nextInt();
        }
        if (prev_permutation(a)) {
            for (int i=0; i<n; i++) {
                System.out.print(a[i] + " ");
            }
            System.out.println();
        } else {
            System.out.println("-1");
        }
    }
}
```

