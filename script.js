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
      }, 120); // Adjust typing speed (milliseconds)
    }
  }
  
  // When the page loads
  document.addEventListener("DOMContentLoaded", function() {
    var profileName = document.getElementById("profile-name");
    var text = profileName.innerHTML; // Get the text content of the h1 tag
    profileName.innerHTML = ""; // Clear the text content of the h1 tag
    typeWriter(profileName, text, 0);
  });
    