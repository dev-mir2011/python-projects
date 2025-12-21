from app import db

class Url(db.Model):
    __tablename__ = "url"

    uid = db.Column(db.Integer, primary_key=True)
    long_url = db.Column(db.String, nullable=False)
    short_url = db.Column(db.String)

    def __repr__(self):
        return f"URL_ID: {self.get_id()} | Long_URL: {self.long_url} | Short_URL: {self.short_url}"
    
    def get_id(self):
        return self.uid