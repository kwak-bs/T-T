const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser"; //LocalStorage
const SHOWING_CN = "showing"; // ClassName

function saveName(text) {
  localStorage.setItem(USER_LS, text); // key - value로 로컬 스토리지에 저장
}

function handleSubmit(event) {
  event.preventDefault(); // form 입력 시 새로고침 방지. 새로고침이 default 이벤트임
  const currentValue = input.value; // 입력값 저장
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); // css의 showing 클래스 불러옴
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // 유저가 있으면 form 삭제하고 <h4>태그 보여줌
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  // 로컬스토리지의 USER_LS 값 불러와서 저장
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    // 유저가 없는 경우
    askForName();
  } else {
    // 유저가 있는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
