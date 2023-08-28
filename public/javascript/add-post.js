// Function that handles submitting a new form
async function newFormHandler(event) {
    // Prevents default submission behavior
    event.preventDefault();
  
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
      // Displaying an alert with the error status
      alert(response.statusText);
    }
  }
  
  // Attaching the newFormHandler function to the submit event of the '.new-post-form' element
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);