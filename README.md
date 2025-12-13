# 🏠 StyleDecor – Smart Home & Ceremony Decoration Booking System (Client)

## 🔗 Live Website

https://style-home-decor.web.app/

## 📌 Project Overview

StyleDecor is a modern web-based booking platform for home and ceremony decoration services.  
Users can explore decoration services, book appointments, make payments, and track service progress.  
The system also includes dedicated dashboards for Admin and Decorators.

This project is developed as part of an assignment to demonstrate full-stack development skills, real-world workflow implementation, and role-based system design.

---

## 🎯 Key Features (Client Side)

### 🌐 Public Features

- Responsive Home Page with animated hero section
- Services listing with search & filter
- Service details page
- Service coverage map using React Leaflet
- Authentication (Login / Register)
- Error & Loading pages

### 👤 User Dashboard

- View profile
- View booking history
- Book services
- Cancel booking (before payment/assignment)
- Stripe payment integration
- Payment history

### 🎨 Decorator Dashboard

- View assigned projects
- Update project status step-by-step
- Today's schedule
- Earnings summary

### 🛠 Admin Dashboard

- Dashboard analytics overview
- Manage services (CRUD)
- Manage users
- Make user a decorator
- Manage decorators
- Manage bookings
- Assign decorator to booking
- Revenue & analytics preview

---

## 🔐 Authentication & Authorization

- Firebase Authentication
- JWT-based protected routes
- Role-based routing (Admin / User / Decorator)
- Private routes stay logged in on reload

---

## 🧱 Tech Stack (Client)

- React.js
- React Router
- TanStack React Query
- Tailwind CSS
- DaisyUI
- Firebase Authentication & Hosting
- Axios
- Lucide Icons
- Stripe (Client side)

---

## 📦 NPM Packages Used

- react
- react-router-dom
- @tanstack/react-query
- axios
- firebase
- react-hot-toast
- lucide-react
- stripe-js
- react-leaflet

---

## 🔐 Environment Variables

Create a `.env` file and add:

```env
VITE_apiKey=FIREBASE_API_KEY
VITE_authDomain=FIREBASE_AUTH_DOMAIN
VITE_projectId=FIREBASE_PROJECT_ID
VITE_storageBucket=FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=FIREBASE_SENDER_ID
VITE_appId=FIREBASE_APP_ID
VITE_API_URL=BACKEND_API_URL
```

Email: akash@gmail.com
Password: akash123
