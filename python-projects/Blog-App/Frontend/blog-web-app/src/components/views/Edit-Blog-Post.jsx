import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { postGET, updatePost } from "../../routes"

function EditBlogPost() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [blogTitle, setBlogTitle] = useState("")
    const [blogContent, setBlogContent] = useState("")

    async function getBlogData() {
        const response = await postGET(id)
        setBlogTitle(response.title)
        setBlogContent(response.content)
    }

    async function updateBlogPost(formData){
        const title = formData.get("title")
        const content = formData.get("content")
        const response = await updatePost(content, title, id)
        if (response.status === 200){
            navigate("/blogs")
        }
        else{
            console.log("Failed")
        }
    }

    useEffect(() => {
        getBlogData()
    }, [id])


  return (
    <main className="margintop100 marginbottom100 padding100">
        <section className="top-to-bottom glass padding100 radius50">
            <form action={updateBlogPost} className="top-to-bottom width100">
                <h2 className="white">Blog Title</h2>
                <input type="text" name="title" placeholder="Blog Title" className="width33" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
                <h2 className="white">Blog Content In Markdown</h2>
                <textarea name="content" placeholder="Blog content in markdown format" value={blogContent} onChange={(e) => setBlogContent(e.target.value)}></textarea>
                <input type="submit" value="Update Blog Post" className="submit" />
            </form>
        </section>
    </main>
  )
}

export default EditBlogPost