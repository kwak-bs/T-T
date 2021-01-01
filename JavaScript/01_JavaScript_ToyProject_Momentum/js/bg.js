const body = document.querySelector("body");
const locationContainer = document.querySelector(".js-location span");

function paintImage() {
  const image = new Image();
  // 가입없이 밑에 이것만 주면 무료로 랜덤 사진 API 사용가능
  image.src = "https://source.unsplash.com/featured/?landscape,travel";
  image.classList.add("bgImage"); //css에서 가져옴
  body.appendChild(image);
}

function init() {
  paintImage();
}

init();
