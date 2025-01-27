// Surprise Button
document.getElementById('surprise-btn').addEventListener('click', function () {
    const emergencySound = document.getElementById('emergency');
    emergencySound.play();
    showAlert("🎉 Saurav, the Impostor in studies, but the MVP in gaming! 🎮 Happy Birthday! 🎂");
  });
  
  // Dismissible Alert
  function showAlert(message) {
    const alert = document.getElementById('alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alert.style.display = 'flex';
  
    setTimeout(() => {
      alert.style.display = 'none';
    }, 5000);
  }
  
  document.getElementById('close-alert').addEventListener('click', function () {
    document.getElementById('alert').style.display = 'none';
  });
  
  // Background Sound Effects
  const gunshotSound = document.getElementById('gunshot');
  const blockBreakSound = document.getElementById('block-break');
  
  // Play gunshot sound on page load
  window.onload = function () {
    gunshotSound.play();
  };
  
  // Play block break sound on scroll
  window.onscroll = function () {
    blockBreakSound.play();
  };