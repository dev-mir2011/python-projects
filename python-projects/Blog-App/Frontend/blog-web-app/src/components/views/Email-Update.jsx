import { useNavigate } from "react-router-dom"
import { updateUser } from "../../routes"


function EmailUpdate() {

    const navigate = useNavigate()

    async function changeEmail(formData){
        const email = formData.get("email")
        const response = await updateUser({email: email})
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
            <form action={changeEmail} className="top-to-bottom width100">
                <h2 className="white">New Email</h2>
                <input type="email" name="email" placeholder="New Email" className="width33" />
                <input type="submit" value="Update Email" className="submit" />
            </form>
        </section>
    </main>
  )
}

export default EmailUpdate