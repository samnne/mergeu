# Mergeu 📄🔗

**Mergeu** is a simple, open-source **PDF merger web app** built with **Flask (Python)**, **JavaScript**, **Tailwind CSS**, and **NES.css**, containerized with **Docker** and ready for deployment (e.g., Google Cloud Run).  
The purpose of this tool is to provide a free, privacy-focused alternative for merging PDF files without paywalls.

---

## 🧠 Why Mergeu?

Many PDF merging services online hide features behind subscriptions or paywalls.  
Mergeu gives you:

- ⚡ **Fast, local PDF merging**
- 🛡️ **No paywalls or forced ads**
- 📦 **Self-hostable with Docker**
- 💻 A clean UI built with Tailwind CSS + NES.css

---

## 🚀 Features

✔ Upload multiple PDFs  
✔ Merge them into one document  
✔ Drag & drop / basic interface (future UI)  
✔ Works fully on your own server  
✔ Docker support for easy deployment

---

## 🧩 Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: JavaScript + Tailwind CSS + NES.css
- **Containerization**: Docker
- **Deployment**: Google Cloud Run

---

## 📦 Getting Started

### 🛠 Prerequisites

Make sure you have installed:

- Python 3.8+
- Docker (if using container deployment)
- Node & npm (for Tailwind build, if editing frontend)

---

## 🧠 How It Works

This app lets you upload PDF files from your device and merges them server-side using Python.
By keeping the tool open-source and self-hosted, Mergeu avoids expensive subscription models found in many web PDF utilities.


## 📁 File Structure (Example)

```bash
.
├── static/           # Tailwind, NES.css, JS
├── templates/        # HTML pages
├── main.py           # Flask app entrypoint
├── merger.py         # PDF merge logic
├── Dockerfile        # Docker config
├── requirements.txt  # Python deps
├── package.json      # JS deps
└── README.md         # This file
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/samnne/mergeu.git
cd mergeu
```
## 🎨 UI

The frontend is styled with Tailwind CSS and NES.css, giving a fun 8-bit aesthetic with utility classes for layout and responsiveness.


## CHECK IT OUT HERE 👇👇👇
[MergeU - PDF Merger](https://sppmergepdf-580782691256.us-west1.run.app/)


📜 License

This project is MIT Licensed.
