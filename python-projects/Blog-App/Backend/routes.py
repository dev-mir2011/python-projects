from flask import render_template, request, jsonify

from model import User, Post

from flask_login import login_user, logout_user, login_required, current_user


def routes(app, db, bcrypt):

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/admin")
    def admin():
        posts = Post.query.all()
        users = User.query.all()
        return render_template("admin.html", users=users, posts=posts)

    @app.route("/users", methods=["GET"])
    def users():
        users = User.query.all()
        return jsonify(
            [
                {"username": user.username, "User_ID": user.uid, "bio": user.bio}
                for user in users
            ]
        )

    @app.route("/create_user", methods=["POST"])
    def create_user():
        try:
            data = request.get_json()

            if not data:
                return jsonify({"error": "Request body must be JSON"}), 400

            username = data.get("username")
            password = data.get("password")
            email = data.get("email")
            bio = data.get("bio")

            if not username or not password:
                return jsonify({"error": "Username and password required"}), 400

            existing_username = User.query.filter_by(username=username).first()
            existing_email = User.query.filter_by(email=email).first()

            if existing_username:
                return jsonify({"error": "Username already exists"}), 409

            if existing_email:
                return jsonify({"error": "Email already exists"}), 409

            hashed_password = bcrypt.generate_password_hash(password)

            user = User(
                username=username, password=hashed_password, email=email, bio=bio
            )
            db.session.add(user)
            db.session.commit()

            return jsonify({"message": "User created successfully", "status": 201}), 201

        except KeyError as e:
            return jsonify({"error": f"Missing key: {e}"}), 400

    @app.route("/delete_user", methods=["DELETE"])
    @login_required
    def delete_user():
        user = User.query.get(current_user.uid)

        if not user:
            return jsonify({"error": "User not found"}), 404

        Post.query.filter_by(user_id=user.uid).delete()

        db.session.delete(user)
        db.session.commit()

        return jsonify({"message": "User deleted successfully", "status": 200}), 200

    @app.route("/update_user", methods=["PATCH"])
    @login_required
    def update_user():
        user = User.query.get(current_user.uid)

        if not user:
            return jsonify({"error": "User not found", "status": 404}), 404

        data = request.get_json()
        if not data:
            return jsonify({"error": "Request body must be JSON", "status": 400}), 400

        username = data.get("username")
        email = data.get("email")
        new_password = data.get("password")
        old_password = data.get("old_password")
        bio = data.get("bio")  # Added bio

        updated = False

        if username and username != user.username:
            existing_user = User.query.filter_by(username=username).first()
            if existing_user:
                return jsonify({"error": "Username already taken", "status": 409}), 409

            user.username = username
            updated = True

        if email and email != user.email:
            existing_email = User.query.filter_by(email=email).first()
            if existing_email:
                return jsonify({"error": "Email already taken", "status": 409}), 409

            user.email = email
            updated = True

        if new_password:
            if not old_password:
                return jsonify({"error": "Old password required", "status": 400}), 400

            if not bcrypt.check_password_hash(user.password, old_password):
                return (
                    jsonify({"error": "Old password is incorrect", "status": 401}),
                    401,
                )

            hashed_password = bcrypt.generate_password_hash(new_password)  # NO decode()
            user.password = hashed_password
            updated = True

        if bio is not None and bio != user.bio:  # Update bio if provided
            user.bio = bio
            updated = True

        if not updated:
            return jsonify({"message": "No changes made", "status": 200}), 200

        db.session.commit()

        return jsonify({"message": "User successfully updated!", "status": 200}), 200

    @app.route("/get_author_data/<int:id>", methods=["GET"])
    def get_author_data(id):
        user = User.query.filter_by(uid=id).first()

        return jsonify(
            {"username": user.username, "email": user.email, "bio": user.bio}
        )

    @app.route("/user_data", methods=["GET"])
    @login_required
    def get_user_data():
        return jsonify(
            {
                "username": current_user.username,
                "email": current_user.email,
                "USER_ID": current_user.uid,
                "bio": current_user.bio,
            }
        )

    @app.route("/create_post", methods=["POST"])
    @login_required
    def create_post():
        data = request.get_json()

        if not data:
            return jsonify({"error": "Request body must be JSON", "status": 400}), 400

        content = data.get("content")
        if not content:
            return jsonify({"error": "Content is required", "status": 400}), 400

        title = data.get("title")
        if not title:
            return jsonify({"error": "Title is required", "status": 400}), 400

        user_id = current_user.uid

        post = Post(user_id=user_id, content=content, title=title)
        db.session.add(post)
        db.session.commit()

        return jsonify({"message": "Post created", "status": 201}), 201

    @app.route("/all_blogs", methods=["GET"])
    def all_blogs():
        posts = Post.query.all()

        return jsonify(
            [
                {
                    "ID": post.pid,
                    "USER_ID": post.user_id,
                    "content": post.content,
                    "author": post.author.username,
                    "title": post.title,
                }
                for post in posts
            ]
        )

    @app.route("/blog/<int:id>", methods=["GET"])
    def blog(id):
        blog = Post.query.filter_by(pid=id).first()

        return jsonify(
            {
                "ID": blog.pid,
                "USER_ID": blog.user_id,
                "content": blog.content,
                "author": blog.author.username,
                "title": blog.title,
            }
        )

    @app.route("/delete_post/<int:pid>", methods=["DELETE"])
    @login_required
    def delete_post(pid):
        post = Post.query.filter_by(pid=pid).first()

        if not post:
            return jsonify({"error": "Post not found", "status": 404}), 404

        if post.user_id != current_user.uid:
            return jsonify({"error": "Unauthorized", "status": 403}), 403

        db.session.delete(post)
        db.session.commit()

        return jsonify({"message": "Post deleted successfully", "status": 200}), 200

    @app.route("/update_post/<int:pid>", methods=["PATCH"])
    @login_required
    def update_post(pid):

        post = Post.query.filter_by(pid=pid).first()

        if not post:
            return jsonify({"error": "Post not found", "status": 404}), 404

        if post.user_id != current_user.uid:
            return jsonify({"error": "Unauthorized", "status": 403}), 403

        data = request.get_json()

        if not data:
            return jsonify({"error": "Request body must be JSON", "status": 400}), 400

        content = data.get("content")
        title = data.get("title")

        if not content and not title:
            return (
                jsonify(
                    {
                        "error": "Request must contain at least one of 'content' or 'title'",
                        "status": 400,
                    }
                ),
                400,
            )

        updated = False

        if content and content != post.content:
            post.content = content
            updated = True

        if title and title != post.title:
            post.title = title
            updated = True

        if not updated:
            return jsonify({"message": "No changes made", "status": 200}), 200

        db.session.commit()

        return jsonify({"message": "Post updated successfully", "status": 200}), 200

    @app.route("/current_user_blogs", methods=["GET"])
    @login_required
    def current_user_blogs():
        user_id = current_user.uid
        blogs = Post.query.filter_by(user_id=user_id).all()

        return jsonify(
            [
                {
                    "ID": blog.pid,
                    "USER_ID": blog.user_id,
                    "content": blog.content,
                    "author": blog.author.username,
                    "title": blog.title,
                }
                for blog in blogs
            ]
        )

    @app.route("/login", methods=["POST"])
    def login():
        data = request.get_json()

        if not data:
            return jsonify({"error": "Request body must be JSON"}), 400

        username = data.get("username_or_email")
        password = data.get("password")

        if not username or not password:
            return jsonify({"error": "Both fields required"}), 400

        user = User.query.filter(
            (User.username == username) | (User.email == username)
        ).first()

        if not user:
            return jsonify({"error": "User not found"}), 404

        if not bcrypt.check_password_hash(user.password, password):
            return jsonify({"error": "Invalid password"}), 401

        login_user(user)

        return jsonify({"message": "Login successful", "status": 200}), 200

    @app.route("/logout", methods=["POST"])
    def logout():
        logout_user()
        return jsonify({"message": "Logout Sucessful", "status": 200}), 200

    @app.route("/isLoggedIn", methods=["GET"])
    def isLoggedIn():
        if current_user.is_authenticated:
            return jsonify({"message": True}), 200
        else:
            return jsonify({"message": False}), 200
