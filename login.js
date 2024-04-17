// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5ZMgbSFo7_TkmkKCuW7eksqe2RvAVdFI",
    authDomain: "portfolio-64506.firebaseapp.com",
    projectId: "portfolio-64506",
    storageBucket: "portfolio-64506.appspot.com",
    messagingSenderId: "788465558076",
    appId: "1:788465558076:web:7eb1f5bea7538451b09939"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Function to handle login form submission
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Sign in user with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Redirect to admin page after successful login
        window.location.href = "admin.html";
      })
      .catch(function(error) {
        console.error("Error signing in: ", error);
        alert("Invalid email or password. Please try again.");
      });
  });
  