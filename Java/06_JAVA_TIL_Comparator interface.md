# Comparator 인터페이스

> 오름차순이 아닌 다른 방식으로 정렬하고 싶을 때 사용하는 인터페이스. <br/>즉, **비교 기준을 세울 때 사용하는 인터페이스**



## Compare() 메소드

리턴값이 양수면 두 객체의 자리를 바꿔주는 역할을 한다. 



## CompareTo() 메소드

2개의 **두 문자열**을 비교하여 int형 값을 반환하는 메소드

```java
A.compareTo(B);
```

- public int compareTo(String anotherString)
- A와 B가 같으면 0을 반환
- A가 B보다 크면 양수를 반환 (자리를 바꿈)
- A와 B보다 작으면 음수를 반환
- 맨 첫자리부터 차례대로 비교하는 특성이 있다.
- 왼쪽이 기준 값, 오른쪽이 비교 대상, 즉 기준값이 크면 +, 작으면 - 

### 코드

```java
Arrays.sort(strings, new Comparator<String>() {
    @Override
    		
    	public int compare(String s1, String s2) {
    			
    		if(s1.charAt(n) == s2.charAt(n)) {
    			return s1.compareTo(s2); // s1 - s2가 양수면 위치 바꿈 
    		}
    			
    		return s1.charAt(n) - s2.charAt(n); // s2.charAt(n)이 작으면 오름차순
    	}
    });
```

