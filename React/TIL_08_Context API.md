# Context API

> 전역적으로 사용할 데이터를 관리할 때 사용하는 기능.



## CreateContext 

> 초기화 역할. Context API를 사용할 때 필수적으로 선언해줘야한다. 
>
> Provider에서 사용할 Value의 기본값 형태와 같이 작성해주는 것이 좋다.

```react
const ColorContext = createContext({
  state: {
    color: "black",
    subcolor: "red",
  },

  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});
```



## Provider 

> **Value** 선언은 필수다. **Children** 인자로 Provider는 하위 컴포넌트들에게 객체 및 함수, 변수를 전달한다.

```react
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
```



## Consumer

> Provider가 제공한 객체들을 가져다 쓸 때 사용한다. 함수형에서는 UseContext() hook을 사용하는 것이 더 간결하다. 

```react
// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

//ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };
```



```react
const {state, actions } = useContext(ColorContext);
```

