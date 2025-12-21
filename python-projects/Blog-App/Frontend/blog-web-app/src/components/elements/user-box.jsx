import { Link } from "react-router-dom"

function UserBox(props) {
  return (
    <Link to={`/blogger/${props.user_id}`} className="top-to-bottom">
      <section className="user-box width85">
        <div>
          <h1 className='blue'>{props.userName}</h1>
          <p className="white">{props.userBio}</p>
        </div>
      </section>
    </Link>
  )
}

export default UserBox