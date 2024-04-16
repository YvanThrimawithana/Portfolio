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

  document.addEventListener("DOMContentLoaded", function() {
    // Get all progress bars
    const progressBars = document.querySelectorAll(".progress-bar");
  
    // Loop through each progress bar
    progressBars.forEach(function(progressBar) {
      // Get the progress percentage from data-percent attribute
      const percent = parseInt(progressBar.dataset.percent);
  
      // Get the progress element inside the progress bar
      const progress = progressBar.querySelector(".progress");
  
      // Set the width of the progress element based on the percentage
      progress.style.width = percent + "%";
    });
  });
  