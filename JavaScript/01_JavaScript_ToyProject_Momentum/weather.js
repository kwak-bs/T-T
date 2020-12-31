const weather = document.querySelector(".js-weather");

//OpenWeather API 키 가져옴
const API_KEY = "b94dda977bd60bb0acb1bba7d9f2a81a";
const COORDS = "coords";

function getWeather(lat, lon) {
  // 데이터 가져오기
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      // 데이터가 우리한테 넘어 왔을때(데이터가 완전히 들어온 다음 호출)
      return response.json();
    })
    .then(function (json) {
      // response.json()도 pending(대기) 완료 되면 json 불러옴.
      const temperature = json.main.temp; // 온도 저장
      const place = json.name; // 위치 저장
      weather.innerText = `${temperature} @ ${place}`; // span에 넣어주기
    });
}

// 로컬스토리지에 저장
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 허용시 위도, 경도 저장
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude: latitude, longitude : longitude
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

// 허용x시 에러 처리
function handleGeoError() {
  console.log("Can't access geo location");
}

// 허용하냐고 물어봄
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// 날씨 정보 불러오기. 없으면 권한 물어봄.
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
