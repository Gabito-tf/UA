
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
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('Contacto');

// Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getValue('name');
  var email = getValue('email');
  var message = getValue('message');

  // Save message
  saveMessage(name, email, message);

  alert('Mensaje enviado, muchas gracias.')

  // Clear form
  document.getElementById('form').reset();
}

// Function to get get form values
function getValue(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nombre: name,
    email: email,
    mensaje: message
  });
}
