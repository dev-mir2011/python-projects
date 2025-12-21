import { Link } from "react-router-dom"

function ViewUrl(props) {

    async function copyURL(button) {
        await navigator.clipboard.writeText(props.shortURL);

        if (button.dataset.copied) return;

        button.append(" Copied");
        button.dataset.copied = "true";

        setTimeout(() => {
            if (button.lastChild?.nodeType === Node.TEXT_NODE) {
            button.lastChild.remove();
            }
            delete button.dataset.copied;
        }, 1500);
    }




  return (
    <main>
      <section className='hero'>
        <h1>Copy Your Short URL</h1>
        <div className="glass padding20 radius50 left-to-right gap20">
            <h2 className="blue">{props.shortURL}</h2>
            <button className="copy" onClick={(e) => copyURL(e.currentTarget)}><svg className="copy-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><title>copy</title><path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"/><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"/><rect width="32" height="32" fill="none"/></svg></button>
        </div>
        <div className="left-to-right">
            <Link to='/'><button className="wab">Back to Home</button></Link>
            <Link to='/create-url'><button className="wabl">Create More Short URL's</button></Link>
        </div>
      </section>
    </main>
  )
}

export default ViewUrl