function updateTime() {
  //london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    londonDateElement = londonElement.querySelector(".date");
    londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = moment().format("Do MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  //paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    parisDateElement = parisElement.querySelector(".date");
    parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = moment().format("Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  //new york

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    newYorkDateElement = newYorkElement.querySelector(".date");
    newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = moment().format("Do MMMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    sydneyDateElement = sydneyElement.querySelector(".date");
    sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = moment().format("Do MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
