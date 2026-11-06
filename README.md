# 📄 Contract AI Analyzer

A full-stack, cloud-hosted web application that leverages Google's **Gemini API** to automatically analyze legal contracts and agreements from uploaded PDFs, delivering instant executive summaries, key obligations breakdown, and structural risk identification.

![Contract AI Analyzer Interface](contract-bot-frontend/Screenshot 2026-11-05 at 22.08.12.png)

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

## 🏃‍♂️ Getting Started Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository
```bash
git clone [https://github.com/abhizri006/contract-bot.git](https://github.com/abhizri006/contract-bot.git)
cd contract-bot
