const UNSPLASH_API_KEY =
  "b491e86a6957b396f44f1e15e41d3d242e17aa982607f161b95defd195c7f4dd";
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body");
const locationContainer = document.querySelector(".js-location span");

function loadBackground() {
  const savedImage = localStorage.getItem("bg");

  if (savedImage === null) {
    getBackground();
  } else {
    const parsedImage = JSON.parse(savedImage);
    const today = new Date();

    // 파싱된 이미지에는 다음날이 저장되어 있는데,
    // 그 날보다 현재 날짜가 크면 이미지를 새로 받아옴
    const today1 = today.getDate();
    console.log(today1);
    console.log(parsedImage.expiresOn);
    if (today > parsedImage.expiresOn) {
      console.log("나 들어옴");
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${parsedImage.url})`;
      // 이미지 이름, 도시, 나라순으로 보여줌
      locationContainer.innerHTML = `${parsedImage.name},${parsedImage.city}, ${parsedImage.country}`;
    }
  }
  return;
}

// API 통해 배경 다운받아오기
function getBackground() {
  //fetch는 option에 아무것도 넘기지 않으면 get메서드로 진행된다.
  fetch(UNSPLASH_URL)
    //응답을 json 형태로 파싱.
    .then((response) => response.json())
    .then((json) => {
      const image = json;
      if (image.urls && image.urls.full && image.location) {
        const fullUrl = image.urls.full;
        const location = image.location;
        const city = location.city;
        const country = location.country;
        const name = location.name;
        saveBackground(fullUrl, city, country, name);
      } else {
        getBackground();
      }
    });
  return;
}

function saveBackground(imageUrl, city, country, name) {
  const savedImage = localStorage.getItem("bg");

  if (savedImage !== null) {
    localStorage.removeItem("bg");
  }

  // 하루마다 배경사진 변경
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1); // 다음 날
  expirationDate1 = expirationDate.getDate();
  console.log(expirationDate1);
  const imageObj = {
    url: imageUrl,
    expiresOn: expirationDate,
    city,
    country,
    name,
  };

  localStorage.setItem("bg", JSON.stringify(imageObj));
  loadBackground();
  return;
}

function initApp() {
  loadBackground();
  return;
}

initApp();
