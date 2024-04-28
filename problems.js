let editor; // Global variable to store the CodeMirror instance

// Function to initialize the code editor
function initCodeEditor() {
  editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    lineNumbers: true,
    mode: 'javascript'
  });
}

// Function to solve the problem
// Function to solve the problem
function solveProblem() {
  const code = editor.getValue(); // Get code from the editor
  
  // Simulate code execution
  const successfulExecution = true; // Change this to true if the execution is successful
  
  // Display result based on code execution
  if (successfulExecution) {
    document.getElementById('result').textContent = 'Execution successful!';
    incrementScore(10); // Increment score by 10 points
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    document.getElementById('result').textContent = 'Execution failed. Please try again.';
  }
}


// Function to increment user's score
function incrementScore(points) {
  const userEmail = localStorage.getItem('loggedInUser');
  if (userEmail) {
    let userScore = localStorage.getItem(userEmail + '_score');
    userScore = userScore ? parseInt(userScore) + points : points; // Increment score or set to points if it doesn't exist
    localStorage.setItem(userEmail + '_score', userScore); // Update score in localStorage
  }
}

// Initialize the code editor when the page loads
document.addEventListener('DOMContentLoaded', function() {
  initCodeEditor();
});
