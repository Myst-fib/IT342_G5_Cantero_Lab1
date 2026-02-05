# IT342_G5_Cantero_Lab1

## Project Overview

This repository contains the implementation of a **User Registration and Authentication System**.  
The project includes:

1. **Backend** – Spring Boot  
2. **Web Application** – ReactJS  
3. **Documentation** – FRS with diagrams and screenshots  
4. **Task Checklist** – Progress tracking for lab tasks

---

## Repository Structure

IT342_G5_Cantero_Lab1
├─ /web # ReactJS frontend
├─ /backend # Spring Boot backend
├─ /mobile # Mobile app (not implemented yet)
├─ /docs # Documentation (FRS, diagrams, screenshots)
├─ README.md
└─ TASK_CHECKLIST.md


---

## 1️⃣ Backend – Spring Boot

**Features:**

- **API Endpoints:**
  - `POST /api/auth/register` – Register a new user
  - `POST /api/auth/login` – Login existing user
  - `GET /api/user/me` – Get current user info (protected)
- **Database:** MySQL
- **Security:** Passwords encrypted using BCrypt
- **Tech Stack:** Java, Spring Boot, Spring Security, JPA/Hibernate

**Setup Instructions:**

1. Install Java 17+ and Maven.  
2. Configure MySQL and update `/backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
Build and run backend:

cd backend
mvn clean install
mvn spring-boot:run
2️⃣ Web Application – ReactJS
Features:

Register page

Login page

Dashboard/Profile page (protected)

Logout functionality

Setup Instructions:

Install Node.js (v18+) and npm.

Install dependencies and run the app:

cd web
npm install
npm start
Access the app at http://localhost:3000.

3️⃣ Documentation (FRS – Partial)
ERD – Database structure diagram

UML Diagrams – Class and sequence diagrams

Web UI Screenshots:

Register page

Login page

Dashboard/Profile page

Logout functionality

All documentation is stored inside /docs.

4️⃣ Task Checklist Update
All tasks are tracked in TASK_CHECKLIST.md:

DONE – Completed tasks (with commit hash)

IN-PROGRESS – Tasks currently being worked on

TODO – Pending tasks

Notes
Mobile app will be implemented in a future session.

Use this repository for Lab 1 progress tracking and submission.

Author: Patrick Cantero
Course: IT342 – System Integration
Lab: Lab 1 – User Registration & Authentication System