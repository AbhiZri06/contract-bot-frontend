# 📄 Contract AI Analyzer

A full-stack, cloud-hosted web application that leverages Google's **Gemini API** to automatically analyze legal contracts and agreements from uploaded PDFs, delivering instant executive summaries, key obligations breakdown, and structural risk identification.

---

## 🚀 Key Features

* **Instant PDF Parsing:** Extracts text safely and efficiently from multi-page legal documents using `pypdf`.
* **Gemini AI Integration:** Powered by Google's high-speed GenAI SDK to evaluate legal clauses, highlight one-sided conditions, and assess liabilities.
* **Modern Self-Contained Web UI:** A single-file responsive layout built with FastAPI serving clean HTML/JS with live Markdown rendering.
* **Monetization & Auth Ready:** Structured integration framework for user authentication (Clerk) and subscription processing (Stripe).
* **Cloud Ready:** Fully containerized via Docker and deployed for public access on Hugging Face Spaces.

---

## 🛠️ Tech Stack

* **Backend:** Python, FastAPI, Uvicorn, `pypdf`, Google GenAI SDK
* **Frontend:** HTML5, CSS3, JavaScript, Marked.js (Markdown parsing)
* **DevOps / Deployment:** Docker, Hugging Face Spaces, Git
* **Authentication & Billing:** Clerk, Stripe API

---

## 🏃‍♂️ Step-by-Step Guide to Run Locally

Follow these steps to set up and run the application on your local machine:

### Step 1: Open Terminal in Project Folder
Open your terminal (or VS Code integrated terminal) and make sure you are inside your project root directory (`contract-bot`).

### Step 2: Install Dependencies
Install all required Python packages (FastAPI, Uvicorn, `pypdf`, and the Google GenAI SDK) using your `requirements.txt` file:
```bash
pip install -r requirements.txt

Live Demo: https://huggingface.co/spaces/abhizri006/contract-bot-backend
