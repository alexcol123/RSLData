// Weather APi Key 9981516df868eb5712cd797e86846cca

// sample api call  http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9981516df868eb5712cd797e86846cca

// Sample req for london weather  http://api.openweathermap.org/data/2.5/weather?q=London,uk?id=524901&APPID=9981516df868eb5712cd797e86846cca

// 3 Day weather for  23060  Id = zipcode
// http://api.openweathermap.org/data/2.5/forecast?zip=23060,us&units=imperial&APPID=9981516df868eb5712cd797e86846cca

//Note   adding &units=imperia turn temp to faranheight

document.getElementById('button1').addEventListener('click', getProfiles);

function getProfiles() {
  fetch(
    'http://api.openweathermap.org/data/2.5/forecast?zip=90210,us&units=imperial&APPID=9981516df868eb5712cd797e86846cca'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let UIres = document.getElementById('authors');
      let results = data.list;
      let output = '';
      let tableBody = document.getElementById('tableBody');
      let ciudad = document.getElementById('ciudad');


      // <li class="list-group-item">  Icon View:
      // <img src="img/0${imgCode}d.png" alt="">
      // </li>

      results.forEach(day => {
        // console.log(day);

        let imgCode = parseInt(day.weather[0].icon);
        console.log(imgCode);

        let city = data.city.name;


        ciudad.innerHTML = city;

        output += `

            <tr>

            
              <th scope="row">${day.dt_txt}</th>


         
              <td>  ${city}</td>

              <td>   <img src="img/${imgCode}d.png" alt=""> </td>

             

              <td>  ${day.main.temp}</td>
              <td>  ${day.main.temp_max}</td>
              <td> ${day.main.temp_min}</td>
            </tr>

            `;
      });

      tableBody.innerHTML = output;
    });
}
