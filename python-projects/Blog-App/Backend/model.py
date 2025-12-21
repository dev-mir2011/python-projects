from app import db
from flask_login import UserMixin

class User(db.Model, UserMixin):
    __tablename__ = "user"

    uid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)

    def __repr__(self):
        return f"Username: {self.username} | Email: {self.email} | User ID: {self.get_id()} | Bio: {self.bio}"
    
    def get_id(self):
        return self.uid
    

class Post(db.Model):
    __tablename__ = "post"

    pid = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.uid'), nullable=False)
    content = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"Username: {self.author.username} | User ID: {self.user_id} | Content: {self.content} | Post ID: {self.pid} | Title: {self.title}"
    
    def get_id(self):
        return self.pid