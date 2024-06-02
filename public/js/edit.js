async function updateBloghandler(event){event.preventDefault()
const title=document.querySelector("#blog-name").value.trim()
const content=document.querySelector("#blog-desc").value.trim()
const blog_id=document.querySelector("#blog_id").value
const response=await fetch ("/api/blogs/"+blog_id,{
    method:"PUT",
    body:JSON.stringify({title,content}),
    headers: {
        'Content-Type': 'application/json',
      },
    
})
if(response.ok){
    document.location.replace("/dashboard")
} else{
    alert("failed to update blog")
}
}




document.querySelector(".update-blog-form").addEventListener("submit",updateBloghandler);