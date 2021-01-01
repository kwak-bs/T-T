const nameContainer = document.querySelector(".js-name");

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `안녕하세요, ${name}님.`;
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault(); // form 입력 시 새로고침 방지. 새로고침이 default 이벤트임
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value; // 입력값 저장

  localStorage.setItem("username", value); // key - value 형태로 로컬 스토리지에 저장.
  paintName(value);
}

function paintInput() {
  // input , form 둘이 세트임

  const input = document.createElement("input");
  input.placeholder = "이름을 입력하세요.";
  input.type = "text";
  input.className = "name__input";

  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

// function askForName() {
//   form.classList.add(SHOWING_CN); // css의 showing 클래스 불러옴
//   form.addEventListener("submit", handleSubmit);
// }

// function paintGreeting(text) {
//   // 유저가 있으면 form 삭제하고 <h4>태그 보여줌
//   form.classList.remove(SHOWING_CN);
//   greeting.classList.add(SHOWING_CN);
//   greeting.innerText = `Hello ${text}`;
// }

function loadName() {
  // 로컬스토리지의 username 값 불러와서 저장
  const name = localStorage.getItem("username");

  if (name === null) {
    // 유저가 없는 경우
    paintInput();
  } else {
    // 유저가 있는 경우
    paintName(name);
  }
}

function init() {
  loadName();
}

init();
