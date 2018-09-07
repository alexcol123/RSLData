// document.getElementById('button1').addEventListener('click', getProfiles)

function getProfiles() {
  fetch(
    'https://newsapi.org/v2/everything?' +
      'q=trump&' +
      'pageSize=40&' +
      //shows next page
      'page=1&' +
      //'sortBy=popularity&' +
      'apiKey=2825e39607da41d0b1eae8dcd44f6c7c'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let svrResults = data.articles;
      let UIres = document.getElementById('authors');

      let output = '';
      svrResults.forEach(person => {
        output += `


            <li>
            <img src=" ${person.urlToImage}" alt="images">
            
          
    
          <span>
            Published Date:  ${person.publishedAt} <br>
            News Title: ${person.title} <br>
            Source: ${person.source.name} <br>

          <a href=" ${person.url}">Read More...</a>

          </span>
          </li>











            `;
      });

      UIres.innerHTML = output;
    });
}

getProfiles();

// document.getElementById('button1').addEventListener('click', getProfiles);

// // Code to only get females
// //fetch('https://randomuser.me/api/?results=40&gender=female')

// function getProfiles() {
//   fetch('https://randomuser.me/api/?results=60')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);

//       let svrResults = data.results;
//       let UIres = document.getElementById('authors');

//       let output = '';
//       svrResults.forEach(person => {
//         if (person.dob.age < 45 || person.gender == 'female') {
//           output += `
//       <li>
//         <img src=" ${person.picture.large}" alt="women images">

//       <span>
//         Name: ${person.name.first}
//         ${person.name.last} <br>
//         Age:${person.dob.age}
//       </span>
//       </li>
//       `;
//         }
//       });

//       UIres.innerHTML = output;
//     });
// }
