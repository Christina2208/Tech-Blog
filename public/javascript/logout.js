// Function that handles user logout
async function logout() {
    // Sends a POST request to the '/api/users/logout' endpoint so the user can log out
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  // Adding an event listener to the element with the id 'logout' for click events to trigger the logout function
  document.querySelector('#logout').addEventListener('click', logout);