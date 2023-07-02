// Login form submit event
const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  
  // Perform form validation
  if (!email || !password) {
    alert('Please fill in all the fields');
    return;
  }
  
  // Replace the code below with your own logic
  // You can perform AJAX request or form submission here
  
  // Display success message
  alert('Login successful!');
  
  // Reset the form
  loginForm.reset();
});

// Registration form submit event
const registrationForm = document.querySelector('#registration form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  const company = document.querySelector('#company').value;
  const email = document.querySelector('#registration-email').value;
  const password = document.querySelector('#registration-password').value;
  
  // Perform form validation
  if (!company || !email || !password) {
    alert('Please fill in all the fields');
    return;
  }
  
  // Replace the code below with your own logic
  // You can perform AJAX request or form submission here
  
  // Display success message
  alert('Registration successful!');
  
  // Reset the form
  registrationForm.reset();
});
