import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDGt-iza8HU8tyAJY2eMM_ZDLqtS62wUaE",
    authDomain: "formlogin-955cc.firebaseapp.com",
    projectId: "formlogin-955cc",
    storageBucket: "formlogin-955cc.appspot.com",
    messagingSenderId: "412861522195",
    appId: "1:412861522195:web:bc70099bd609e33ad47ae6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

document.getElementById('reg-btn').addEventListener('click',function(){
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
});
document.getElementById('log-btn').addEventListener('click',function(){
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";});


    document.getElementById('login-btn').addEventListener('click',function(){
      const  loginEmail=document.getElementById("login-email").value;
      const loginPassword=document.getElementById("login-password").value;

      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('login-div').style.display="none";
      document.getElementById('result').innerHTML="Welcome Back<br>"+loginEmail+"<br>Loggin Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('login-div').style.display="none";
      document.getElementById('result').innerHTML="Sorry!<br>"+errorMessage;
    });

  });
    document.getElementById('register-btn').addEventListener('click',function(){
      const  registerEmail=document.getElementById("register-email").value;
      const registerPassword=document.getElementById("register-password").value;

      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('register-div').style.display="none";
      document.getElementById('result').innerHTML="WELCOME<br>" +registerEmail+"<br>Registration Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('register-div').style.display="none";
      document.getElementById('result').innerHTML="Sorry!<br>"+errorMessage;
    });

    });

    document.getElementById('log-outbtn').addEventListener('click',function(){
      signOut(auth).then(() => {
        // Sign-out successful.
        document.getElementById('result-box').style.display="none";
      document.getElementById('login-div').style.display="inline";
      }).catch((error) => {
        document.getElementById('result').innerHTML="Sorry!<br>"+errorMessage;
      });

    });


 