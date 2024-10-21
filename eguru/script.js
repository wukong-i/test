// Back button functionality
function goBack() {
    window.history.back();
  }

  // Navigation function to prevent showing link on hover
function navigateTo(url) {
    window.location.href = url;
  }
  
  // Disable long press for mobile
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });
  

  