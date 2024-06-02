const commentFormHandler = async function (event) {
  event.preventDefault();
  const blog_id = document.querySelector('form').dataset.blog_id;

  const comment_description = document.querySelector('#comments').value.trim();

  if (comment_description) {
    const response=await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        blog_id,
        comment_description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    }
  } else {
    alert('failed to create a comment');
  }
};
document.querySelector('form').addEventListener('submit', commentFormHandler);
