// confirmation.js

window.onload = function() {
    // Retrieve the appointment details from localStorage
    const appointmentDetails = JSON.parse(localStorage.getItem('appointmentDetails'));
  
    // If appointment details exist, display them
    if (appointmentDetails) {
      document.getElementById('doctor-name').textContent = appointmentDetails.doctor;
      document.getElementById('appointment-date').textContent = appointmentDetails.date;
      document.getElementById('appointment-time').textContent = appointmentDetails.time;
    } else {
      // If no appointment details exist, show an error message
      alert('No appointment found!');
    }
  };
  
  function goBack() {
    window.location.href = 'dashboard.html'; // Redirect back to the dashboard
  }
  
  function logout() {
    alert('Logged out!');
    window.location.href = 'index.html';
  }
  