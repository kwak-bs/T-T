const clockContainer = document.querySelector(".js-clock"); // html 파일 내 해당 div에 접근
const clockTitle = clockContainer.querySelector("h1"); // 해당 div 내 h1태그에 접근

function getTime() {
  const date = new Date(); // 시간 불러옴. 업데이트 된 시간을 매번 저장하는 것은 아님
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  // html에 시간 나타내줌 10 미만이면 앞에 0을 붙여준다.
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  //getTime();
  setInterval(getTime, 1000); // 1초마다 매번 업데이트 해줌. setInterval 덕분에 업데이트 된 시간을 가져올 수 있음.
}

init();
