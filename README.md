# 📱 Smartphone Simulator & Digital Best Practices

> An interactive web-based smartphone simulator designed to educate users on digital wellness, cybersecurity awareness, privacy settings, and cognitive bias in modern digital habits.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

---

## 🎯 Project Overview

Developed in an academic context for the **Multimedia Engineering** curriculum (*História das Ciências e das Técnicas* at ISTEC Porto), this interactive tool simulates a modern smartphone interface (iOS-inspired) to demonstrate the contrast between safe vs. risky digital behaviors.

Instead of passive guidelines, users interact directly with simulated apps to observe real-time feedback on battery drain, privacy exposure, social media triggers, and cognitive biases.

---

## ✨ Key Features & Simulations

### 📲 Realistic Device Simulation
- **Lock Screen & Dynamic Island:** Interactive notifications, time tracking, and dynamic status pill.
- **App Shell Navigation:** Smooth transitions between Home Screen and dedicated simulated applications.

### 🔒 Privacy & Permissions Control (`AppDefinicoes.jsx` & `PrivacySettings.jsx`)
- Demonstrates the impact of excessive app permissions (location, camera, background data).
- Highlights best practices for securing mobile devices against unsolicited tracking.

### 🧠 Cognitive Bias & Social Dynamics (`AppSocial.jsx` & `BiasInsights.jsx`)
- Interactive social feed showcasing algorithmic feeds, dopamine loops, and information bias.
- Educational insights explaining psychological mechanisms behind infinite scrolling and digital addiction.

### ⚡ Battery & Background Process Insights (`BatteryDrain.jsx`)
- Visual feedback on how unoptimized settings and heavy apps impact device performance and lifespan.

### 🎯 Focus & Digital Balance (`FocusMode.jsx`)
- Interactive "Focus Mode" demonstrating notification management and distraction mitigation techniques.

---

## 🛠️ Tech Stack

* **Framework & Tooling:** React 18, Vite, JavaScript (ES6+)
* **Styling & Icons:** Tailwind CSS, PostCSS, Lucide React
* **Containerization:** Docker (Multi-stage build with Alpine Nginx)
* **CI/CD:** GitHub Actions (Automated build and deployment)

---

## 👤 Author

**Paulo Silva**
- Website: [paulosilvadev.me](https://paulosilvadev.me/)
- GitHub: [@opaulosilva233](https://github.com/opaulosilva233)