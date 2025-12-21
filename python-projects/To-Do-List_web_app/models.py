from app import db


class Tasks(db.Model):
    __tablename__ = 'tasks'

    pid = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.Text, nullable=False)
