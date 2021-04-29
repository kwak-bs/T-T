# Java String 클래스 메소드 정리

<br/>

## startsWith

> 문자열이 지정한 문자 혹은 문자열로 시작하는지 판단. 
>
> 있으면 true 없으면 false를 반환한다. 
>
> 대소문자를 구별하고 공백도 취급하기 때문에 주의해서 사용한다. 
>
> prefix의 비교 위치를 지정하려면 startsWith의 두 번째 파라미터에 값을 넣으면 된다. 

**boolean startsWith(String prefix)**
**boolean startsWith(string prefix, int toffset)**

```java
String str = "apple
System.out.println(str.startsWith("ap")); // true 출력
System.out.println(str.startsWith(" ap")); // false 출력, 공백 주의
System.out.println(str.startsWith("pp",1)); // true 출력
```

<br/>

## endsWith

> 문자열 마지막에 지정한 문자 혹은 문자열이 있는지 판단. 
>
> 있으면 true 없으면 false를 반환한다. 
>
> 대소문자를 구별하고 공백도 취급하기 때문에 주의해서 사용한다.

**boolean endsWith(string sufix)**

```java
String str = "apple";
System.out.println(str.endsWith("le")); // true 출력
System.out.println(str.endsWith(" le")); // false 출력 , 공백 주의
```

<br/>

## equals

> 사전순으로 비교할 필요없이 단순히 문자열이 같은지 다른지 판단.
>
> 같으면 true 다르면 false를 반환.
>
> 대소문자를 구별한다.

**boolean equals(Object obj)**

```java
String str1 = "java";
String str2 = "javaScirt"
System.out.println(str1.equals("java")); // true 출력
System.out.println(str2.equals("java")); // flase 출력
```

<br/>

## equalsIgnoreCase

> 사전순으로 비교할 필요없이 단순히 문자열이 같은지 판단.
>
> eqauls 메소드와 다른 점은 대소문자를 구별하지 않는다는 것이다.

**boolean equalsIgnoreCase(String anotherString)**

```java
String str = "apple";
System.out.println(str.equalsIgnoreCase("APPLE")); // true 출력
```

<br/>

## indexOf

> 특정 문자나 문자열이 앞에서부터 처음 발견되는 인덱스를 반환한다.
>
> 찾지 못했을 경우는 -1을 반환.
>
> 지정된 인덱스에서 검색을 시작하려면 두 번째 파라미터에 인덱스 값을 넣으면 된다. 
>
> 생략시 0부터 시작한다.

**int indexOf(String str)**

**int indexOf(int ch)**

**int indexOf(int ch, int fromIndex)**   

**int indexOf(String str, int fromIndex)**

```java
String str = "apple";
System.out.println(str.indexOf("p")); // 1 출력
```

<br/>

##  lastIndexOf

> 특정 문자나 문자열이 뒤에서부터(역방향) 처음 발견되는 인덱스를 반환한다.
>
> 찾지 못했을 경우는 -1을 반환.
>
> 지정된 인덱스에서 검색을 시작하려면 두 번째 파라미터에 인덱스 값을 넣으면 된다. 
>
> 생략시 뒤에서부터(역방향) 시작한다.

**int lastIndexOf(String str)**

**int lastIndexOf(int ch)**

**int lastIndexOf(int ch, int fromIndex)**   

**int lastIndexOf(String str, int fromIndex)**

```java
String str = "apple";
System.out.println(str.lastIndexOf("p")); // 2 출력
```

<br/>

## length

> 문자열의 길이를 반환한다.

**int length()**

```java
String str = "apple";
System.out.println(str.length()); // 5 출력
```

<br/>

## replace

> 특정 문자열을 원하는 문자열로 치환한다. 
>
> 치환한 문자열을 새로운 문자열로 반환.
>
> 첫 번째 인자는 변환하고자 하는 대상이 되는 문자열이고 두 번째 인자 값은 변환할 문자이다. 

**String replace(char oldChar, char newChar)**

**String replace(CharSequence target, CharSequence replacement)**

```java
String str = "aaaa";
System.out.println(str.replace("aa", "b")); // "bb" 출력
```

<br/>

## replaceAll

> 특정 문자열을 원하는 문자열로 치환한다. 
>
> 치환한 문자열을 새로운 문자열로 반환.
>
> replace 메소드와 차이점은 replace의 인자는 CharSequence이지만 replaceAll은 String이라는 것이다. 
>
> 즉, 여기서 String 이라는 것은 regular expression, 정규 표현식이라고 부르는 형식의 인자값을 사용할 수 있다.
>
> 실제 대상 문자열이 어떤 형태 인지 모를 경우에는 replace() 메소드만을 사용하기에는 무리가 있다. 
>
> 그래서 불특정 입력 값을 변환하고자 할 경우에는 replaceAll() 함수에 정규 표현식을 이용하여 구현하는 것이 좋다. 

**String replaceAll(String regex, String replacement)**

```java
String str = "aaaa";
System.out.println(str.replaceAll("aa", "b")); // "bb" 출력
String str2 = "abcde";
System.out.println(str2.replaceAll("[^abc]", "굿")); // "abc굿굿" 출력
```

<br/>

## replaceFirst

> 주어진 정규식 혹은 특정 문자열과 일치하는 첫 번째 문자열을 원하는 문자열로 치환한다. 
>
> 말 그대로 첫 번째로 발견한 문자열만 바꾸는 것이다.  

**String replaceFirst(String regex, String replacement)**

```java
String str = "aaaa";
System.out.println(str.replaceFirst("aa", "b")); // "baa" 출력
```

<br/>

## split

> 정규표현식을 기준으로 문자열을 분리한다. (정규표현식 몰라도 가능, 특정 문자 혹은 공백도 가능)
>
> limit에 인자를 전달하면 그 limit까지만 문자열을 쪼갠다. 

**String split(String regex)**

**String split(String regex, int limit)**

```java
String str = "aa bb cc";
String[] arr = str.split(" ");
for(int i=0; i<arr.length; i++) {
    System.out.println(arr[i]);
}
// "aa", "bb", "cc" 출력
```

<br/>

## subString

> beginIndex부터 문자열 끝까지 지정 범위에 속해있는 문자열을 반환한다.
>
> endIndex를 따로 지정해준다면 특정 구간의 문자열만 반환한다.
>
> 시작 범위의 값은 포함하고, 끝나는 범위의 값은 포함하지 않는다. 

 **String substring(int beginIndex)**

**String substring(int beginIndex, int endIndex)**

```java
String str = "abcde";
System.out.println(str.substring(0,2)); // "ab" 출력.
System.out.println(str.substring(2)); // "cde" 출력.
```

<br/>

## toLowerCase

> 문자열을 전부 소문자로 변환한다.
>
> 메소드 인자인 locale은 아직 잘 모른다. 없이 사용해도 무방할듯.

**String toLowerCase()**

**String toLowerCase(Locale locale)**

```java
String str = "APPLE";
System.out.println(str.toLowerCase()); // "apple" 출력.
```

<br/>

## toUpperCase

> 문자열을 전부 대문자로 변환한다.

**String toUpperCase()**

**String toUpperCase(Locale locale)**

```java
String str = "apple";
System.out.println(str.toUpperCase()); // "APPLE" 출력
```

<br/>

## trim

> 문자열 앞 뒤에 공백을 없애준다. 중간에 있는 것은 안 없앤다. 

**String trim()**

```java
String str = "   apple apple apple   ";
System.out.println(str.trim()); // "apple aplle apple" 출력
```

<br/>

## valueOf

> 지정한 타입 인수의 문자열 표현을 반환한다.
>
> 즉, 예를 들어 int를 String으로 변환하는 것이다. (toString()과 유사)
>
> 파라미터가 null이면 문자열 null을 만들어서 담는다.
>
> toString() 메소드는 대상 값이 null이면 NullPointerException 발생한다. 

**static String valueOf(boolean b)**

**static String valueOf(char c)**

**static String valueOf(char[] data)**

**static String valueOf(char[] data, int offset, int count)**

**static String valueOf(double d)**

**static String valueOf(float f)**

**static String valueOf(int i)**

**static String valueOf(long l)**

**static String valueOf(Object obj)**

```java
int value = 100;
System.out.println(String.valueOf(value)); // "100" 출력
```

<br/>

## copyValueOf

> static 메소드. (static 메소드에 대해선 추후 정리)
>
> char형 배열을 문자열로 변환할때 사용하는 메소드이다. 
>
> char형 배열만 전달하면 그 배열 자체를 문자열로 반환하고 
>
> 특정 위치 offset, 갯수 count 까지 전달하면 특정 위치에서 몇 개의 문자까지 문자열로만 받을 수 있다. 

**static String copyValueOf(char []data)**

**static String copyValueOf(char []data, int offset, int count)**

```java
char []charArray={'A','B','C','D','E','F'};
System.out.println(String.copyValueOf(charArray)); // "ABCDEF" 출력.
System.out.println(String.copyValueOf(charArray,2,4)); // "CDEF" 출력.
```

<br/>

## compareTo

> 문자열을 앞에서부터 사전순으로 비교한다.  (대소문자 구별)
>
> anotherString이 사전순으로 앞에 등장할때는 양수를 반환하고 사전순으로 늦게 등장할때는 음수를 반환한다. 
>
> anotherString과 현재 문자열이 같다면 0을 반환한다. 
>
> 비교는 String내의 각각 문자의 유니코드 값에 근거에 행해진다. 
>
> 보통 양수를 반환하면 순서를 뒤바꾼다. String배열의 정렬을 정하고자 할 때 많이 사용한다. 
>
> 참고로 유효한 모든 인덱스 위치에 있어서 문자가 같은 경우는, 상대적으로 짧은 길이의 String이 사전적으로 앞이 된다.  
>
> 이 경우 compareTo() 메소드는 String 길이의 차이를 돌려준다. 

**int compareTo(String anotherString)**

```java
String str1="BCD";
String str2="ABC";
String str3="BCD";
String str4="CDE";
String str5 = "ABCDEF";
System.out.println(str1.compareTo(str2)); // 1 출력
System.out.println(str1.compareTo(str3)); // 0 출력
System.out.println(str1.compareTo(str4)); // -1 출력
System.out.println(str2.compareTo(str5)); // -3 출력
```

<br/>

## compareToIgnoreCase

> 대소문자를 무시하고 비교하고 싶을 때 사용하면 된다.
>
> 원래 compareTo 메소드에서 "ABC"와 "abc"를 비교하면 0이 반환되지 않지만 
>
> 이 메소드에선 0이 반환된다.

**int compareToIgnoreCase(String str)**

```java
String str1="abc";
String str2="ABC";
String str3="abc";
String str4="aaa";
System.out.println(str1.compareToIgnoreCase(str2)); // 0
System.out.println(str1.compareToIgnoreCase(str3)); // 0
System.out.println(str1.compareToIgnoreCase(str4)); // 1
```



## contains

> 문자열에서 특정 문자열이 포함되어있는지 여부를 확인한다. 
>
> 포함하면 true, 안포함하면 false를 반환한다.

**boolean contains(CharSequence s)**

```java
String str="AABBCCDD";
System.out.println(str.contains("BC")); // true 출력
System.out.println(str.contains("AD")); // false 출력
```

<br/>

## charAt

> 문자열에서 char 값이 필요할 때 사용한다. 
>
> 인자 index는 문자열에서 한 문자를 뽑아낼 위치를 나타낸다.
>
> 코테에서 제일 많이 사용되는 듯.

**char charAt(int index)**

```java
String str="AABBCCDD";
System.out.println(str.charAt(4)); // 'C' 출력
System.out.println(str.charAt(str.length()-1)); // 'D' 출력
```

<br/>

## concat

> 문자열와 문자열을 결합할 때 사용한다.
>
> 문자열을 합칠 때 사용하지만 사실 자바에서는 + 연산이나 StringBuilder를 사용하는 것이 더 좋다. 

**String concat(String str)**

```java
String str="AABBCCDD";
System.out.println(str.concat("EE")); // "AABBCCDDEE" 출력
System.out.println(str+"EE"); // "AABBCCDDEE" 출력
```

<br/>

## format

> 특정 format으로된 문자열을 얻고자 할 때 사용한다. 
>
> C언어의 sprintf와 유사.

**static String format(String format, Object ...args)**

```java
String str=String.format("%d+%d=%d", 1,2,1+2);
System.out.println(str); // "1+2=3" 출력

int i = 123456789;
str = String.format("%,d", i);
System.out.println(str); // "123,456,789" 출력
```

<br/>

## matches

> 해당 문자열이 주어진 정규식과 일치하는지 여부를 알려준다.

**boolean matches(String regex)**

```java
int i = 123456;
String str1 = String.format("%,d", i);
String str2 = "123456";
boolean matches = str1.matches(str2);
System.out.println("matches: " + matches); // false 출력
```

<br/>

## isEmpty()

> length()가 0이면 true를 반환한다.

**boolean isEmpty()**

```java
String str = "";
System.out.println(str.isEmpty()); // true 출력.
```

<br/>

## toCharArray()

> 해당 문자열을 char형 배열로 반환한다.

**char[] toCharArray()**

```java
String str = "apple";
char[] arr = str.toCharArray();
for(int i=0; i<arr.length; i++) {
    System.out.print(arr[i]+" "); 
}
// 'a' 'p' 'p' 'l' 'e' 출력
```

<br/>

