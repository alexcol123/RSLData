// Weather APi Key 9981516df868eb5712cd797e86846cca

// sample api call  http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9981516df868eb5712cd797e86846cca

// Sample req for london weather  http://api.openweathermap.org/data/2.5/weather?q=London,uk?id=524901&APPID=9981516df868eb5712cd797e86846cca

// 3 Day weather for  23060  Id = zipcode
// http://api.openweathermap.org/data/2.5/forecast?zip=23060,us&units=imperial&APPID=9981516df868eb5712cd797e86846cca

//Note   adding &units=imperial turn temp to faranheight

document.getElementById('button1').addEventListener('click', getProfiles);

function getProfiles() {
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=London,uk?&units=imperial&id=524901&APPID=9981516df868eb5712cd797e86846cca'
  )
    .then(res => res.json())
    .then(data => {
      //console.log(data.main.temp);
      console.log(data);

      // let svrResults = data.main;
      let UIres = document.getElementById('authors');

      let imgCode = parseInt(data.weather[0].icon);
      console.log(imgCode);

      let output = '';

      output += `





      <div class="row">


        <div class="col-4 mx-auto">

          <h4 class="text-center bg-light p-2"> <i class="fas fa-map-marker-alt"></i> 
           ${data.name}'s Weather 
          </h4>


          <div class="card  bg-primary">
            <img class="card-img-top" src="img/RVA.jpg" alt="Card image cap">

            <div class="card-body">
              <ul class="list-group">


              <li class="list-group-item"> Description : ${
                data.weather[0].description
              }</li>

              <li class="list-group-item"> Description : ${
                data.weather[0].main
              }</li>

              <li class="list-group-item"> Icon : ${data.weather[0].icon}</li>


               <li class="list-group-item">  Icon View: 
               <img src="img/0${imgCode}d.png" alt="">
               </li>
              
                <li class="list-group-item"> Temperature Now : ${
                  data.main.temp
                }</li>

                <li class="list-group-item"> Temperatura ahora : ${
                  data.main.pressure
                }</li>


                <li class="list-group-item"> Humedad : ${
                  data.main.humidity
                }</li>


                <li class="list-group-item"> Temperatura Minima : ${
                  data.main.temp_min
                }</li>

       
                <li class="list-group-item"> Temperatura Maxima : ${
                  data.main.temp_max
                }</li>

                <li class="list-group-item"> Vientos : ${data.wind.speed}</li>
              </ul>
            </div>
          </div>
  

        </div>


      </div>


`;

      UIres.innerHTML = output;
    });
}
