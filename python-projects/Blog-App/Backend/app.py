from flask import Flask, jsonify
from flask_cors import CORS
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from web_tunnel import WEB_TUNNEL_URL
db = SQLAlchemy()

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static", static_url_path="/")

    # Session cookie settings for Cloudflare Tunnel (HTTPS)
    app.secret_key = "SOME_KEY"
    app.config["SESSION_COOKIE_SAMESITE"] = "None"
    app.config["SESSION_COOKIE_SECURE"] = True
    app.config["REMEMBER_COOKIE_SAMESITE"] = "None"
    app.config["REMEMBER_COOKIE_SECURE"] = True

    # Database
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///./blogs.db"
    db.init_app(app)

    # Correct CORS for Cloudflare tunnel
    CORS(app, resources={r"/*": {
        "origins": [WEB_TUNNEL_URL],
        "supports_credentials": True,
        "allow_headers": ["Content-Type", "Authorization"],
        "methods": ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
    }})

    # Login
    login_manager = LoginManager()
    login_manager.init_app(app)

    from model import User

    @login_manager.user_loader
    def load_user(uid):
        return User.query.get(uid)

    @login_manager.unauthorized_handler
    def unauthorized_behavior():
        return jsonify({"message": "Not Logged in"}), 401

    bcrypt = Bcrypt(app)

    from routes import routes
    routes(app, db, bcrypt)

    migrate = Migrate(app, db)

    return app
