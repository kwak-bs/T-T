const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITAIL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

// canvas자체에도 사이즈를 또 줘야함. css에서만 주는 것이 아닌.
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 700); // 하얀색 배경 초기화
ctx.strokeStyle = INITAIL_COLOR; // 검정색 stroke만 초기화
ctx.fillStyle = INITAIL_COLOR; // 마찬가지로 배경도 색만 초기화 적용은 ㄴㄴ.
ctx.lineWidth = 2.5;

let painting = false;
let modeToggle = false;

// 그리기 시작
function startPainting() {
  painting = true;
}

// 그리기 멈춤
function stopPainting() {
  painting = false;
}

// 마우스가 움직임
function onMouseMove(event) {
  //console.log(event);
  // canvas내의 좌표만 알고 싶으면 offset
  // 전체 기준으로 좌표를 알고싶으면 client

  const x = event.offsetX;
  const y = event.offsetY;

  // 그리는 도중 아닐 때
  if (!painting) {
    // 움직이는 Path경로 다 저장
    ctx.beginPath();
    ctx.moveTo(x, y); // 마우스 클릭 직전까지 점의 위치 저장.
  } else {
    // 본인 위치에서 점을 생성한것이 계속 이어저서 선처럼 보이는것.
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function changeColor(event) {
  //console.log(event.target.style.backgroundColor);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function changeSize(event) {
  console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handlemode(event) {
  if (!modeToggle) {
    // fill 일때
    modeToggle = true;
    mode.innerHTML = "paint";
  } else {
    // paint 일때
    modeToggle = false;
    mode.innerHTML = "fill";
  }
}

// 캔버스 클릭시 채우기 효과 적용
function handleCanvasClick(event) {
  if (modeToggle) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault(); // 우클릭 방지
}

function handleSave() {
  const image = canvas.toDataURL("image/png"); // image 주소 가져옴
  //console.log(image);

  const link = document.createElement("a");
  link.href = image; // ex) canvas.toDataURL. image의 다운로드 링크를 가져옴
  link.download = "PaintJs[EXPORT]"; // ex) "mypainting.png" , 이미지의 이름을 가져옴
  //console.log(link);

  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseenter", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM); // 이미지 저장 이벤트. 마우스 우측 버튼
}

// colors div를 배열로 바꾸고 반복문 돎. 클릭시 이벤트
Array.from(colors).forEach((color) =>
  color.addEventListener("click", changeColor)
);

if (range) {
  range.addEventListener("input", changeSize);
}

if (mode) {
  mode.addEventListener("click", handlemode);
}

if (save) {
  save.addEventListener("click", handleSave);
}
