const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
  const now = new Date(); // 시간 불러옴. 업데이트 된 시간을 매번 저장하는 것은 아님
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const seconds = now.getSeconds();

  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  // html에 시간 나타내줌 10 미만이면 앞에 0을 붙여준다.
  clock.innerHTML = time;
  return;
}

function init() {
  //getTime();
  setInterval(getTime, 1000); // 1초마다 매번 업데이트 해줌. setInterval 덕분에 업데이트 된 시간을 가져올 수 있음.
  return;
}

init();
