// steps to follow 
// 1 do Html page 



//2 Add const data bellow
const data = [{
    name: 'Oasis Salon',
    typeOfBuss: 'hair salon',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Henrico  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?business'
  },
  {
    name: 'Dominica  Salon',
    typeOfBuss: 'hair salon',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?restaurant'
  },
  {
    name: 'Plaza Azteca',
    typeOfBuss: 'Restaurante',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?nature'
  },
  {
    name: 'Casa Grande',
    typeOfBuss: 'Restaurante',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?city'
  },
];






//  Step 4 
// place the iterator in a variable 
const profiles = profileIterator(data);



//  Step 5
// Next Event
document.getElementById('next').addEventListener('click', nextProfile);


//  Step 6
// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="mx-auto list-group text-center">
      
        <li class="list-group-item "> 
        <h1>${currentProfile.name}</h1>
        
        </li>

        <li class="list-group-item">   
        <span class="lead"> 
          Tipo De Negocio:
        </span>

          <span class=" lead pl-3"> 
            ${currentProfile.typeOfBuss}
          </span>
        </li>

        
        <li class="list-group-item">   
        <span class="lead"> 
          Telephono:
        </span>

        <span class=" lead pl-3"> 
 
         <a href="tel:${currentProfile.phone}">${currentProfile.phone}</a>
      </span>
        </li>





        <li class="list-group-item">   
        <span class="lead"> 
          Horario:
        </span>

        <span class=" lead pl-3"> 
         ${currentProfile.hours}
      </span>
        </li>


        <li class="list-group-item">   
        <span class="lead"> 
          Dirrecion:
        </span>

        <span class=" lead pl-3"> 
         ${currentProfile.location}
      </span>
        </li>


        <li class="list-group-item">   
        <span class="lead"> 
          <h4>
            Visita Pagina Web:
          </h4> 
        </span>

        <span> 
          <a href="${currentProfile.website}"  target="_blank" class="btn btn-danger btn-block ">${currentProfile.name}</a>
      </span>
        </li>






      </ul>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img  class="mx-auto img-fluid" src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}


//  Step 7
// DIsplay  1st profile automatically
nextProfile();






//  Step 3    Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  };
}