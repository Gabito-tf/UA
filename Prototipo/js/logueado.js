
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

        // Connect application with firebase
        const auth = firebase.auth();
        firebase.auth().onAuthStateChanged(handleAuthState);
   
        function handleAuthState(user) {
          if (user) {
              document.getElementById('bienvenido').innerHTML = "<h6> Hola de nuevo "+user.email+"</h6>";
            return console.log('Hay sesion iniciada');
          }

          showLoginForm()
          return console.log('No hay iniciada sesion');
        }
