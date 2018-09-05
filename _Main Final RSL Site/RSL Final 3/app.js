

const display = document.getElementById('profileDisplay');

const display1 = document.getElementById('profileDisplay1');

const display2 = document.getElementById('profileDisplay2');












var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('users/');
var rowIndex = 1;






// FUction to view Buss my Buss name ------------------------>

databaseRef.once('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();


    //console.log(childData.location)


    var results = '';

    function viewByBussName() {

      results += `
        <a href="https://www.google.com/" class="list-group-item list-group-item-action">${childData.business_name}</a>
      
      `;
      display.innerHTML += results;
    }

    viewByBussName()

  });
});



// FUction to view Buss my Type of buss ------------------------>

databaseRef.once('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();


    //console.log(childData.location)


    var results = '';

    function viewByBussType() {

      results += `
        <a href="https://www.google.com/" class="list-group-item list-group-item-action">${childData.typeOfBuss}</a>
      
      `;
      display1.innerHTML += results;
    }

    viewByBussType()

  });
});





// FUction to view Bussiness Profiles ------------------------>

databaseRef.once('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    var bussOutline = '';

   // console.log(childData.location)



    function viewByBussName() {



      bussOutline += `
      <ul class="mb-5 mt-5">
      <li class="list-group-item bg-danger text-white">
  
  
        <h2>${childData.business_name}</h2>
      </li>
  
      <li class="list-group-item">
  
        <span class="lead">
          Tipo De Negocio:
        </span>
  
        <span class=" lead pl-3 text-danger font-weight-bold">
          ${childData.typeOfBuss}
        </span>
      </li>
  
      <li class="list-group-item">
        <span class="lead">
          Telephone#:
        </span>
  
        <span class=" lead pl-3 text-success">
          ${childData.phone}
        </span>
      </li>
  
  
      <li class="list-group-item">
  
        <span class="lead">
          Horario:
        </span>
  
        <span class=" lead pl-3">
          ${childData.hours}
        </span>
      </li>
  
  
  
      <li class="list-group-item">
  
        <span class="lead">
          Locacion:
        </span>
  
        <span class=" lead pl-3">
          ${childData.location}
        </span>
      </li>
  
  
  
      <li class="list-group-item">
  
        <span class="lead">
          Pagina Web:
        </span>
  
        <span class=" lead pl-3">
          ${childData.website}
        </span>
      </li>






      <li class="list-group-item">   
      <span class="lead"> 
        <h4>
          Visita Pagina Web:
        </h4> 
      </span>

      <span> 
        <a href="${childData.website}"  target="_blank" class="btn btn-success btn-block ">${childData.business_name}</a>
    </span>
    
      </li>





  
  
      <li class="list-group-item bg-danger">
      

        <img  class="mx-auto img-fluid" src="https://source.unsplash.com/800x600/?city">
      

      </li>















  
    </ul>
      `;


      display2.innerHTML += bussOutline;

    }
    viewByBussName()


  });
});









// Fucntion Add user --------------------------------------------------->

function save_user() {


  var uid = firebase.database().ref().child('users').push().key;
  var user_name = document.getElementById('user_name').value;

  var bussName = document.getElementById('bussName').value;
  var phone = document.getElementById('phone').value;
  var typeOfBuss = document.getElementById('typeOfBuss').value;
  var hours = document.getElementById('hours').value;
  var location = document.getElementById('location').value;
  var website = document.getElementById('website').value;
  var image = document.getElementById('image').value;
  var ownerName = document.getElementById('ownerName').value;
  var ownerCell = document.getElementById('ownerCell').value;



  var data = {

    user_id: uid,
    user_name: user_name,

    business_name: bussName,
    phone: phone,
    typeOfBuss: typeOfBuss,
    hours: hours,
    location: location,
    website: website,
    image: image,
    ownerName: ownerName,
    ownerCell: ownerCell


  }

  var updates = {};
  updates['/users/' + uid] = data;
  firebase.database().ref().update(updates);

  alert('The user is created successfully!');
  reload_page();
}





// Fucntion Update user --------------------------------------------------->


function update_user() {
  var user_name = document.getElementById('user_name').value;
  var user_id = document.getElementById('user_id').value;



  var uid = firebase.database().ref().child('users').push().key;
  var user_name = document.getElementById('user_name').value;

  var bussName = document.getElementById('bussName').value;
  var phone = document.getElementById('phone').value;
  var typeOfBuss = document.getElementById('typeOfBuss').value;
  var hours = document.getElementById('hours').value;
  var location = document.getElementById('location').value;
  var website = document.getElementById('website').value;
  var image = document.getElementById('image').value;
  var ownerName = document.getElementById('ownerName').value;
  var ownerCell = document.getElementById('ownerCell').value;



  var data = {

    user_id: uid,
    user_name: user_name,

    business_name: bussName,
    phone: phone,
    typeOfBuss: typeOfBuss,
    hours: hours,
    location: location,
    website: website,
    image: image,
    ownerName: ownerName,
    ownerCell: ownerCell
  }



  var updates = {};
  updates['/users/' + user_id] = data;
  firebase.database().ref().update(updates);

  alert('The user is updated successfully!');

  reload_page();
}















// Fucntion Delete user --------------------------------------------------->
function delete_user() {
  var user_id = document.getElementById('user_id').value;

  firebase.database().ref().child('/users/' + user_id).remove();
  alert('The user is deleted successfully!');
  reload_page();
}



// Fucntion reload page  --------------------------------------------------->
function reload_page() {
  window.location.reload();
}








// FUction to view Buss by name in the page Addbuss.html  ------------------------>


databaseRef.once('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();


console.log(childData)
    //console.log(childData.user_name)
    //console.log(childKey) 


    var row = tblUsers.insertRow(rowIndex);
    var cellId = row.insertCell(0);
    var cellName = row.insertCell(1);
    cellId.appendChild(document.createTextNode(childKey));
    cellName.appendChild(document.createTextNode(childData.business_name));


    rowIndex = rowIndex + 1;
  });
});