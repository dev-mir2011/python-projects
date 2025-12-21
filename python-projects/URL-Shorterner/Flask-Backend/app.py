from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///./urls.db"
    db.init_app(app)
    CORS(app)

    migrate = Migrate(app, db)

    from routes import routes
    routes(app, db)

    return app