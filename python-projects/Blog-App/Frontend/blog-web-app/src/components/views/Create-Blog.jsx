import { useNavigate } from "react-router-dom"
import { createPost } from "../../routes"

function CreateBlog() {

    const navigate = useNavigate() 

    async function createBlogPost(formData){
        const title = formData.get("title")
        const content = formData.get("content")
        const response = await createPost(content, title)
        console.log("Response = ", response)
        if (response.status === 201){
            navigate("/")
        }
        else{
            console.log("Failed")
        }
    }

  return (
    <main className="margintop100 marginbottom100 padding100">
        <section className="top-to-bottom glass padding100 radius50">
            <form action={createBlogPost} className="top-to-bottom width100">
                <h2 className="white">Blog Title</h2>
                <input type="text" name="title" placeholder="Blog Title" className="width33" />
                <h2 className="white">Blog Content In Markdown</h2>
                <textarea name="content" placeholder="Blog content in markdown format"></textarea>
                <input type="submit" value="Create Blog Post" className="submit" />
            </form>
        </section>
    </main>
  )
}

export default CreateBlog