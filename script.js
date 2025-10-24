// Register user
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    password: document.getElementById('password').value,
    role: "admin" // static admin role
  };
  localStorage.setItem('user', JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "login.html";
});

// Login user
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login Successful!");
    localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
});
