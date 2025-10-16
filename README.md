# 🧑‍⚕️ Patient Management Dashboard (React)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://assignment-eta-ashy.vercel.app/)

A modern and responsive **React-based Patient Management Dashboard** to display patient records, view detailed information in a popup modal, and demonstrate key React features like **Context API**, **Lazy Loading**, **React Router**, and **Dynamic Fetching**.

---

## 🚀 Features

### 🩺 1. Patient List
- Fetches patient data dynamically from `public/patient.json`.
- Displays each patient as a card with name and ID.
- Responsive grid layout for all screen sizes (mobile → desktop).

### 🔍 2. View Patient Details
- Clicking **"See More"** opens a popup (`Pop.jsx`) with complete details:
  - Illness, reason, consultant doctor, address, medicine schedule, and first visit date.
- Closes smoothly using either the ✕ button or the **Close** button.

### ⚡ 3. Lazy Loading
- Components like `Card` are **lazy-loaded** using React’s `lazy()` and `Suspense`.
- Improves performance by loading components only when needed.

### 🧠 4. Context API Integration
- Uses `DataContext` (`context/Data.jsx`) to manage global app state:
  - `patients`, `loading`, and `error`.
- Keeps code organized and avoids prop-drilling.

### 🛣️ 5. Routing
- Uses **React Router** for multi-page navigation.
- Pages include:
  - `Home.jsx` — Landing page
  - `About.jsx` — About information
  - `Patient.jsx` — Patient dashboard

### 🪶 6. Clean UI and UX
- Built with **Tailwind CSS**.
- Fully responsive design.
- Smooth hover and transition effects for cards and buttons.
- Centered modal with dark background overlay.

---

## 🧩 Folder Structure
project-root/
├── public/
│ └── patient.json
├── src/
│ ├── component/
│ │ ├── Card.jsx
│ │ ├── Pop.jsx
│ │ ├── Nav.jsx
│ │ ├── Footer.jsx
│ ├── context/
│ │ └── Data.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ └── Patient.jsx
│ ├── routes/
│ │ └── Route.jsx
│ └── index.js
├── package.json
└── README.md


---

## ⚙️ Tech Stack

- **React 18+**
- **Tailwind CSS**
- **Context API**
- **React.lazy() + Suspense**
- **React Router**
- **Fetch API**

---

## 🧰 Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/mishra-anik/Assignment.git


Example Data (public/patient.json)
{
    "id": "PT-0001",
    "name": "Aarav Sharma",
    "address": "12 Green Park, Delhi, India",
    "illness": "Hypertension",
    "reason": "Routine check-up and blood pressure monitoring",
    "consultant_doctor": "Dr. Meera Kapoor",
    "medicines": ["Amlodipine 5mg"],
    "medicine_times": ["08:00"],
    "time_of_medicine_run": "Daily morning",
    "first_visit": "2024-03-11T09:30:00+05:30"
  }


  🖼️ Components Overview
Card.jsx

Displays brief patient info.

Includes "See More" button.

Calls onSeeMore(data) to open modal.

Pop.jsx

Popup modal showing detailed patient info.

Handles close actions.

Nav.jsx

Top navigation bar for routing between pages.

Footer.jsx

Bottom section with static information.

🖼️ Pages Overview
Home.jsx

Landing page for the app with hero or welcome section.

About.jsx

Static page describing the app or organization.

Patient.jsx

Main page displaying patient cards.

Handles fetching data, lazy loading components, and showing Pop.jsx modals.


