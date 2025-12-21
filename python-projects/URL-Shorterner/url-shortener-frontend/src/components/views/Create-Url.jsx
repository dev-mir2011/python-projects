import { Link, useNavigate } from "react-router-dom"
import { create_url } from "../../routes"

function CreateUrl(props) {

    const navigate = useNavigate()

    async function generateURL(formData){
        const long_url = formData.get("long_url")
        const response = await create_url(long_url)
        if (response.status === 200){
            const short_url = props.urlPrefix + "/" + response.short_url
            props.setShortURL(short_url)
            navigate("/short_url")
        }
    }

  return (
    <main>
      <section className='hero width100'>
        <h1 className="blue">Generate Short URL</h1>
        <Link to='/'><button className="wabl">Home</button></Link>
        <form action={generateURL} className="glass radius50 padding100 top-to-bottom width85">
            <input type="text" placeholder="Long URL" name="long_url" />
            <input type="submit" value="Generate Short URL" className="submit width85" />
        </form>
      </section>
    </main>
  )
}

export default CreateUrl