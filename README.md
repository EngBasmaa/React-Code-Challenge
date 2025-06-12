# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🧠 React Code Challenge – Skip Sizes Selection

This project is a simple interactive React app that allows users to select their preferred **skip size** for a task (e.g., waste disposal or container size). It demonstrates the use of **Redux Toolkit**, **Tailwind CSS**, **shadcn/ui**, and a custom **dark/light theme** using React context.

---

## ✨ Features

- 🌘 Dark / Light mode toggle.
- 🚚 Display list of skips fetched via Redux.
- 🧩 Reusable `SkipCard` component.
- ✅ Modal confirmation before selecting a skip.
- 🎯 Visually highlights the selected skip.

---

## 📁 Tech Stack

- **React.js** (with Hooks)
- **Redux Toolkit** (for state management)
- **Tailwind CSS** (for styling)
- **shadcn/ui** (UI components)
- **React Context API** (for theme management)
- **Vite** (development server)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/EngBasmaa/React-Code-Challenge.git
cd React-Code-Challenge

2. Install Dependencies
npm install

3. Run the Project
npm run dev

🗂️ Project Structure
src/
│
├── components/
│   ├── SkipCard.jsx         # Card for displaying each skip
│   ├── ConfirmModal.jsx     # Modal shown when selecting
│
├── context/
│   └── ThemeContext.jsx     # Dark/light theme logic
│
├── features/
│   └── skips/
│       ├── skipSlice.js     # Redux slice
│       └── skipsData.js     # Sample data or backend call
│
├── pages/
│   └── SkipSizesPage.jsx    # Main page with skip options
│
├── App.jsx
└── main.jsx


🛠️ How It Works
On page load, the Redux action getSkips() is dispatched.

Skips are displayed using a grid of SkipCard components.

Clicking the Select button on a card opens a modal to confirm.

Upon confirmation, the skip is marked as selected visually.

You can toggle the theme (dark/light) from the top.

📷 Live Demo:


📜 License
This project is licensed under the MIT License — feel free to use and modify it.

👩‍💻 Developed by
Basma Elmasry
GitHub: EngBasmaa



