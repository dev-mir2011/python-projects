import { Link } from "react-router-dom";

function Home(props) {
  return (
    <main>
      <section className="hero">
        <h1 className="white">Welcome to MirX Blog</h1>
        <h2 className="blue">Built for Writers. Loved by Developers.</h2>
        <h2>
          <span className="blue">Mirx Blog</span> combines a clean reading
          experience with a <span className="blue">powerful API</span> backend
          for seamless content delivery.
        </h2>
        <div className="left-to-right">
          {!props.isLoggedIn && (
            <Link to="/login">
              <button className="wab">Get Started</button>
            </Link>
          )}
          <button className="wabl">View Docs</button>
        </div>
        <hr />
      </section>

      <section className="features">
        <div className="top-to-bottom">
          <h1 className="blue">Features</h1>

          <div className="left-to-right">
            <div className="text">
              <h3 className="white">Fast & Lightweight</h3>
              <p className="grey">
                Lightning-fast performance for reading and writing.
              </p>
            </div>

            <div className="image">
              <img src="src/assets/feature-images/speed.png" alt="" />
            </div>
          </div>

          <div className="left-to-right">
            <div className="image">
              <img src="src/assets/feature-images/security.png" alt="" />
            </div>

            <div className="text">
              <h3 className="white">Secure & Reliable</h3>
              <p className="grey">
                Session-based authentication and safe user management.
              </p>
            </div>
          </div>

          <div className="left-to-right">
            <div className="text">
              <h3 className="white">Beautiful Design</h3>
              <p className="grey">
                Minimal, modern, and responsive for all devices.
              </p>
            </div>

            <div className="image">
              <img src="src/assets/feature-images/ui.png" alt="" />
            </div>
          </div>

          <div className="left-to-right">
            <div className="image">
              <img src="src/assets/feature-images/devs.png" alt="" />
            </div>

            <div className="text">
              <h3 className="white">Developer Friendly</h3>
              <p className="grey">Works with any frontend via MirX API.</p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
      </section>

      <section className="how-it-works">
        <h2 className="blue">How it works</h2>

        <div className="steps">
          <div className="step top-to-bottom ">
            <div className="hiw-image">
              <img src="src/assets/step-images/one.png" alt="" />
            </div>
            <h3 className="white">
              Step 1: Write your conftent in the built-in editor
            </h3>
            <p className="grey">
              Create posts, format text, and add images easily.
            </p>
          </div>

          <div className="step top-to-bottom ">
            <div className="hiw-image">
              <img src="src/assets/step-images/two.png" alt="" />
            </div>
            <h3 className="white">Step 2: Save and manage posts instantly</h3>
            <p className="grey">
              Your posts update instantly without complex backend setups.
            </p>
          </div>

          <div className="step top-to-bottom ">
            <div className="hiw-image">
              <img src="src/assets/step-images/three.png" alt="" />
            </div>
            <h3 className="white">
              Step 3: Display posts beautifully on the frontend
            </h3>
            <p className="grey">
              The layout automatically renders your content in a clean,
              responsive design.
            </p>
          </div>

          <div className="step top-to-bottom ">
            <div className="hiw-image">
              <img src="src/assets/step-images/four.png" alt="" />
            </div>
            <h3 className="white">Step 4: Extend whenever you want</h3>
            <p className="grey">
              Add tags, categories, or media galleries as your blog grows.
            </p>
          </div>
        </div>

        <hr />
      </section>

      <section className="devs">
        <h1 className="blue">Developer Friendly by Design</h1>
        <br />
        <div className="left-to-right devs-box">
          <div className="dev-sec">
            <h3 className="white">
              A lightweight, flexible API built for fast integration and smooth
              development.
            </h3>

            <ul>
              <li>
                <p className="grey">Easy JSON responses</p>
              </li>

              <li>
                <p className="grey">REST endpoints</p>
              </li>

              <li>
                <p className="grey">JWT auth and secure routes</p>
              </li>

              <li>
                <p className="grey">Integrates with React, Vue, mobile apps</p>
              </li>
            </ul>
          </div>

          <div className="dev-image">
            <img src="src\assets\json-image\json.png" alt="" />
          </div>
        </div>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="final-cta top-to-bottom">
        <h1>
          Start your blog with MirX today — lightning-fast, secure, and
          beautiful.
        </h1>
        <div className="left-to-right">
          <button className="wab">Sign up for Free</button>
          <button className="wabl">View Docs</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
