###  require_once 

> 다른 php 파일에 있는 클래스 파일 읽어오기
>
> require_once는 클래스로 만들어 놓은 파일을 읽어서 사용한다.



- **include_once**와 **require_once**의 차이

  - `_once` : 같은 파일을 반복적으로 읽지 않게 한다. 
  - `include_once` : 오류가 났을 때, **경고만 하고 처리는 계속한다.**   
  - `require_once` : 오류가 났을 때, **처리를 중단한다.**




### Code

location.php 

```php
Class TestClass {
    public $name;
    public $dong;
    
    function __construct ($name, $dong) {
        $this -> name = $name;
        $this -> dong = $dong;
    }
    
    public function location() {
        print_r("{$this -> name}는 {$this -> dong}에 살고 있습니다.");
    }
}
```



main.php

```php
// location.php 파일에 있는 클래스 파일을 호출
require_once("location.pnp");

$testUser1 = new Testclass("유저1", "101동");
$testUser1 = location();

print_r("<br><br>");

$testUser2 = new Testclass("유저2", "102동");
$testUser2 -> location();

/*
출력. 

유저1는 101동에 살고 있습니다. 
유저2는 102동에 살고 있습니다. 
*/
```

> location.php라는 파일 위치에 Testclass를 선언해 두었다. 
>
> require_once라는 키워드를 통해 해당 파일을 읽고, main.php 에서 해당 클래스를 가지고 인스턴스를 생성하면 된다. 
>
> require_once는 불러오는 php에 오류가 있을 때, **처리 되지 않는다는 점** 주의하여야 한다. 
