import { deleteUser } from "../../routes"
import { useNavigate } from "react-router-dom"

function DeleteAccount() {

    const navigate = useNavigate()

    async function deleteAccount() {
        const response = await deleteUser()
        if (response.status === 200){
            navigate("/")
            location.reload()
        }
    }
  return (
    <main className="margintop100 marginbottom100 padding100">
        <section className="top-to-bottom">
            <h1 className="red-no-hover">Delete Account</h1>
            <p className="red-no-hover">Warning: Deleting your blog account is a permanent action. All your posts, comments, images, and profile data will be permanently removed and cannot be recovered. Once you confirm, your account will be immediately deleted from our system. Please make sure you have backed up anything important before proceeding.</p>
            <button className="delete-button" onClick={deleteAccount}>Permanently Delete Account</button>
        </section>
    </main>
  )
}

export default DeleteAccount