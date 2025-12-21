import { Link } from "react-router-dom"
import PencilButton from "../elements/pencil-button"

function UserSettings(props) {
  return (
    <main className="margintop100 marginbottom100 padding100">

        <section className="align-item-left top-to-bottom">

            <h3 className="blue">Theme :-</h3>

            <button onClick={props.toggleTheme} className={props.Theme === "dark" ? "wabl" : "wab"}>{props.Theme.toUpperCase()}</button>


            <h3 className="blue">Basic Information :-</h3>

            <div className="left-to-right gap10">
              <p className="blue">Username: <span className="white">{props.username}</span></p>
              <Link to='/update-username'><PencilButton /></Link>
            </div>
            
            <div className="left-to-right gap10">
              <p className="blue">Email: <span className="white">{props.email}</span></p>
              <Link to='/update-email'><PencilButton /></Link>
            </div>

            <div className="left-to-right gap10">
              <p className="blue">Bio: <span className="white">{props.bio}</span></p>
              <Link to='/update-bio'><PencilButton /></Link>
            </div>


            <h3 className="blue">Account Actions :-</h3>

            <Link to='/update-password' className="bluehover">Update Password</Link>
            <Link to='/delete-user' className="red">Delete Account</Link>
            <p>{props.userid}</p>

        </section>

    </main>
  )
}

export default UserSettings