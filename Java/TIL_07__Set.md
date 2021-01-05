# Set

> Set은 List와는 다르게 객체(데이터)를 ***중복 저장할 수 없다.*** 또한, 저장된 객체(데이터)를 인덱스로 관리하지 않기 때문에 ***저장순서가 보장되지 않는다.***

- Set의 대표적인 클래스 
  - HashSet, TreeSet, LinkedHashSet
- 대표적인 메소드 
  - add, iterator, size, remove, clear

- Set은 데이터를 검색하기 위해서 iterator() 메서드로 iterator(반복자)를 생성하고 데이터를 가져와야 한다. 

## HashSet

> 데이터를 중복 저장할 수 없고 순서를 보장하지 않는다. 

```java
Set<E> set = new HashSet<E>();
```



# TreeSet

> 중복된 데이터를 저장할 수 없고 입력한 순서대로 값을 저장하지 않는다. 하지만 TreeSet은 기본적으로 ***오름차순으로 데이터를 정렬한다.***

```java
Set<E> set = new TreeSet<E>();
```



## 예제 코드 (TreeSet)

```java
public int[] solution(int[] numbers) {
    // numbers 배열에서 임의의 두 숫자를 선정해 더한 값들을 중복을 제외하고, 오름차순으로 정렬하여 set에 저장하는 문제이다. 
    Set<Integer> set = new TreeSet<Integer>();
        
    for(int i=0; i<numbers.length; i++) {
        for(int j= i+1; j<numbers.length; j++) {
        	int sum = numbers[i] + numbers[j]; // 반복문을 돌면서 더해준다.
        	set.add(sum); // set에 추가.
        }
     }        
        
     Iterator<Integer> itr = set.iterator(); // iterator() 생성
     int [] answer = new int [set.size()];
     int idx = 0;
        
     while(itr.hasNext()) {
        answer[idx] = (int)itr.next(); // answer에 넣어줌 
        idx++;
     }
        
     for(int i=0; i<answer.length; i++) {
        System.out.println(answer[i]);
     }
   	  return answer;
}
```



## LinkedHashSet

> LinkedHashSet도 중복된 데이터를 저장할 수 없다. 차이점은 ***입력된 순서대로 데이터를 관리***한다. 

```java
Set<E> set = new LinkedHashSet<E>();
```

