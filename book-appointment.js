// book-appointment.js

function bookAppointment() {
    const doctorSelect = document.getElementById('doctor-select');
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
  
    if (doctorSelect.value && appointmentDate && appointmentTime) {
      // Prepare the appointment details to be passed to the next page (if necessary)
      const appointmentDetails = {
        doctor: doctorSelect.value,
        date: appointmentDate,
        time: appointmentTime
      };
  
      // Save these details in localStorage (or use other methods like sessionStorage)
      localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));
  
      // Redirect to confirmation page
      window.location.href = 'appointment-confirmation.html';
    } else {
      alert('Please fill in all fields to book an appointment.');
    }
  }
  
  function logout() {
    alert('Logged out!');
    window.location.href = 'index.html';
  }
  