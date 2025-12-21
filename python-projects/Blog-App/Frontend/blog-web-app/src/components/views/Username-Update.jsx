import { useNavigate } from "react-router-dom"
import { updateUser } from "../../routes"

function UsernameUpdate() {

    const navigate = useNavigate()

    async function changeUsername(formData){
        const username = formData.get("username")
        const response = await updateUser({username: username})
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
    <main className="margintop100 marginbottom100 padding100">
        <section className="top-to-bottom glass padding100 radius50">
            <form action={changeUsername} className="top-to-bottom width100">
                <h2 className="white">New Username</h2>
                <input type="text" name="username" placeholder="New Username" className="width33" />
                <input type="submit" value="Update Username" className="submit" />
            </form>
        </section>
    </main>
  )
}

export default UsernameUpdate