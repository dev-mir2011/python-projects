import { useNavigate } from "react-router-dom"
import { updateUser } from "../../routes"

function updateBio() {

    const navigate = useNavigate()

    async function changeBio(formData){
        const bio = formData.get("bio")
        const response = await updateUser({bio: bio})
        console.log("Response = ", response)
        if (response.status === 200){
            navigate("/user-settings")
            location.reload()
        }
        else{
            console.log("Failed")
        }
    }

  return (
    <main className="margintop100 marginbottom100 padding100">
        <section className="top-to-bottom glass padding100 radius50">
            <form action={changeBio} className="top-to-bottom width100">
                <h2 className="white">New Bio</h2>
                <textarea name="bio" placeholder="New Bio"></textarea>
                <input type="submit" value="Update Bio" className="submit" />
            </form>
        </section>
    </main>
  )
}

export default updateBio