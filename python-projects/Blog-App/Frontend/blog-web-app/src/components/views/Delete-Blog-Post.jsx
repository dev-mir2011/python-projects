import { useParams, useNavigate } from "react-router-dom"
import { deletePost } from "../../routes"

function DeleteBlogPost() {


    const navigate = useNavigate()
    const { id } = useParams()
    
    async function deleteBlogPost() {
        const response = await deletePost(id)
        if (response.status === 200){
            navigate("/")
            location.reload()
        }
    }

  return (
    <main className="margintop100 marginbottom100 padding100">
        <section className="top-to-bottom">
            <h1 className="red-no-hover">Delete Blog Post</h1>
            <p className="red-no-hover">Warning: Deleting this blog post is permanent and cannot be undone. Once you confirm, all content related to this post — including comments, likes, and metadata — will be permanently removed from the system. Make sure you truly want to proceed before continuing.</p>
            <button className="delete-button" onClick={deleteBlogPost}>Permanently Delete Blog Post</button>
        </section>
    </main>
  )
}

export default DeleteBlogPost