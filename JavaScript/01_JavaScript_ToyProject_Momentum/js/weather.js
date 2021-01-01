const weather = document.querySelector(".js-weather");

//OpenWeather API 키 가져옴
const API_KEY = "b94dda977bd60bb0acb1bba7d9f2a81a";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

function getWeather(coordsObj) {
  // 데이터 가져오기
  fetch(
    `${WEATHER_API}lat=${coordsObj.latitude}&lon=${coordsObj.longitude}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json()) // 데이터가 우리한테 넘어 왔을때(데이터가 완전히 들어온 다음 호출), 화살표 함수
    .then(function (json) {
      // response.json()도 pending(대기) 완료 되면 json 불러옴.
      const temperature = json.main.temp; // 온도 저장
      const place = json.name; // 위치 저장
      weather.innerText = `${Math.floor(temperature)}° @ ${place}`; // span에 넣어주기
    });
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
  // 로컬스토리지에 저장
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coordsObj);
}

// 허용x시 처리
function handleGeoFailure() {
  console.log("Can't access geo location");
}

// 날씨 정보 불러오기. 없으면 권한 물어봄.
function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    // 현재 날씨 정보가 있으면 객체로 변환후 넘겨줌
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      // 권한 허용, 거부
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}

function init() {
  loadWeather();
}

init();
