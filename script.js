const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' }
  ];
  
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      localStorage.setItem('isLoggedIn', true);
      window.location.href = 'dashboard.html';
    } else {
      loginError.textContent = 'Invalid email or password. Please try again.';
    }
  });
  