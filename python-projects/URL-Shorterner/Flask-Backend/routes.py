from flask import redirect, jsonify, request
import base62

from models import Url

def routes(app, db):
    @app.route("/")
    def index():
        return "Index"
    
    @app.route("/generate-short-url", methods=['POST'])
    def generateShortUrl():
        data = request.get_json()

        if not data:
            return jsonify({"error": "Request body must be JSON"}), 400
        
        long_url = data.get("long_url")

        url_long_only = Url(long_url=long_url)

        db.session.add(url_long_only)
        db.session.commit()

        url = Url.query.filter_by(long_url=long_url).first()

        short_url_suffix = base62.encode(url.uid)

        url.short_url = short_url_suffix

        db.session.commit()

        return jsonify({"short_url": short_url_suffix, "status": 200}), 200
    
    @app.route("/<id>", methods=['GET'])
    def redirect_to_long_url(id):
        long_url = Url.query.filter_by(short_url=id).first().long_url

        if not long_url:
            return jsonify({"error": "Requested URL does not exist."}), 404
        
        return redirect(long_url, 301)

