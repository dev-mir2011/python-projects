import { Link, useNavigate } from "react-router-dom"
import { createUser } from "../../routes"

function CreateAccount() {

    const navigate = useNavigate()

    async function createAccount(formData){
        const userName = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")
        const bio = formData.get("bio")
        const response = await createUser(userName, password, email, bio)
        console.log("Response = ", response)
        if (response.status === 201){
            navigate("/")
        }
        else{
            console.log("Failed")
        }
    }

  return (
    <main className='top-to-bottom'>
        <section className='hero top-to-bottom width85 height85 radius50 glass padding50'>
            <h1 className='blue'>Create Account</h1>
            <form action={createAccount} className='top-to-bottom width100'>
                <input type="text" placeholder='Username' name="username" required  />
                <input type="email" placeholder='Email' name="email" required  />
                <input type="password" placeholder='Password' name="password" required />
                <textarea name="bio" placeholder="Your Bio" required></textarea>
                <input type="submit" value="Create Account" className='submit' />
            </form>
            <Link to="/login">Have an account already, Login</Link>
        </section>
    </main>
  )
}

export default CreateAccount