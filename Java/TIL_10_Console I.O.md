## Console I / O



### System.out

> **PrintStream 객체로 Terminal 참조**

- 표준 출력은 콘솔(모니터) 출력이며, System.out의 메소드를 사용한다.
- **println()** : 출력 후 , new line
- **print()** : new line 없이 출력
- print() 와 println()은 다양한 타입을 화면에 출력하기 위해 overload 되어 있다. 



### System.in

> InputStream 객체로 키보드 참조

- 표준 입력이다.
- ex) BufferedReader br = new BufferedReader(new InputStreamReader(**System.in**));



### System.err

> **PrintStream 객체로 Terminal 참조**