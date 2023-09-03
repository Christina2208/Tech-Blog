// Function that handles form submission for user login.
async function loginFormHandler(event) {
    event.preventDefault();
  
    // Getting the values of the email and password input fields in the form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

// Adding an event listener to the form with the class 'login-form' for form submission
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);