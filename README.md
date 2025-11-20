

# React Week 3 — JSX, Components, Hooks & Tailwind CSS



This project is a React application built using **Vite**, styled with **Tailwind CSS**, and demonstrates:

* Component architecture
* State management with hooks
* Custom hook (localStorage persistence)
* Context API (Dark/Light mode theme)
* API Integration with search & pagination
* Responsive UI

---

## 🚀 Features

### ✅ **Task Manager**

* Add tasks
* Mark tasks as completed
* Delete tasks
* Filter (All, Active, Completed)
* Persistent storage with `localStorage`
* Uses: `useState`, `useEffect`, custom hook

### ✅ **API Integration**

* Data fetched from JSONPlaceholder
* Pagination
* Search filter
* Loading & error handling

### ✅ **Dark Mode / Light Mode**

* Implemented with Context API (`useContext`)
* Persistent theme saved in localStorage
* Tailwind `dark:` classes

### ✅ **Component Architecture**

* Button
* Card
* Navbar
* Footer
* Layout wrapper

---

## 🛠️ **Installation & Setup**

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Run the development server

```
npm run dev
```

### 3️⃣ Open the app

Open the link Vite gives you, usually:

```
http://localhost:5173/
```

---

##  **Project Structure**

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

## 🌐 **Live Demo (Vercel Deployment)**

🔗 *(Add your Vercel URL here after deploying)*

---

## 📸 **Screenshots**

Add screenshots like this:

```
![Home Page](screenshots/home.png)
![Task Manager](screenshots/tasks.png)
![API Page](screenshots/api.png)
![Dark Mode](screenshots/darkmode.png)
```

(Create a folder named `screenshots` in your repo)

---

# 📌 **STEP 4 — Add Screenshots**

1. Run your app
2. Press **Windows + Shift + S**
3. Select **Rectangular Snip**
4. Capture:

   * Home Page
   * Tasks Page
   * API Page
   * Dark Mode
5. Save them in folder:

```
react-js-project/
   screenshots/
      home.png
      tasks.png
      api.png
      darkmode.png
```



---

# 🚀 **STEP 5 — Deploy to Vercel**

Follow these *exact* steps:

### 1️⃣ Go to Vercel

[https://vercel.com/](https://vercel.com/)

### 2️⃣ Login with GitHub

(Allow access)

### 3️⃣ Click **“New Project”**

### 4️⃣ Select your repo:

**react-js-jsx-and-css-mastering-front-end-development-beverly-004**

### 5️⃣ Click **"Deploy"**

Vercel will:
✔ Install dependencies
✔ Auto-detect Vite
✔ Build
✔ Deploy your site

### 6️⃣ Copy the live URL

Example:

```
https://react-week3-beverly.vercel.app/
```


---

# 🔼 **STEP 6 — Push Everything to GitHub**

In VS Code:

### 1️⃣ Go to Source Control (left sidebar)

### 2️⃣ Stage all changes

### 3️⃣ Commit message:

```
Completed Week 3 Assignment
```

### 4️⃣ Push:

Click **Sync Changes** or **Push**

Once pushed, GitHub Classroom will automatically grade it.

---




