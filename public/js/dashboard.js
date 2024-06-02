const newFormhandler = async (event) => {
    event.preventDefault(); {
        const title = document.querySelector("#blog-name").value.trim();
    
      const content = document.querySelector("#blog-desc").value.trim();
    
        if (title && content) {
            const response = await fetch("/api/blogs", {
                method: "POST",
                body: JSON.stringify({ title, content }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert("Failed to create blog");
            }
        }
    }
    }
    
    document.querySelector(".new-blog-form").addEventListener("submit", newFormhandler);
    const deleteBlogHandler = async (event) => {
        if (event.target.hasAttribute("data-blog_id")) {
            const id = event.target.getAttribute("data-blog_id");
            const response = await fetch(`/api/blogs/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert("Failed to delete blog");
            }
        }
    };
    
    document.querySelector(".blog-list").addEventListener("click", deleteBlogHandler);
    document.querySelector(".new-blog-form").addEventListener("submit", newFormhandler);