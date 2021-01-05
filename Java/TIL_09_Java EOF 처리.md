# Java EOF 처리 

## EOF (End Of File)

> 데이터 소스로부터 더 이상 읽을 수 있는 데이터가 없음을 나타낸다. 
>
> 입력클래스는 2가지인 Scanner, BufferedReader로 구성된다.

<br/>

<br/>



## Scanner 

```java
Scanner sc = new Scanner(System.in);



while(sc.hasNextLine()) { // String

	sc.nextLine();

}


while(sc.hasNextInt()) { // int

	sc.nextInt();

}
```

<br/>

## BufferedReader

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in);

String input = "";

while((input = br.readLine()) != null) {

	//......

}

```





- Scanner 클래스의 경우 타입에 따른 입력으로 편의를 제공하지만, BufferedReader보다 속도가 느리다.
- 입력이 끝나면 null 값을 반환하는데, Console창에서 Ctrl + z 버튼을 통해 강제로 null값을 반환할 수 있다.  