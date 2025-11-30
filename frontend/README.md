# Code Snippet Library

A web application to manage and share code snippets. Built with **React** for the frontend and **Node.js + Express + MongoDB** for the backend. Features include syntax highlighting, "Copy to Clipboard", live preview, and filtering by language and tags.

---

## Video ja Live URL
Frontend + Backend live on [Render](https://snippet-api-1.onrender.com)

Demo video on [Youtube](https://youtu.be/IEweDuX5hRo)

---

## Features

- **Grid view** of snippets with language badges
- **Syntax highlighting** using `react-syntax-highlighter`
- **Copy to Clipboard** button with feedback animation
- **Live preview** when adding a new snippet
- **Search** by title, description, language, or code
- **Filter** snippets by language or tags
- **CRUD operations**: create, read, update, delete snippets
- **Responsive design** using Tailwind CSS
- **Error handling** and loading states for API calls

---

## Tech Stack

- Frontend: React, Tailwind CSS, react-syntax-highlighter  
- Backend: Node.js, Express  
- Database: MongoDB (via Mongoose)  
- Deployment: Render  

---

## Installation

Clone the repository:

```bash
git clone https://github.com/terhipine/snippet-api.git
cd snippet-api
```

Frontend:

```bash
cd ../frontend
npm install
npm start
```

The frontend will run on http://localhost:3001 and communicate with the backend API on http://localhost:3000.

## Usage

Add new snippets using the form with Title, Language, Code, Description, and Tags.

Snippets are displayed in a grid layout, with syntax-highlighted code.

Filter snippets by language or tags.

Search snippets by any field.

Edit or delete existing snippets directly in the UI.

Use the Copy button to copy code to clipboard.

## Screenshots

(To be added)



