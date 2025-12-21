import PencilButton from "../elements/pencil-button"
import TrashButton from './../elements/trash-button.jsx';
import { Link } from "react-router-dom";

function UserBlogs(props) {
  
  const blogElements = props.currentUserBlogPosts.map((blogPost) => {
    return (
      <div className="left-to-right gap10" key={blogPost.ID}>
        <p className="blue">{blogPost.title}</p>
        <Link to={`/edit-blog/${blogPost.ID}`}><PencilButton /></Link>
        <Link to={`/delete-blog/${blogPost.ID}`}><TrashButton /></Link>
      </div>
    )
  })

  return (
    <main className="margintop100 marginbottom100 padding100">
      <section className='top-to-bottom align-item-left'>
        <Link to='/create-blog'><button className='wab'>+ Create Blog Post</button></Link>
        <h1 className='blue'>Blogs :-</h1>
        {blogElements}
      </section>
    </main>
  )
}

export default UserBlogs