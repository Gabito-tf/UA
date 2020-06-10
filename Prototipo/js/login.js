
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

// Connect application with firebase
const auth = firebase.auth();
firebase.auth().onAuthStateChanged(handleAuthState);
const form = document.forms['loginForm'];
form.addEventListener('submit', handleFormSubmit);


// Application defs
function handleAuthState(user) {
  if (user) {
    showPrivateInfo()
    return console.log('Hay sesion iniciada');
  }

  showLoginForm()
  return console.log('No hay iniciada sesion');
}

function handleFormSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const isLoginOrSignup = form['isLoginOrSignup'].value;

  if (isLoginOrSignup === 'isLogin') {
    return loginUser({ email, password });
  }

  return createUser({ email, password });
}


// Application Utils
function showPrivateInfo(user) {
  const loginForm = document.getElementById('login');
  loginForm.style.display = 'none';

  const hiddenPrivateInfo = document.getElementById('hiddenPrivateInfo');
  hiddenPrivateInfo.style.display = 'block';
  hiddenPrivateInfo.innerHTML = `
           <h3> Disculpa las molestias, esta página todavía esta en desarrollo, pero pronto podrás compartir coche</h3>
            <button id="btnLogout" class="btn-large deep-purple">Desconectarse</button>
          `;

  const btnLogout = document.getElementById('btnLogout');
  btnLogout.addEventListener('click', signoutUser);
}


function showLoginForm() {
  const loginForm = document.getElementById('login');
  loginForm.style.display = 'block';

  const hiddenPrivateInfo = document.getElementById('hiddenPrivateInfo');
  hiddenPrivateInfo.style.display = 'none';
}


// Firebase defs
function createUser({ email, password }) {
  console.log('Creating user ' + email);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Usuario creado.');
    })
    .catch(function (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Ya existe el usuario');
        const soLogin = confirm(
          `Usuario ya registrado.
                  ¿Quieres iniciar sesión?`
        );
        return !!soLogin ? loginUser({ email, password }) : alertTryAgain(error);;
      }

      return alertTryAgain(error);
    });
}

function loginUser({ email, password }) {
  console.log('Loging user ' + email);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Bienvenido.');
    })
    .catch(function (error) {
      console.log(error);
      alertTryAgain(error);
    });
}

function signoutUser() {
  firebase.auth().signOut();
}


// General Utils
function alertTryAgain(error) {
  console.log(error);
  return alert('No se ha podido iniciar sesión.');
}

