

const display = document.getElementById('profileDisplay');

const display1 = document.getElementById('profileDisplay1');

const display2 = document.getElementById('profileDisplay2');












var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('users/');
var rowIndex = 1;















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