# 🌐 Portfolio Projects by Dahee Kim

Welcome! This is a showcase of full-stack and frontend web applications I built, covering tour booking, streaming, video sharing, and recipe searching platforms. Each project is either fully deployed or presented with a preview and source code. 

---

## 🗂 Project Overview

| Project              | Type        | Tech Stack                                                  | Key Features                                                                                         | Live Demo |
|----------------------|-------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-----------|
| **Natours**          | Full Stack  | Node.js, Express, MongoDB, Mongoose, Pug, Stripe, Mapbox, AWS S3, SendGrid, Koyeb | Tour booking, payments, transactional emails, role-based access, admin dashboard                    | [🌍 Link](https://helpful-prawn-natours-dh-777b7d7d.koyeb.app/) |
| **Netflix & Chill**  | Full Stack  | React, Spring Boot, MySQL (Railway), Docker, Redux & Context API, Axios, Render, Netlify | Movie streaming, auth, admin/user roles, community board, Dockerized backend                         | [🎬 Link](https://net-flix-clone-dahee-kim.netlify.app/)         |
| **Wetube**           | Full Stack  | Node.js, Express, MongoDB, Mongoose, Pug, AWS S3, Multer, GitHub OAuth, Webpack, Fly.io | Video upload/playback, comments, GitHub login, real-time interaction, secure media handling          | [📹 Link](https://wetube-reloaded-2024-daheekim.fly.dev/)       |
| **Forkify**          | Frontend    | Vanilla JS, HTML, CSS, REST API, Netlify                     | Recipe search/bookmark, real-time serving update, modular design, clean architecture                 | [🥄 Link](https://forkify-daheekim.netlify.app/)                 |

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

## 🛠 Tech Highlights

- **Frontend**: React, HTML5, CSS3, SCSS, JavaScript (ES6+), Pug, Redux  
- **Backend**: Node.js, Express, Spring Boot  
- **Database**: MongoDB, Mongoose, MySQL  
- **Cloud/DevOps**: Docker, AWS S3, Netlify, Fly.io, Render, Koyeb  
- **APIs**: Stripe, Mapbox, GitHub OAuth, Forkify API, SendGrid  
- **Auth & Security**: JWT, OAuth, role-based access  
- **Deployment**: CI/CD pipelines, Docker Compose, environment configs

---

## ✨ Let's Connect

Feel free to explore the demos, and if you'd like to know more about the implementations, reach out via the contact section on my portfolio or GitHub.

---

> 💡 Pro tip: All media assets use optimized lazy loading for better performance and user experience.