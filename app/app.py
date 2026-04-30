from flask import Flask, render_template, request
import sqlite3
import os

app = Flask(__name__)

DB_PATH = os.path.join(os.path.dirname(__file__), "database.db")

# ---------------- DATABASE ----------------
def init_db():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT,
        reg_no TEXT UNIQUE,
        subjects TEXT,
        cgpa REAL
    )
    """)

    conn.commit()
    conn.close()

init_db()

# ---------------- HOME PAGE ----------------
@app.route('/')
def index():
    return render_template('index.html')

# ---------------- ADD STUDENT ----------------
@app.route('/add', methods=['GET', 'POST'])
def add_student():
    if request.method == 'POST':
        conn = sqlite3.connect(DB_PATH)
        cur = conn.cursor()

        cur.execute("""
        INSERT INTO students (first_name, last_name, reg_no, subjects, cgpa)
        VALUES (?, ?, ?, ?, ?)
        """, (
            request.form['first_name'],
            request.form['last_name'],
            request.form['reg_no'],
            request.form['subjects'],
            request.form['cgpa']
        ))

        conn.commit()
        conn.close()

        return "Student Added Successfully!"

    return render_template('add_student.html')

# ---------------- SEARCH STUDENT ----------------
@app.route('/search', methods=['POST'])
def search():
    reg_no = request.form['reg_no']

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("SELECT * FROM students WHERE reg_no=?", (reg_no,))
    data = cur.fetchone()

    conn.close()

    if data:
        return render_template('result.html', student=data)
    else:
        return "Student Not Found"

# ---------------- RUN APP ----------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)