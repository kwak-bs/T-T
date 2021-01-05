const form = document.querySelector(".js-to-do");
const input = document.querySelector(".js-add-to-do");
const list = document.querySelector(".js-list");

let toDos = [];

function handleDelete(event) {
  //console.dir(event.target)에서 parentNode찾으면 부모 찾을수 있음.
  //console.dir(event.target);
  //console.log(event.target.parentNode);

  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;

  ul.removeChild(li); // 삭제

  toDos = toDos.filter(function (toDo) {
    //filter는 array의 모든 아이템을 통해 함수를 실행하고
    //true인 아이템들만 가지고 새로운 array를 만든다.
    return toDo.id !== parseInt(toDoId) + 1; //toDoId는 0부터 기준이다. 근데 toDo.id는 1부터 id를 잡기 때문에 +1 해줘야한다.
  });

  persistToDos();
}

let idNum = 0;

//투두 추가
function addToDo(text) {
  const toDo = document.createElement("li"); // li 생성
  toDo.className = "toDo";
  toDo.id = idNum;
  idNum++;

  const deleteBtn = document.createElement("span"); // span 태그 생성
  deleteBtn.innerHTML = "❌"; // 버튼에 이모지 넣어주기,  <meta charset="utf-8"/> 이거 해줘야 이모지 보임.
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete); // 버튼에 삭제 이벤트 추가.

  const label = document.createElement("label");
  label.innerHTML = text; // 인자로 받은 text 넣어주기

  toDo.appendChild(deleteBtn); // 삭제 버튼 추가
  toDo.appendChild(label);
  list.appendChild(toDo);
  saveToDo(text);
}

function saveToDo(text) {
  const toDoObject = {
    id: idNum, // length로 id를 줘버리면 todo를 삭제하고 추가시 id가 중복되는 현상발생함. 그래서 id값만 지정할 변수 생성.
    value: text,
  };
  toDos.push(toDoObject);
  persistToDos();
}

// 로컬 스토리지에 투두저장
function persistToDos() {
  // 자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려고 한다.
  // 그래서 우리 자바스크립트 object를 string으로 바꿔줘야한다.
  // JSON.stringfy();
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

// 제출함수
function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = ""; // 입력 후 다시 빈값
  addToDo(value);
}

//투두 불러오기
function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    //불러온게 string이라 또 객체로 변환해줘야함.
    //JSON.parse();
    const parsedToDos = JSON.parse(loadedToDos);

    //forEach는 array를 위한 함수
    // parsedTodos 각각에 대해서 실행해줄 함수
    parsedToDos.forEach(function (toDo) {
      // 로컬스토리지에 저장되어 있는 todo를 불러와서 보여줌
      addToDo(toDo.value);
    });
  }
  return;
}

//시작
function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

init();
