// Function that handles submitting a comment form
async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // Check if the comment_text has content
    if (comment_text) {
        const response = await fetch('/api/comments', {
          // Send a POST request to create a new comment using fetch
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // Check if the response is successful 
        if (response.ok) {
          // Reload the page
          document.location.reload();
        } else {
          // Alert with the error status
          alert(response.statusText);
        }
      }
  }
  //Attaching the commentFormHandler function to the submit event of the '.comment-form' element
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);