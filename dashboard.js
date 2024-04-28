// Function to display user's email and score
function displayUserInfo() {
  const userEmail = localStorage.getItem('loggedInUser');
  if (userEmail) {
    document.getElementById('userEmail').textContent = 'Logged in as: ' + userEmail;
    const userScore = localStorage.getItem(userEmail + '_score');
    if (userScore) {
      document.getElementById('userScore').textContent = userScore;
    }
  }
}

// Function to log out user
function logout() {
  localStorage.removeItem('loggedInUser'); // Remove user from localStorage
  window.location.href = 'login.html'; // Redirect to login page
}

// Display user's information when the page loads
document.addEventListener('DOMContentLoaded', function() {
  displayUserInfo();
});
