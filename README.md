---
title: Contract AI Analyzer
emoji: 📄
colorFrom: blue
colorTo: indigo
sdk: docker
pinned: false
---

# 📄 Contract AI Analyzer

A full-stack, cloud-hosted web application that leverages Google's **Gemini API** to instantly parse, summarize, extract key obligations, and highlight legal risks from contract PDFs.

---

## 🌐 Live Production Demo

Access the live deployment hosted on Hugging Face Spaces:
👉 **[Contract AI Analyzer on Hugging Face](https://huggingface.co/spaces/abhizri006/contract-bot-backend)**[cite: 11]

> **⚠️ Note on Server Traffic:** If the live cloud app is loading slowly or showing a timeout/busy error due to high public traffic, you can easily download the code and run it seamlessly on your local machine (`localhost`) by following the steps below.

---

## 🛠️ Key Features

* **Instant PDF Parsing:** Extracts text safely and efficiently from multi-page legal documents using `pypdf`.
* **Gemini AI Integration:** Powered by Google's high-speed GenAI SDK (`gemini-3.8-flash`)[cite: 12] to evaluate legal phrasing and outline risks.
* **Modern Self-Contained Web UI:** A single-file responsive layout built with FastAPI, HTML5, CSS3, and JavaScript.
* **Cloud Ready:** Fully containerized via Docker and deployed for public access on Hugging Face Spaces[cite: 11].

---

## 🧰 Tech Stack

* **Backend:** Python, FastAPI, Uvicorn, `pypdf`, Google GenAI SDK
* **Frontend:** HTML5, CSS3, JavaScript, Marked.js (Markdown parsing)
* **DevOps / Deployment:** Docker, Hugging Face Spaces[cite: 11], Git

---

## 🚀 Step-by-Step Guide to Run Locally

Follow these steps to set up and run the application on your local machine:

### Step 1: Open Terminal in Project Folder
Open your terminal (or VS Code integrated terminal) and make sure you are inside your project directory.

### Step 2: Install Dependencies
Install all required Python packages (FastAPI, Uvicorn, `pypdf`, and the Google GenAI SDK):
```bash
pip install -r requirements.txt
```
<br>**Run the Development Server**
```bash
uvicorn main:app --reload
```

**Open the App in Your Browser**
Once the server starts up successfully, open your web browser and navigate to:
👉 http://127.0.0.1:8000
You will see the interactive Contract AI Analyzer interface load up, allowing you to upload PDF files and run analysis locally with zero latency!<br><br>
🧑‍💻 Author
**Abhiman Sri (AbhiZri006)**
