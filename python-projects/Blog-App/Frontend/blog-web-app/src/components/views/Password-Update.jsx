import { useNavigate } from "react-router-dom"
import { updateUser } from "../../routes"

function PasswordUpdate() {

    const navigate = useNavigate()

    async function changePassword(formData){
        const old_password = formData.get("old_password")
        const new_password = formData.get("new_password")
        const response = await updateUser({password: new_password, old_password: old_password})
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
            <form action={changePassword} className="top-to-bottom width100">
                <h2 className="white">Old Password</h2>
                <input type="password" name="old_password" placeholder="Old Password" className="width33" />
                <h2 className="white">New Password</h2>
                <input type="password" name="new_password" placeholder="New Password" className="width33" />
                <input type="submit" value="Update Password" className="submit" />
            </form>
        </section>
    </main>
  )
}

export default PasswordUpdate