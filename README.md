
# 📘 React Week 3 — JSX, Components, Hooks & Tailwind CSS

This project is a React application built using **Vite**, styled with **Tailwind CSS**, and demonstrates:

* Component architecture
* State management with hooks
* Custom hook (localStorage persistence)
* Context API (Dark/Light mode theme)
* API Integration with search & pagination
* Responsive UI

---

## 🚀 Features

### ✅ Task Manager

* Add tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks (All, Active, Completed)
* Persistent storage using a custom `useLocalStorage` hook
* Hooks used: `useState`, `useEffect`

### ✅ API Integration

* Fetches data from JSONPlaceholder
* Search functionality
* Pagination
* Loading and error states
* Styled with Tailwind CSS

### ✅ Dark Mode / Light Mode

* Implemented using **Context API (`useContext`)**
* Toggle button in Navbar
* Theme saved in localStorage
* Tailwind `dark:` classes automatically enabled

### ✅ Component Architecture

* Reusable **Button** component
* **Card** component
* **Navbar** with theme switcher
* **Footer**
* **Layout** wrapper for shared UI

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-beverly-004
cd react-js-jsx-and-css-mastering-front-end-development-beverly-004
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Start development server

```sh
npm run dev
```

The app runs at:

```
http://localhost:5173/
```

---

## 🌐 Live Demo (Vercel Deployment)


https://react-js-jsx-and-css-mastering-fron-weld.vercel.app/

## 📁 Project Structure

```
src/
 ├── components/
 │      ├── Button.jsx
 │      ├── Card.jsx
 │      ├── Navbar.jsx
 │      ├── Footer.jsx
 │      └── Layout.jsx
 ├── pages/
 │      ├── Home.jsx
 │      ├── ApiPage.jsx
 │      └── TaskManager.jsx
 ├── context/
 │      └── ThemeContext.jsx
 ├── hooks/
 │      └── useLocalStorage.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 📸 Screenshots

screenshots/home.png
screenshots/tasks.png
screenshots/api.png
screenshots/darkmode.png
```

```md
### 🏠 Home Page
![Home Page](src\screenshots\home.png)

### ✅ Task Manager
![Task Manager](src\screenshots\tasks.png)

### 🌐 API Page
![API Page](src\screenshots\api.png)

### 🌙 Dark Mode
![Dark Mode](src\screenshots\darkmode.png)
```

---

## 🧪 Technologies Used

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6)**
* **Context API**
* **React Router**
* **JSONPlaceholder API**
* **Vercel Deployment**

---

## 📤 Deployment Instructions (Manual Upload)

1. Build the app:


npm run build


2. Go to Vercel → [https://vercel.com/new/project](https://vercel.com/new/project)
3. Scroll to **Upload** section
4. Upload the `dist` folder
5. Deploy and copy the URL
6. Add the URL to README.md
7. Push changes to GitHub




