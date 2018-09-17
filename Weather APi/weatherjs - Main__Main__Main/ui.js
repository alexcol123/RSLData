class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name} ${weather.sys.country}` ;

    this.desc.textContent = weather.weather[0].description;


    this.string.textContent = `${weather.main.temp}`;

    let logoUrl= `img/${weather.weather[0].icon}.png`
   

    this.icon.setAttribute('src',logoUrl );




    

    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;

    this.feelsLike.textContent = ` Max Temp: ${weather.main.temp_max}`;

    this.dewpoint.textContent = `Min Temp: ${weather.main.temp_min}`;


    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
  }
}













// class UI {
//   constructor() {
//     this.location = document.getElementById('w-location');
//     this.desc = document.getElementById('w-desc');
//     this.string = document.getElementById('w-string');
//     this.details = document.getElementById('w-details');
//     this.icon = document.getElementById('w-icon');
//     this.humidity = document.getElementById('w-humidity');
//     this.feelsLike = document.getElementById('w-feels-like');
//     this.dewpoint= document.getElementById('w-dewpoint');
//     this.wind = document.getElementById('w-wind');
//   }

//   paint(weather) {
//     this.location.textContent = weather.display_location.full;
//     this.desc.textContent = weather.weather;
//     this.string.textContent = weather.temperature_string;
//     this.icon.setAttribute('src', weather.icon_url);
//     this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
//     this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
//     this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
//     this.wind.textContent = `Wind: ${weather.wind_string}`;
//   }
// }
