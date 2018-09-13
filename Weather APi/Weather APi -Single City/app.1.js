document.getElementById('button1').addEventListener('click', getProfiles);

// Code to only get females
//fetch('https://randomuser.me/api/?results=40&gender=female')

function getProfiles() {
  fetch('https://randomuser.me/api/?results=60')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let svrResults = data.results;
      let UIres = document.getElementById('authors');

      let output = '';
      svrResults.forEach(person => {
        if (person.dob.age < 45 || person.gender == 'female') {
          output += `
      <li>
      <img src=" ${person.picture.large}" alt="women images">
   
      <span> 
      Name: ${person.name.first} 
      ${person.name.last} <br>
      Age:${person.dob.age} 
      </span>
      </li>
      `;
        }
      });

      UIres.innerHTML = output;
    });
}
