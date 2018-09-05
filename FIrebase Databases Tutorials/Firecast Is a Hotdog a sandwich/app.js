// Initialize Firebase


var config = {
  apiKey: "AIzaSyDQ4Hw8db75rTMQ4BlWzbxY17rGcwJWvZc",
  authDomain: "hotdog-firecast.firebaseapp.com",
  databaseURL: "https://hotdog-firecast.firebaseio.com",
  projectId: "hotdog-firecast",
  storageBucket: "",
  messagingSenderId: "827918685473"
};
firebase.initializeApp(config);


var firestore = firebase.firestore();


//const docRef = firestore.collection("samples").doc("sanwichData")
const docRef = firestore.doc("samples/sandwichData");

const outputHeader = document.querySelector('#hotDogOutput');
const inputTextField = document.querySelector('#latestHotDogStatus');
const saveButton = document.querySelector('#saveButton');
const loadButton = document.querySelector('#loadButton');




// to  send date to firestore database
saveButton.addEventListener('click', function () {
  const textToSave = inputTextField.value;
  console.log("i am going to save " + textToSave + " to Firestore")

  docRef.set({
    hotDoStatus: textToSave
  }).then(function () {
    console.log("status saved!");

  }).catch(function (error) {
    console.log("Got an error: ", error)
  })
});


// to fetch data from database only once  (Not  realtime)
loadButton.addEventListener('click', function () {


  docRef.get().then(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      outputHeader.innerText = "Hot dog status: " + myData.hotDoStatus
      //console.log(myData.hotDoStatus)
    }
  }).catch(function (error) {
    console.log("Got an error: ", error)
  })

});


// to fetch data Realtime automatically
getRealTimeUpdates = function(doc){
  docRef.onSnapshot(function(doc){
    if (doc && doc.exists) {
      const myData = doc.data();
      outputHeader.innerText = "Hot dog status: " + myData.hotDoStatus
      //console.log(myData.hotDoStatus)
    }
  });
}

getRealTimeUpdates();