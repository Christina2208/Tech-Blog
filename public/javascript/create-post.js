// Function that handles submitting a new post form
async function newFormHandler(event) {
    event.preventDefault();

    // Get the values from the input fields for title and post content
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;

    // Send a POST request to create a new post using fetch
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
     // Display an alert with the error status
      alert(response.statusText);
    }
  }
// Attach the newFormHandler function to the submit event of the form with class '.new-post-form'
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);