console.log("working");


const apikey = `efd2ad0dc952b1d7778330e67ee63769`;
// const city = "pune";


let currentdate = new Date();


async function fetchapidata(city) {

    try {
        const respond = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);


        const data = await respond.json();

        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        update(data);

    }


    catch (error) {

        console.log("error");
    }
}


// fetchapidata();

let Search = document.getElementById("Search");
let Temp = document.getElementById("Temprature");
let sky = document.getElementById("sky");
let Wind = document.getElementById("Wind");
let feelslike = document.getElementById("Feels-like");
let Humidity = document.getElementById("Humidity");
let pressure = document.getElementById("Pressure");
let maxtemp = document.getElementById("max-temp");
let mintemp = document.getElementById("min-temp");
let visibility = document.getElementById("Visibility");
let City = document.getElementById("city");
let date = document.getElementById("date");
let forecastcity = document.getElementById("forcast-city");


function update(data) {

    Wind.textContent = `${data.wind.speed} Km/h`;
    Temp.textContent = data.main.temp;
    sky.textContent = data.weather[0].description;
    pressure.textContent = data.main.pressure;
    maxtemp.textContent = data.main.temp_max;
    mintemp.textContent = data.main.temp_min;
    feelslike.textContent = data.main.humidity;
    visibility.textContent = `${data.visibility / 1000} km`;
    Humidity.textContent = `${data.main.humidity} %`;
    City.textContent = data.name;
    forecastcity.textContent = data.name;
    date.textContent = currentdate.toDateString();
    console.log(data.name);

}



// search box 

let form = document.getElementById("search-form");
let search = document.querySelector("Input");



form.addEventListener('submit', (e) => {
    e.preventDefault();

   const city = search.value;
   console.log(city);

   if(!city !== ""){

    fetchapidata(city);

    search.value = "";
   }

})

