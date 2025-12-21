import BlogPost from './../elements/blog-post.jsx';
import { Link } from 'react-router-dom';

function Blogs(props) {

    const blogs = props.blogPosts.map((post) => {
        return(
            <Link to={`/blog/${post.ID}`} className='top-to-bottom'>
                <BlogPost 
                    key = {post.ID}
                    blogTitle = {post.title}
                    blogPostContent = {post.content}
                    authorName = {post.author}
                    user_id={post.USER_ID}
                />
            </Link>
        )
    })

  return (
    <main>
        <section className='hero'>
            <h1 className='blue'>Welcome to MirX Blogs</h1>
            <div className="left-to-right">
                {!props.isLoggedIn && <Link to='/login'><button className='wab'>Login or Sign Up</button></Link>}
                {props.isLoggedIn && <Link to='/create-blog'><button className='wabl'>Create Blog Post</button></Link>}
            </div>
            <hr />
        </section>
        <h1 className='blue blog-section-title'>Blogs</h1>
        <div className='top-to-bottom width100'>
            {blogs}
        </div>
    </main>
  )
}

export default Blogs