// Function that handles the submission of a new post form
async function newFormHandler(event) {
    event.preventDefault();
  
    // Retrieving the values from the input fields for title and post content
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
  
    // Use the fetch API to send a POST request 
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
      alert(response.statusText);
    }
  }
  
  // Attaching the newFormHandler function to the submit event of the form with class '.new-post-form'
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);