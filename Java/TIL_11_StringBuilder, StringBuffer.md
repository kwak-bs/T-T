# StringBuilder, StringBuffer, Sysout, append



## StringBuilder , StringBuffer

> String객체와 String객체를 더하는(+) 행위는 메모리 할당과 해제를 발생시키며 더하는 연산이 많아진다면 성능적으로 좋지 않다. 그래서 **StringBuilder**, **StringBuffer**를 사용하는 것이다.
>
> **StringBuilder**는 String과 문자열을 더할 때 새로운 객체를 생성하는 것이 아니라 기존의 데이터에 더하는 방식을 사용하기 때문에 속도가 빠르며 상대적으로 부하가 적다.
>
> **StringBuilder**, **StringBuffer** 둘의 역할은 같다.  
>
> - 문자열의 저장 및 변경을 위한 메모리 공간을 지닌 클래스. 
> - 문자열 데이터의 추가를 위해 append와 insert 메소드를 갖고 있다.
> - String클래스는 문자열 상수를 지니는 메모리 공간을 지니고 있으나, StringBuffer, StringBuilder안의 메모리 공간은 값이 변경 가능한 변수의 성격을 지니고 있다고 말할 수 있다.



## 둘의 차이점

> 간단하다. **Synchronized**(동기화) 가 있고 없고의 차이일 뿐이다.
>
> **StringBuilder**는 Synchronized가 없고 **StringBuffer**는 Synchronized가 있다.
>
> **Synchronized**(동기화)는 Thread에 락을 걸어주는 역할을 한다.
>
> 다시 말해서, Thread에 락을 걸어줌으로써 다른 Thread에서 접근할 수 없게 된다. 
>
> 이로 인해, **Synchronized**를 해준 메소드나 변수는 Thread Safe하게 된다. 즉, 멀티 스레드 환경에서 안전성을 갖게 된다. 
>
> 결론적으로 **StringBuilder**는 synchronized를 하지 않는 대신 속도가 빠르지만, 멀티스레드 환경에서 thread safe 하지 않다.
>
> **StringBuffer**는 synchronized를 해주는 대신 속도가 느리지만 멀티스레드 환경에서 thread safe 하다.



## System.out.println() 

> **Synchronized**를 사용하는 대표적인 메소드이다.
>
> 위에서도 말했듯이 **Synchronized**는 thread safe 하지만 속도가 느리다. 호출하는 횟수가 커지면 커질수록 더 오래 걸릴 것이다.  때문에 로그를 찍거나 디버깅을 할 때 System.out.print로 찍지 않는 것이 좋다.
>
> 알고리즘 문제를 풀 때도 여러 번 출력을 하는 문제에서 System.out.print로 일일이 출력을 하게 되면 속도가 상당히 저하된다. (ex. for문 안의 sysout)
>
> 그러므로 StringBuilder의 append메소드를 사용해서 문자열을 합쳐놨다가 한 번에 출력을 하는 것이 훨씬 더 효율적이다.



## append 

> **append** 메소드는 배열의 크기를 늘리고 전 배열을 System.arraycopy메소드를 통해 복사하고 붙여 넣는 식의 작동을 하게 된다. 
>
> 배열을 복사하고 붙여 넣는 작업은 필연적으로 O(n)의 시간 복잡도를 갖는다. 
>
> System.arraycopy메소드 또한 시간 복잡도는 O(n)이다. 하지만 StringBuilder의 append메소드는 O(1)의 시간 복잡도를 가진다.
>
> 왜냐하면 append메소드에서 배열의 크기를 늘릴 때 전에 크기의 2배씩 확장하기 때문에 크기를 늘리는 O(n)의 작업은 그렇게 자주 발생하지 않게 된다.
>
> 그래서 계속 append를 했을 때 평균 복잡도는 O(1)이다. 

- 출력을 많이 하는 문제에서는 sysout 보다는 append를 이용하자.