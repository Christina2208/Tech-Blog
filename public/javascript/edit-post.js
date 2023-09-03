// Function that handles form submission for editing a post
async function editFormHandler(event) {
    event.preventDefault();
  
    // Get the values of the title and post_content input fields in the form.
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    // Sending a PUT request to update the post with the specified ID
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      // Checks if the request was successful and redirects to the dashboard
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
  
  // Adding an event listener to the form with the class 'edit-post-form' for form submission
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);