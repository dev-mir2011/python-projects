import { Link, useNavigate } from "react-router-dom"
import { logout } from '../../routes.js'

function Settings() {

  const navigate = useNavigate()

  async function Logout() {
    const response = await logout()
    if (response.status === 200){
      navigate("/")
      location.reload()
    }
    else{
      console.log("Failed")
    }
  }

  return (
    <main className="margintop100 marginbottom100 padding100 top-to-bottom">
        <section className="left-to-right">
          <Link to='/user-settings'><button className="wabl">Settings</button></Link>
          <Link to='/user-blogs'><button className="wabl">Blogs</button></Link>
        </section>
        <section>
          <button className="wab" onClick={Logout}>Logout</button>
        </section>
    </main>
  )
}

export default Settings