const commentFormHandler=async function (event){
    event.preventDefault();
const body=document.getElementById("comments").value.trim()
const blog_id=document.querySelector("form").dataset.blog_id
const response=await fetch("/api/comments",{
    method:"POST",
    body:JSON.stringify({body,blog_id}),
    headers:{"Content-Type":"application/json"},
})
if(response.ok){document.location.reload()}
else {alert("failed to create a comment")}
}

document.querySelector("form").addEventListener("submit",commentFormHandler)