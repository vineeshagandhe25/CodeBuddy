document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form data
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Check if user already exists
  if (localStorage.getItem(email)) {
    document.getElementById('signupMessage').textContent = 'User already exists. Please login.';
    return;
  }
  
  // Store user credentials in localStorage
  localStorage.setItem(email, password);
  
  // Display signup success message
  document.getElementById('signupMessage').textContent = 'Signup successful! Please login.';
});
