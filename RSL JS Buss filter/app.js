//2 Add const data bellow
const data = [{
    name: 'Oasis Salon',
    typeOfBuss: 'salon',
    phone: '804-895-9958',
    hours: 'Mon-Sun:  8am - 10pm',
    location: 'Henrico  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?business'
  },
  {
    name: 'Dominica  Salon',
    typeOfBuss: 'salon',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?restaurant'
  },
  {
    name: 'Plaza Azteca',
    typeOfBuss: 'restaurante',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?nature'
  },
  {
    name: 'Casa Grande',
    typeOfBuss: 'restaurante',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?city'
  },
  {
    name: 'Joyerias Pepe',
    typeOfBuss: 'Joyeriaa',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?nature'
  },
  {
    name: 'LLantera Express',
    typeOfBuss: 'llantera',
    phone: '804-895-9958',
    hours: 'Mon-friday:  8am - 10pm',
    weekendHrs: 'Sat-Sun:  9am - 7pm',
    location: 'Chesterfield  Va',
    website: 'https://www.google.com/',
    image: 'https://source.unsplash.com/800x600/?city'
  }
];



const display = document.getElementById('profileDisplay');


const display1 = document.getElementById('profileDisplay1');



const display2 = document.getElementById('profileDisplay2');





// Important ============================================================================>
// Filter by Bussiness type and show on UI


var myFiltertypeOfBuss = data.filter(function (store) {
  return store.typeOfBuss === 'salon'

  // || product.type === "fruit"
  // && product.quantity > 0
  // && product.price < 10
});

myFiltertypeOfBuss.forEach((store) => {
  // console.log(store.name)
})

// Display Business my name 

results = "";
data.forEach((store) => {
  //console.log(store.name)
  results += ` 
    
      <li>
      ${store.typeOfBuss}
      </li>
    
    `
  display.innerHTML = results;
})






// Important ============================================================================>
// funciton to show buss by name and show on UI
function businessesName(data) {

  let tempRes = [];

  data.forEach(result => {

    tempRes.push(result.name)

    return tempRes.sort();
  });


  tempRes.forEach(function (element) {
    display1.innerHTML += `${element} <br>`
    return display1;
  });


}

businessesName(data)



// Important ============================================================================>
// hacer que aparenscan los profiles  and show on UI

function businesses(bussinesses) {

  let bussOutline = '';

  bussinesses.forEach((buss) => {
    bussOutline += `
    <ul class="mb-5 mt-5" >
      <li class="list-group-item bg-danger text-white"> 

      <h2>${buss.name}</h2>
      </li>

      <li class="list-group-item"> 

      <span class="lead"> 
        Tipo De Negocio:
      </span>

      <span class=" lead pl-3"> 
          ${buss.typeOfBuss}
      </span>
    </li>

    <li class="list-group-item"> 

    <span class="lead"> 
      Tipo De Negocio:
    </span>

    <span class=" lead pl-3"> 
        ${buss.phone}
    </span>
  </li>

  <li class="list-group-item"> 

  <span class="lead"> 
    Tipo De Negocio:
  </span>

  <span class=" lead pl-3"> 
      ${buss.hours}
  </span>
</li>

<li class="list-group-item"> 

<span class="lead"> 
  Tipo De Negocio:
</span>

<span class=" lead pl-3"> 
    ${buss.location}
</span>
</li>

<li class="list-group-item"> 

<span class="lead"> 
  Tipo De Negocio:
</span>

<span class=" lead pl-3"> 
    ${buss.website}
</span>
</li>


<li class="list-group-item bg-danger"> 

   
    <img  class="img-fluid" src="${buss.image}"  alt="">

</li>
      

    </ul>`


    display2.innerHTML = bussOutline;
  });






}




businesses(data)













