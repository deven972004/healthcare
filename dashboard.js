// Sample data for doctors
const doctors = {
    covid: [
      { name: 'Dr. John Doe', specialty: 'Respiratory Specialist' },
      { name: 'Dr. Jane Smith', specialty: 'Pulmonologist' },
    ],
    diabetes: [
      { name: 'Dr. Emily Johnson', specialty: 'Endocrinologist' },
      { name: 'Dr. Richard Lee', specialty: 'Diabetes Specialist' },
    ],
    heart: [
      { name: 'Dr. Michael Brown', specialty: 'Cardiologist' },
      { name: 'Dr. Sarah White', specialty: 'Heart Surgeon' },
    ],
    cancer: [
      { name: 'Dr. David Green', specialty: 'Oncologist' },
      { name: 'Dr. Laura Harris', specialty: 'Cancer Research Specialist' },
    ],
  };
  
  // Show doctors based on the selected disease
  function showDoctors() {
    const diseaseSelect = document.getElementById('disease-select');
    const selectedDisease = diseaseSelect.value;
    const doctorList = document.getElementById('doctor-list');
    const doctorSection = document.getElementById('doctor-suggestions');
    const precautionsSection = document.getElementById('precautions-section');
    const precautionsInfo = document.getElementById('precautions-info');
  
    // Clear previous doctor list
    doctorList.innerHTML = '';
  
    // Show doctors based on disease selected
    if (selectedDisease && doctors[selectedDisease]) {
      const doctorArray = doctors[selectedDisease];
      doctorArray.forEach(doctor => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${doctor.name}</span> - <i>${doctor.specialty}</i>
        `;
        doctorList.appendChild(listItem);
      });
  
      doctorSection.style.display = 'block';
      precautionsSection.classList.remove('hidden');
      precautionsInfo.textContent = getPrecautions(selectedDisease);
    } else {
      doctorSection.style.display = 'none';
      precautionsSection.classList.add('hidden');
    }
  }
  
  // Get health precautions for the selected disease
  function getPrecautions(disease) {
    const precautions = {
      covid: 'Wear a mask, maintain social distancing, and get vaccinated.',
      diabetes: 'Monitor blood sugar levels, maintain a healthy diet, and exercise regularly.',
      heart: 'Avoid smoking, limit alcohol consumption, and engage in heart-healthy activities.',
      cancer: 'Avoid tobacco, eat a balanced diet, and stay active.',
    };
  
    return precautions[disease] || 'No specific precautions available.';
  }
  
  // Navigate to appointment page
  function goToAppointmentPage() {
    // Check if a disease is selected before navigating
    const diseaseSelect = document.getElementById('disease-select');
    if (diseaseSelect.value) {
      window.location.href = 'book-appointment.html'; // Redirect to appointment page
    } else {
      alert('Please select a disease first.');
    }
  }
  
  // Logout function (for demonstration)
  function logout() {
    alert('Logged out!');
    // In a real app, you would handle session invalidation and redirect to login page.
    window.location.href = 'index.html';
  }
  