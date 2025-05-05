# 🌐 Portfolio Projects by Dahee Kim

Welcome! This is a showcase of full-stack and frontend web applications I built, covering tour booking, streaming, video sharing, recipe searching, and wedding planning platforms. Each project is either fully deployed or presented with a preview and source code.

---

## 🗂 Project Overview

| Project              | Type        | Tech Stack                                                  | Key Features                                                                                         | Live Demo |
|----------------------|-------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-----------|
| **Natours**          | Full Stack  | Node.js, Express, MongoDB, Mongoose, Pug, Stripe, Mapbox, AWS S3, SendGrid, Koyeb | Tour booking, payments, transactional emails, role-based access, admin dashboard                    | [🌍 Link](https://helpful-prawn-natours-dh-777b7d7d.koyeb.app/) |
| **Netflix & Chill**  | Full Stack  | React, Spring Boot, MySQL (Railway), Docker, Redux & Context API, Axios, Render, Netlify | Movie streaming, auth, admin/user roles, community board, Dockerized backend                         | [🎬 Link](https://net-flix-clone-dahee-kim.netlify.app/)         |
| **Wetube**           | Full Stack  | Node.js, Express, MongoDB, Mongoose, Pug, AWS S3, Multer, GitHub OAuth, Webpack, Fly.io | Video upload/playback, comments, GitHub login, real-time interaction, secure media handling          | [📹 Link](https://wetube-reloaded-2024-daheekim.fly.dev/)       |
| **Forkify**          | Frontend    | Vanilla JS, HTML, CSS, REST API, Netlify                     | Recipe search/bookmark, real-time serving update, modular design, clean architecture                 | [🥄 Link](https://forkify-daheekim.netlify.app/)                 |
| **WeddingYou**          | Full Stack    | React, Spring Boot, MySQL (Railway), Docker, AWS S3, SMTP, PortOne (Iamport), Netlify                     | Wedding planner-client matching, pre-quote system, secure payments, email notifications                | [💍 Link](https://weddingyou-dahee-kim.netlify.app/)                 |

---

## 📍 Detailed Project Descriptions

### 🧭 Natours – Eco-Tour Booking App

**Full Stack**: Node.js, Express, MongoDB, Mongoose, Pug, Stripe, Mapbox, AWS S3, SendGrid, Koyeb 
Natours is a dynamic eco-tour booking platform featuring a polished UI and secure infrastructure. It integrates **Stripe** for seamless payments, **Mapbox** for map-based exploration, **AWS S3** for scalable image storage, and **SendGrid** for email automation.

- 💳 Stripe payments for booking tours
- 📬 SendGrid transactional emails:
  - Welcome emails on sign-up  
  - Password reset workflow
- 🗺 Interactive Mapbox tour interface
- ☁️ AWS S3 image upload with CORS config
- 🔐 JWT-based auth & role-based user access
- 🔐 Robust Security Middleware:
	- 🛡️ Helmet: Sets secure HTTP headers
	- 🚫 Rate Limiting: Prevents DoS attacks using express-rate-limit
	- 🧼 Data Sanitization:
		- express-mongo-sanitize: Prevents NoSQL injection
		- xss-clean: Protects against cross-site scripting
	- ⚙️ HPP (HTTP Parameter Pollution) Protection: Handled via hpp
- 📊 Admin dashboards: tour, user, booking, review management
- 📈 Billing graph and summary table for both users and admins to visualize booking history, amount spent
- 🧱 Clean MVC architecture


---

### 🎬 Netflix and Chill – Streaming Platform

**Full Stack**: React, Spring Boot, MySQL (Railway), Docker, Redux & Context API, Axios, Render, Netlify
A Netflix-inspired platform with a modern responsive UI, real-time data fetching, user-auth with roles, and a full-featured admin dashboard. Deployed with Docker for easy scaling.

- 🔍 Movie discovery and search
- ❤️ Favorite list with local persistence
- 🧑‍💻 Role-based auth (user/admin)
- 📋 Admin dashboards: manage users, content, comments
- 📦 Full Docker setup with cloud deployment (Netlify, Railway, Render)

---

### 🎥 Wetube – YouTube-Style Video Sharing Platform

**Full Stack**: Node.js, Express, MongoDB, Mongoose, Pug, AWS S3, Multer, GitHub OAuth, Webpack, Fly.io
Wetube enables video sharing, real-time commenting, GitHub-based login, and seamless video uploads. It emphasizes security and UX, with AWS for reliable file hosting.

- 🎥 Video recording & streaming
- ☁️ Multer & AWS S3 for uploads
- 🔐 GitHub OAuth for quick login
- 🗨 Live commenting feature
- 📱 Fully responsive design
- 🗄 MongoDB with Mongoose for database management
- ⚙️ Webpack for optimized build and bundling
- 🚀 Deployed with Fly.io for scalability

---

### 🍽️ Forkify – Interactive Recipe Finder

**Frontend Only**: Vanilla JS, HTML, CSS, Netlify  
A minimalist recipe app that pulls data from a 3rd-party API, supports bookmarking, and adjusts servings in real-time. Built from scratch without frameworks to demonstrate core JavaScript proficiency.

- 🔍 API-based recipe search
- 📑 Bookmarks with localStorage
- 🧮 Dynamic serving adjustment
- 📐 Mobile-first UI

---

## 💍 WeddingYou – Wedding Planning Platform

**Full Stack**: React, Spring Boot, MySQL, Docker, AWS S3, SMTP, PortOne (Iamport), Netlify, Railway

WeddingYou is an elegant and intuitive platform that streamlines wedding planning — from guest management to vendor scheduling. It features real-time updates, robust JPA entity modeling, and secure cloud-based infrastructure.

### 🌟 Key Features

- 📝 **Pre-Quote Matching System**: Clients submit wedding plans and budgets; planners match based on preferences.
- 🤝 **Mutual Like-Based Matching**: Swipe-style interface for planner-client connections.
- 💳 **PortOne (Iamport) Payment Integration**:  
  - Secure and flexible payment workflow  
  - Real-time transaction status and handling
- 📬 **SMTP Email Notifications**: Password reset and transactional emails.
- 📷 **AWS S3 Image Uploads**: Host profile and event images with CORS configuration.
- ⚙️ **Spring Data JPA**:  
  - Entity relationships: `@OneToMany`, `@ManyToOne`, `@ManyToMany`
- ⚡ **Optimistic UI**: Instant UI updates on RSVP, guest edits, etc.
- 🌐 **Dockerized Full Stack**: Unified Dockerfile & Compose setup for orchestration.
- 📱 **Responsive UI**: Mobile-friendly interface.
- 🔐 **Security**:
  - Spring DTO/entity validation  
  - Token-based auth and CORS configuration

### 🏗 Architecture

- Domain-driven Spring Boot REST API  
- Clean component-based React frontend  
- Modular design with real-world mapping of domain entities

---

## 🛠 Tech Highlights

- **Frontend**: React, Redux, HTML5, CSS3, SCSS, JavaScript (ES6+), Pug  
- **Backend**: Node.js, Express, Spring Boot  
- **Database**: MongoDB (Mongoose), MySQL  
- **Cloud & DevOps**: Docker, Docker Compose, Netlify, Railway, Render, Koyeb, Fly.io  
- **Storage & Media**: AWS S3  
- **APIs & Integrations**: Stripe, PortOne (Iamport), Mapbox, GitHub OAuth, Forkify API, SendGrid, SMTP  
- **Authentication & Security**: JWT, OAuth 2.0, Role-Based Access Control  
- **Deployment & CI/CD**: CI/CD pipelines, environment-specific configurations  

---

## ✨ Let's Connect

Feel free to explore the demos, and if you'd like to know more about the implementations, reach out via the contact section on my portfolio or GitHub.

---

> 💡 Pro tip: All media assets use optimized lazy loading for better performance and user experience.