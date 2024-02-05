var firebaseConfig = {
    apiKey: "AIzaSyCj-GNtscvuopP-998XlRE4a40uj7WdOl0",
  authDomain: "let-s-chat-web-app-2166a.firebaseapp.com",
  projectId: "let-s-chat-web-app-2166a",
  storageBucket: "let-s-chat-web-app-2166a.appspot.com",
  messagingSenderId: "476845639300",
  appId: "1:476845639300:web:9c91f0e7a5c26aed2124d1",
  measurementId: "G-QY4ECVLVH8"
};

firebase.intializeApp(firebaseConfig);

function addRoom(){
  document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class ='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("ouput").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}