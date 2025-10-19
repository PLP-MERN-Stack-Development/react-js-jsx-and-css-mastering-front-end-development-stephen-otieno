# Stemiot Task Manager

Stemiot Task Manager is a web application built using React, Vite, and Tailwind CSS. It combines a task management system with a word dictionary feature. Users can create, delete, and filter tasks, while also exploring and learning word meanings powered by the Datamuse API.

---

## Features

### Task Management
- Add new tasks
- Delete tasks
- Mark tasks as completed or active
- Filter tasks (All, Active, Completed)
- Search tasks by text
- Tasks persist using Local Storage

### Word Dictionary
- Generates 20 random English words using the Random Word API
- Users can click any word to view its meaning
- Definitions are fetched dynamically using the Datamuse Dictionary API
- Option to reload and generate a new set of words

---

### Screenshot
<img width="1846" height="860" alt="Screenshot 2025-10-19 054423" src="https://github.com/user-attachments/assets/8deb5d76-e838-40d1-b557-61cd4d493dd9" />


## Live Demo

The application is deployed on GitHub Pages:

https://plp-mern-stack-development.github.io/react-js-jsx-and-css-mastering-front-end-development-stephen-otieno/

---

## Tech Stack

| Technology      | Purpose                               |
|------------------|----------------------------------------|
| React            | Frontend framework                    |
| Vite             | Fast development tooling and build    |
| Tailwind CSS     | Styling and responsive design         |
| Datamuse API     | Word meaning and definition service   |
| Random Word API  | Generates random words                |
| Local Storage    | Stores and persists tasks locally     |

---

## Installation and Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-stephen-otieno.git
cd react-js-jsx-and-css-mastering-front-end-development-stephen-otieno
```

### 2. Install Dependencies
```
npm install
```

### 3. Start Development Server
```
npm run dev
```

### 4. Build for  Production
```
npm run build
```
### 5. Project Structure
```
src/
├── components/
│   ├── TaskManager.jsx         # Handles tasks (add, delete, complete, filter)
│   ├── Posts.jsx               # Word dictionary feature using Datamuse API
│   ├── Button.jsx              # Reusable button component
├── hooks/
│   └── useLocalStorage.js      # Custom hook for storing tasks in localStorage
├── App.jsx                     # Combines TaskManager and Posts components
├── main.jsx                    # Application entry point
├── index.css / App.css         # Tailwind and global styles
```

### Datamuse Dictionary API
> Endpoint: https://api.datamuse.com/words?sp=WORD&md=d&max=1
> Used to fetch definitions for a selected word

### Author
***Stemiot Softwares***


