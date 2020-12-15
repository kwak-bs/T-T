# Scanner nextInt() 후 nextLine() 사용하는 이유 

Scanner를 사용해서 키보드 입력을 받을 때, nextInt()를 사용한 후, nextLine()을 사용하면 문자열이 제대로 입력되지 않는 결과가 발생한다. 

<br/>

그 이유는 nextInt()가 엔터키를 누르기 직전의 숫자들만 입력으로 받고 엔터키(개행문자)는 버퍼에 그대로 남아있기 때문에, 이후에 nextLine()을 사용하게 되면 nextLine()에 버퍼에 남아 있는 개행문자가 입력 되고 메소드가 종료된다. 

<br/>

그래서 nextInt()를 사용한 후, 아무 값도 저장하지 않는 nextLine()을 사용해줘야한다. 

ex) 

int n = sc.nextInt();

sc.nextLine();

String line = sc.nextLine();