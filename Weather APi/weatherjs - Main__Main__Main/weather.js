class Weather {
  constructor(city, state) {
    this.apiKey = '9981516df868eb5712cd797e86846cca';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.state
      }&units=imperial&APPID=${this.apiKey}`
    );

    //    'http://api.openweathermap.org/data/2.5/weather?q=London,uk?&units=imperial&id=524901&APPID=9981516df868eb5712cd797e86846cca'
    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}




// class Weather {
//   constructor(city, state) {
//     this.apiKey = '99dfe35fcb7de1ee';
//     this.city = city;
//     this.state = state;
//   }

//   // Fetch weather from API
//   async getWeather() {
//     const response = await fetch(
//       `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${
//         this.state
//       }/${this.city}.json`
//     );

//     const responseData = await response.json();

//     return responseData.current_observation;
//   }

//   // Change weather location
//   changeLocation(city, state) {
//     this.city = city;
//     this.state = state;
//   }
// }
