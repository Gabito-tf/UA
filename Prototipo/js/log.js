
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB4cHhQG-vvCr2JmyastFL4tpYta_fgZw0",
  authDomain: "bdt-uya.firebaseapp.com",
  databaseURL: "https://bdt-uya.firebaseio.com",
  projectId: "bdt-uya",
  storageBucket: "bdt-uya.appspot.com",
  messagingSenderId: "925283153597",
  appId: "1:925283153597:web:e381bec44d055109b529d4",
  measurementId: "G-RZ8X17021Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Intentando registrar usuario...");

}

function signOut() {

  auth.signOut();
  alert("Has cerrado sesion");

}

function signIn() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Iniciando Sesion...");

}



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = "panel.html";
    alert("Vamos allá");
  } else {
    // No user is signed in.
  }
});
