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
  
  // Reference to your Firebase Firestore
  var firestore = firebase.firestore();
  
  // Reference to your Firebase Storage
  var storage = firebase.storage();
  
  // Function to handle form submission
  document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var about = document.getElementById("about").value;
    var profilePicture = document.getElementById("profile-picture").files[0];
  
    // Upload profile picture to Firestore Storage
    var storageRef = storage.ref('profilePictures/' + profilePicture.name);
    storageRef.put(profilePicture).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
      
      // Get the profile picture URL
      storageRef.getDownloadURL().then(function(url) {
        // Check if the 'about' document exists in the 'portfolio' collection
        firestore.collection("portfolio").doc("about").get().then(function(doc) {
          if (doc.exists) {
            // Update existing 'about' document with new data
            doc.ref.update({
              name: name,
              about: about,
              profilePicture: url
            }).then(function() {
              console.log("Document updated successfully!");
              alert("Profile information updated successfully!");
            }).catch(function(error) {
              console.error("Error updating document: ", error);
              alert("An error occurred. Please try again later.");
            });
          } else {
            // Create new 'about' document with the provided data
            firestore.collection("portfolio").doc("about").set({
              name: name,
              about: about,
              profilePicture: url
            }).then(function() {
              console.log("Document created successfully!");
              alert("Profile information added successfully!");
            }).catch(function(error) {
              console.error("Error creating document: ", error);
              alert("An error occurred. Please try again later.");
            });
          }
        }).catch(function(error) {
          console.error("Error getting document: ", error);
          alert("An error occurred. Please try again later.");
        });
      }).catch(function(error) {
        console.error("Error getting download URL: ", error);
        alert("An error occurred. Please try again later.");
      });
    }).catch(function(error) {
      console.error("Error uploading file: ", error);
      alert("An error occurred. Please try again later.");
    });
  });
  