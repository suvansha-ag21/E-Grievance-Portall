# E-Grievance Redressal Portal

A full-stack web application for digital grievance registration, tracking, assignment, and resolution.

The **E-Grievance Redressal Portal** provides separate workflows for citizens, officers, and administrators. Citizens can submit and track complaints, officers can manage assigned complaints, and administrators can manage users, complaints, officers, departments, and announcements.

---

## 📌 Overview

The E-Grievance Redressal Portal is designed to digitize and simplify the grievance-management process through a centralized web platform.

Instead of relying on manual complaint submission and repeated follow-ups, citizens can register complaints online and monitor their progress. Authorized officers can review and process assigned complaints, while administrators can manage users, officers, departments, complaints, and announcements.

The system uses role-based access control to provide different functionalities according to the user's role.

---

## 🎯 Objectives

The main objectives of the project are:

- Digitize the grievance submission process
- Provide citizens with online complaint registration
- Allow citizens to track submitted complaints
- Provide role-based access for different users
- Allow officers to manage assigned complaints
- Allow administrators to manage users and complaints
- Provide complaint assignment functionality
- Manage departments through the administrative interface
- Provide announcement management
- Maintain centralized grievance records
- Improve transparency and accountability in the grievance-resolution process

---

# ✨ Features

## 👤 Citizen

Citizens can:

- Register an account
- Log in securely
- Access their dashboard
- Raise a complaint
- View submitted complaints
- View individual complaint details
- Delete complaints
- Track complaint progress
- View announcements
- Manage their profile

---

## 👨‍💼 Officer

Officers can:

- Log in through the authentication system
- Access the officer dashboard
- View assigned complaints
- View individual complaint details
- Update complaint status
- Manage complaints assigned to them

---

## 🛡️ Administrator

Administrators can:

- Access the admin dashboard
- View all complaints
- View and manage users
- Create users
- Update users
- Delete users
- Create officers
- Assign officers to complaints
- Manage departments
- Create announcements
- Update announcements
- Delete announcements
- View announcements

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- React Router
- Tailwind CSS
- CSS
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API

## Development Tools

- Git
- GitHub
- npm
- Visual Studio Code

---

# 🏗️ System Architecture

```text
                         ┌───────────────────────┐
                         │        Citizen        │
                         └───────────┬───────────┘
                                     │
                                     │
                         ┌───────────▼───────────┐
                         │     React Frontend     │
                         │      Vite + React      │
                         └───────────┬───────────┘
                                     │
                              HTTP / REST API
                                     │
                         ┌───────────▼───────────┐
                         │    Express Backend     │
                         │       Node.js          │
                         └───────────┬───────────┘
                                     │
                                     │
                         ┌───────────▼───────────┐
                         │        MongoDB         │
                         │       Mongoose         │
                         └────────────────────────┘

```
📂 Project Structure
```text
E-Grievance-Redressal-Portal/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── AnnouncementsPanel.jsx
│   │   │   ├── ComplaintCard.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Stats.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Announcements.jsx
│   │   │   ├── AssignOfficer.jsx
│   │   │   ├── AssignedComplaints.jsx
│   │   │   ├── ComplaintDetails.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ManageAnnouncements.jsx
│   │   │   ├── ManageComplaints.jsx
│   │   │   ├── ManageDepartments.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   ├── MyComplaints.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── OfficerComplaintDetails.jsx
│   │   │   ├── OfficerDashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── RaiseComplaint.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── adminService.js
│   │   │   ├── announcementService.js
│   │   │   ├── authService.js
│   │   │   ├── complaintService.js
│   │   │   ├── departmentService.js
│   │   │   └── officerService.js
│   │   │
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Sidebar.css
│   │   │   └── admin.css
│   │   │
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── server/
│   └── ...
│
├── docs/
│
├── .gitignore
└── README.md
```

🤝 Contributors

This project was developed as a collaborative project.

Contributors:-
- Harish
- Himanshi Yadav
- Suvansha Agarwal

