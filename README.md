# API Calculator 🧮

[![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python\&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3-green?logo=flask\&logoColor=white)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A **calculator with a frontend and backend API**.

* **Frontend:** HTML/CSS/JS with Tailwind
* **Backend:** Python Flask API

The frontend sends expressions to the backend for evaluation.

---

## 📁 Repo Structure

```
api_calculator/
├─ backend/            # Flask API
│   ├─ app.py
│   └─ requirements.txt
├─ frontend/           # Static frontend
│   ├─ index.html
│   ├─ style.css
│   └─ script.js
└─ README.md
```

---

## 🚀 Run Locally

### Backend (Flask API)

```bash
cd backend
python -m venv venv       # optional virtual environment
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

* API runs at: `http://127.0.0.1:5000`

### Frontend (Static Site)

```bash
cd frontend
```

* Open `index.html` in a browser.
* Make sure the backend is running.

> To use a deployed backend, update the `fetch()` URL in `script.js`.

---

## 🌐 Deployment

* **Backend:** Render Web Service (Flask)
* **Frontend:** Render Static Site or GitHub Pages
* Update frontend `fetch()` URL to point to deployed backend.

---

## 🎛 Features

* Basic arithmetic: `+ - * /`
* Decimal support
* Clear (`C`) button
* Styled with Tailwind CSS
* Error handling for invalid expressions & division by zero

---

## 🛠 Tech Stack

* Frontend: HTML, CSS, JS, Tailwind CSS
* Backend: Python, Flask, Flask-CORS

---

## 🔗 Live Demo

* Backend: https://api-calculator-dss1.onrender.com
* Frontend: https://api-calculator-front-end.onrender.com
