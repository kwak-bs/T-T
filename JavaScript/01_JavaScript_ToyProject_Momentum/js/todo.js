const toDoForm = document.querySelector(".js-todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

let toDos = [];

function filterFn(toDo) {
  //filter는 array의 모든 아이템을 통해 함수를 실행하고
  //true인 아이템들만 가지고 새로운 array를 만든다.
  return toDo.id === 1;
}

function deleteTodo(event) {
  //console.dir(event.target)에서 parentNode찾으면 부모 찾을수 있음.
  //console.dir(event.target);
  //console.log(event.target.parentNode);

  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); // 삭제

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

// 로컬 스토리지에 투두저장
function saveToDos() {
  //자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려고 한다.
  // 그래서 우리 자바스크립트 object를 string으로 바꿔줘야한다.
  // JSON.stringfy();
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

let idNum = 1;

// 투두 보여주기
function paintToDo(text) {
  const li = document.createElement("li"); // li 생성
  const delBtn = document.createElement("button"); // 버튼 생성
  const span = document.createElement("span"); // span 태그 생성
  const newId = idNum;
  idNum++;

  delBtn.innerText = "❌"; // 버튼에 이모지 넣어주기,  <meta charset="utf-8"/> 이거 해줘야 이모지 보임.
  delBtn.addEventListener("click", deleteTodo); // 버튼에 삭제 이벤트 추가.

  span.innerText = text; // span 태그에 인자로 받은 text 넣어주기

  li.appendChild(delBtn); // li에 삭제 버튼 추가
  li.appendChild(span); // li에 span 태그 추가
  li.id = newId; // li에도 id 부여하기, 나중에 지울때 편리하기 위해

  toDoList.appendChild(li); // ul 태그에 하위(li) 추가.

  const toDoObj = {
    text: text,
    id: newId, // length로 id를 줘버리면 todo를 삭제하고 추가시 id가 중복되는 현상발생함. 그래서 id값만 지정할 변수 생성.
  };

  toDos.push(toDoObj);
  saveToDos();
}

// 제출함수
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // 입력 후 다시 빈값
}

//투두 불러오기
function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    //불러온게 string이라 또 객체로 변환해줘야함.
    //JSON.parse();
    const parsedTodos = JSON.parse(loadedtoDos);

    //forEach는 array를 위한 함수
    // parsedTodos 각각에 대해서 실행해줄 함수
    parsedTodos.forEach(function (toDo) {
      // 로컬스토리지에 저장되어 있는 todo를 불러와서 보여줌
      paintToDo(toDo.text);
    });
  }
}

//시작
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
