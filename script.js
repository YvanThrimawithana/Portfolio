
$(document).ready(function(){
    $("#nav-ul a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });


// Function to simulate typing effect
function typeWriter(element, text, i) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(element, text, i);
      }, 50); // Adjust typing speed (milliseconds)
    }
  }
  
  // When the page loads
  document.addEventListener("DOMContentLoaded", function() {
    var profileName = document.getElementById("profile-name");
    var text = profileName.innerHTML; // Get the text content of the h1 tag
    profileName.innerHTML = ""; // Clear the text content of the h1 tag
    typeWriter(profileName, text, 0);
  });
    function updateProgress(skill, progress) {
      document.getElementById(skill + 'Progress').style.width = progress + '%';
    }

    // Example: Update progress bars dynamically
    updateProgress('cSharp', 80);
    updateProgress('jsp', 70);
    updateProgress('servlet', 75);
    updateProgress('flutter', 60);
    updateProgress('firebase', 65);



// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5ZMgbSFo7_TkmkKCuW7eksqe2RvAVdFI",
  authDomain: "portfolio-64506.firebaseapp.com",
  projectId: "portfolio-64506",
  storageBucket: "portfolio-64506.appspot.com",
  messagingSenderId: "788465558076",
  appId: "1:788465558076:web:7eb1f5bea7538451b09939"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now you can use Firebase services, e.g., database
var firestore = firebase.firestore();
// Function to retrieve data from Firebase and update HTML elements
function updateProfileFromFirebase() {
  var profileDocRef = firestore.collection('portfolio').doc('about');

  profileDocRef.get().then(function(doc) {
    if (doc.exists) {
      var profileData = doc.data();

      // Update the profile name
      

      // Update the "About Me" content
      document.getElementById('about-me').textContent = profileData.about;

      // Update the profile picture URL
      document.getElementById('profile-picture').src = profileData.profilePicture;

      // Call the typeWriter function after updating the profile name
      typeWriter(document.getElementById('profile-name'), profileData.name, 0);
    } else {
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}

// Call the function to update the profile from Firebase
updateProfileFromFirebase();
