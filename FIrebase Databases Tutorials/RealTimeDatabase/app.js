// Initialize Firebase
(function () {

  var config = {
    apiKey: "AIzaSyBS2MPUg4uxgHj0wlQ4vufSSfti5_kjGo0",
    authDomain: "realtimedatabase-b01c0.firebaseapp.com",
    databaseURL: "https://realtimedatabase-b01c0.firebaseio.com",
    projectId: "realtimedatabase-b01c0",
    storageBucket: "realtimedatabase-b01c0.appspot.com",
    messagingSenderId: "67104563848"
  };
  firebase.initializeApp(config);

  // Get  Elements 
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');

  // create a  database ref
  // ref to whole database 
  const dbRefObject = firebase.database().ref().child('object');
  // ref to  only a section of database
  const dbRefList = dbRefObject.child('hobbies');

  // Sync object changes  (this updates full database)
  dbRefObject.on('value', snap => {
    // console.log(snap.val())
    //preObject.innerText = JSON.stringify(snap.val(), null, 3)
    preObject.innerText = JSON.stringify(snap.val(), null, 3)
  })



  // Sync part of an object when something is ADDED only (this updates a part of a database)
  dbRefList.on('child_added', snap => {
    //console.log(snap.val())

   const li = document.createElement('li');
   
   li.innerText = snap.val();
   li.id= snap.key;
   ulList.appendChild(li);
  });


  // Sync part of an object when something is UPDATED only (this updates a part of a database)
dbRefList.on('child_changed', snap =>{
  const liChanged = document.getElementById(snap.key);
  liChanged.innerText = snap.val();
});


  // Sync part of an object when something is REMOVED only (this updates a part of a database)
  dbRefList.on('child_removed', snap =>{
    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
  });
  


}());