import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { authorGET } from "../../routes"

function SingleUser() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [userBio, setUserBio] = useState("")
  const [userEmail, setUserEmail] = useState("")

  async function getUserData() {
    const response = await authorGET(id)
    setUserName(response.username)
    setUserBio(response.bio)
    setUserEmail(response.email)
  }

    useEffect(() => {
        getUserData()
    }, [id])

  return (
    <main className='top-to-bottom'>
      <section className='hero top-to-bottom width85 height85 radius50 glass padding50'>
        <h1 className='blue'>{userName}</h1>
        <h3 className='white'>{userBio}</h3>
        <h3 className='blue'>{userEmail}</h3>
      </section>
    </main>
  )
}

export default SingleUser