import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { postGET } from "../../routes"
import BlogPost from "../elements/blog-post"


function SingleBlogPost() {

    const { id } = useParams()
    const [blogTitle, setBlogTitle] = useState("")
    const [blogContent, setBlogContent] = useState("")
    const [blogAuthorName, setBlogAuthorName] = useState("")
    const [blogUserID, setblogUserID] = useState(0)

    async function getPostData() {
        const response = await postGET(id)
        setBlogTitle(response.title)
        setBlogContent(response.content)
        setBlogAuthorName(response.author)
        setblogUserID(response.USER_ID)
    }

    useEffect(() => {
        getPostData()
    }, [id])

  return (
    <main className='top-to-bottom padding100'>
        <section className='top-to-bottom height85 radius50 padding100'>
            <BlogPost 
                blogTitle = {blogTitle}
                blogPostContent = {blogContent}
                authorName = {blogAuthorName}
                user_id={blogUserID}
            />
        </section>
    </main>
  )
}

export default SingleBlogPost