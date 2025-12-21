from flask import render_template, request, redirect, url_for

from models import Tasks

def register_routes(app, db):

    @app.route('/')
    def index():

            tasks = Tasks.query.all()
            return render_template('index.html', tasks=tasks)
        
    
    @app.route('/delete/<pid>', methods=['DELETE'])
    def delete(pid):
        Tasks.query.filter(Tasks.pid == pid).delete()

        db.session.commit()

        people = Tasks.query.all()
        return render_template('index.html', people=people)
    
    
    @app.route('/create' , methods=['POST', 'GET'])
    def create():

        if request.method == 'GET':
            return render_template('create.html')

        elif request.method == 'POST':
            task = request.form.get('task')

            t = Tasks(task=task)

            db.session.add(t)
            db.session.commit()

            tasks = Tasks.query.all()
            return render_template('index.html', tasks=tasks)
        


    @app.route("/update/<int:pid>", methods=["GET", "POST"])
    def update(pid):
        task = Tasks.query.get_or_404(pid)  # get task or 404 if not found

        if request.method == "POST":
            new_text = request.form.get("task")  # get updated text from form
            if new_text:
                task.task = new_text
                db.session.commit()
                return redirect(url_for("index"))  # go back to home page

        # Render update form
        return render_template("update.html", task=task)

        


        
        
