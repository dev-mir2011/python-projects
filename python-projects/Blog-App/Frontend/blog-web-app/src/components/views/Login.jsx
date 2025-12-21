import { Link, useNavigate } from "react-router-dom"
import { login } from "../../routes"

function Login() {

    const navigate = useNavigate()

    async function Login(formData){
        const userName = formData.get("username")
        const password = formData.get("password")
        const response = await login(userName, password)
        console.log("Response = ", response)
        if (response.status === 200){
            navigate("/")
            location.reload()
        }
        else{
            console.log("Failed")
        }
    }

  return (
    <main className='top-to-bottom'>
        <section className='hero top-to-bottom width85 height85 radius50 glass padding50'>
            <h1 className='blue'>Login</h1>
            <form action={Login} className='top-to-bottom width100'>
                <input type="text" placeholder='Username or Email' name="username" required  />
                <input type="password" placeholder='Password' name="password" required />
                <input type="submit" value="Login" className='submit' />
            </form>
            <Link to="/create-account">Don't have an account already, Create one</Link>
        </section>
    </main>
  )
}

export default Login