import { Link } from "react-router-dom"

function Home() {
  return (
    <main>
      <section className='hero'>
        <h1 className='white'>Welcome to MirXbit</h1>
        <h2 className='blue'>Short Links. Zero Friction.</h2>
        <h2>MirXbit transforms long URLs into compact, reliable links in seconds. Built for speed, simplicity, and privacy — no clutter, no noise, just links that work every time.</h2>
        <div className='left-to-right'>
          <Link to='/create-url'><button className='wab'>Get Started</button></Link>
        </div>
      </section>
    </main>
  )
}

export default Home