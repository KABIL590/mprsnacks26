mpr-snacks/
 ├─ public/
 │   ├─ logo.png
 │   ├─ kadalai.jpg
 │   ├─ ellu.jpg
 │   └─ koko.jpg
 ├─ src/
 │   ├─ main.jsx
 │   ├─ App.jsx
 │   ├─ firebase.js
 │   └─ index.css
 ├─ index.html
 ├─ package.json
 ├─ vite.config.js
 ├─ tailwind.config.js
 ├─ postcss.config.js
 ├─ README.md
 └─ .gitignore
{
  "name": "mpr-snacks",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "firebase": "^10.11.0",
    "lucide-react": "^0.263.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.5.4",
    "vite": "^5.1.0"
  }
}
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MPR Snacks</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
node_modules/
dist/
.vscode/
.env
# MPR Snacks — Vite + React

## Setup
1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173

## Build
`npm run build`

## Deploy on Vercel
1. Push repository to GitHub
2. Create a Vercel account and import the repo
3. Framework preset: Vite
4. Build command: `vite build`
5. Output directory: `dist`
6. Deploy

Make sure `/public` contains: logo.png, kadalai.jpg, ellu.jpg, koko.jpg
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcrkkPWwNOI-xb-iRfLXIKB5OFxw0LEaI",
  authDomain: "mprsnacks26.firebaseapp.com",
  projectId: "mprsnacks26",
  storageBucket: "mprsnacks26.firebasestorage.app",
  messagingSenderId: "109588160958",
  appId: "1:109588160958:web:660a9ae3bd8b64def159ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// appId used as identifier for paths
export const appId = firebaseConfig.projectId || "mpr-snacks";
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
