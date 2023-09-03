// Function that handles form submission for user signup
async function signupFormHandler(event) {
    event.preventDefault();
  
    // Get the values of the input fields in the signup form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      // Send a POST request to create a new user with the provided info
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  

      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}

// Adding an event listener to the form with the class 'signup-form' for form submission
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);