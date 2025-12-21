import { Link } from "react-router-dom"

import HeaderImagePath from "/favicon.png"

function header(props) {
  return (
    <nav className='top-nav desktop left-to-right gap-auto'>
        <img src={HeaderImagePath} alt="" className="header-image-width" />
        <ul>
          <li><Link to="/" className='nav-links'>Home</Link></li>
          <li><Link to="/blogs" className='nav-links'>Blogs</Link></li>
          <li><Link to="/bloggers" className='nav-links'>Bloggers</Link></li>
          {!props.isLoggedIn ? <li><Link to="/login" className='login'>Login</Link></li> : <Link to='/settings' className="login">Welcome, {props.currentUser.username}</Link>}
        </ul>
    </nav>
  )
}

export default header