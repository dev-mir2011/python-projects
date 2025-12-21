import UserBox from './../elements/user-box.jsx';
import { Link } from 'react-router-dom';


function Bloggers(props) {

  const userElements = props.users.map((user) => {
    return(
      <UserBox 
        key={user.User_ID}
        userName={user.username}
        userBio={user.bio}
        user_id={user.User_ID}
      />
    )
  })


  return (
      <main>
        <section className='hero'>
          <h1 className='blue'>Welcome to MirX Bloggers</h1>
          <div className="left-to-right">
            {!props.isLoggedIn && <Link to='/login'><button className='wab'>Login or Sign Up</button></Link>}
            {props.isLoggedIn && <Link to='/create-blog'><button className='wabl'>Create Blog Post</button></Link>}
          </div>
          <hr />
        </section>
        <h1 className='blue users-section-title'>Bloggers</h1>
        <div className='top-to-bottom width100'>
            {userElements}
        </div>
    </main>
  )
}

export default Bloggers