# 🌐 Portfolio Projects by Dahee Kim

Welcome! This is a showcase of full-stack and frontend web applications I built,
including web applications such as a full-stack platform for global developer collaboration (Ongoing Project), a tour booking system, a wedding planning tool, a movie search engine, a video sharing site and a recipe finder.
Each project is either fully deployed or presented with a preview and source code.

---

## 🗂 Project Overview

| Project                 | Type       | Tech Stack                                                                                          | Key Features                                                                                          | Live Demo                                                       |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Thinkstorm(Ongoing)** | Full Stack | Nest.js, Next.js, Prisma, PostgreSQL, AWS S3, SendGrid, GitHub OAuth, Redis, Docker, Fly.io, Vercel | A full-stack collaboration platform where developers team up, build real projects, and grow together. | [🌩️ Link](https://thinkstorm.app/)                              |
| **Natours**             | Full Stack | Node.js, Express, MongoDB, Mongoose, Pug, Stripe, Mapbox, AWS S3, SendGrid, Koyeb                   | Tour booking, payments, transactional emails, role-based access, admin dashboard                      | [🌍 Link](https://helpful-prawn-natours-dh-777b7d7d.koyeb.app/) |
| **WeddingYou**          | Full Stack | React, Spring Boot, PostgreSQL (Fly.io), Docker, AWS S3, SMTP, PortOne (Iamport), Netlify, Fly.io   | Wedding planner-client matching, pre-quote system, secure payments, email notifications               | [💍 Link](https://weddingyou-dahee-kim.netlify.app/)            |
| **Netflix & Chill**     | Full Stack | React, Spring Boot, PostgreSQL (Supabase), Docker, Redux & Context API, Axios, Render, Netlify      | Movie streaming, auth, admin/user roles, community board, Dockerized backend                          | [🎬 Link](https://net-flix-and-chill.netlify.app/)        |
| **Wetube**              | Full Stack | Node.js, Express, MongoDB, Mongoose, Pug, AWS S3, Multer, GitHub OAuth, Webpack, Fly.io             | Video upload/playback, comments, GitHub login, real-time interaction, secure media handling           | [📹 Link](https://wetube-reloaded-2024-daheekim.fly.dev/)       |
| **Forkify**             | Frontend   | Vanilla JS, HTML, CSS, REST API, Netlify                                                            | Recipe search/bookmark, real-time serving update, modular design, clean architecture                  | [🥄 Link](https://forkify-daheekim.netlify.app/)                |

---

## 📍 Detailed Project Descriptions

### 🌩️ ThinkStorm – Real-World Developer Collaboration Platform (Ongoing)

**Full Stack**: Nest.js, Next.js, PostgreSQL, Prisma, Redis, Docker, Fly.io, Vercel, AWS S3, SendGrid, GitHub OAuth
ThinkStorm is a full-stack collaboration platform designed to empower developers, learners, and innovators to bring ideas to life through real-world projects. The platform supports team-based project building, learning bootcamps, and skill-based hiring - all within a secure, scalable environment.

- 🧱 Full-stack architecture: modular, scalable system with Nest.js + Next.js
- 🔐 JWT-based authentication and secure session handling
- 📬 SendGrid integration:
  - Automated onboarding emails
  - Password reset flow
- 🧠 Redis-backed caching and rate limiting for performance & security
- 🧪 CI/CD pipelines: Jest testing integrated with Fly.io deployment
- ☁️ AWS S3: scalable image and asset storage with public access control
- 🐳 Containerized using Docker, deployed on Fly.io and Vercel
- 🔧 GitHub OAuth for easy and secure user onboarding
- 📁 Feature-rich collaboration system: Project creation, tagging, and team roles
- 🎯 Weekly coding challenges & global leaderboard
- 📚 Guided learning bootcamps with certifications
- 💼 Resume-free hiring based on project contributions
- 🧑‍🏫 Mentorship support & structured onboarding system
- 🌍 Global developer networking through real-time updates and notifications

---

## 🧭 Natours – Eco-Tour Booking App

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

## 💍 WeddingYou – Wedding Planning Platform

**Full Stack**: React, Spring Boot, PostgreSQL (Fly.io), Docker, AWS S3, SMTP, PortOne (Iamport), Netlify, Fly.io

WeddingYou is an elegant and intuitive platform that streamlines wedding planning - from guest management to vendor scheduling. It features real-time updates, robust JPA entity modeling, and secure cloud-based infrastructure.

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

## 🎬 Netflix and Chill – Streaming Platform

**Full Stack**: React, Spring Boot, PostgreSQL (Supabase), Docker, Redux & Context API, Axios, Render, Netlify
A Netflix-inspired platform with a modern responsive UI, real-time data fetching, user-auth with roles, and a full-featured admin dashboard. Deployed with Docker for easy scaling.

- 🔍 Movie discovery and search
- ❤️ Favorite list with local persistence
- 🧑‍💻 Role-based auth (user/admin)
- 📋 Admin dashboards: manage users, content, comments
- 📦 Full Docker setup with cloud deployment (Netlify, Render, Supabase)

---

## 🎥 Wetube – YouTube-Style Video Sharing Platform

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

## 🍽️ Forkify – Interactive Recipe Finder

**Frontend Only**: Vanilla JS, HTML, CSS, Netlify  
A minimalist recipe app that pulls data from a 3rd-party API, supports bookmarking, and adjusts servings in real-time. Built from scratch without frameworks to demonstrate core JavaScript proficiency.

- 🔍 API-based recipe search
- 📑 Bookmarks with localStorage
- 🧮 Dynamic serving adjustment
- 📐 Mobile-first UI

---

## 🛠 Tech Highlights

- **Frontend**: Next.js, React, Redux, Context API, Tanstack Query, HTML5, CSS3, SCSS, Tailwind CSS, JavaScript (ES6+), Pug
- **Backend**: Next.js, Node.js, Express, Spring Boot, Prisma
- **Database**: Redis, PostgreSQL, MongoDB (Mongoose), MySQL
- **Cloud & DevOps**: Docker, Docker Compose, Vercel, Netlify, Render, Koyeb, Fly.io
- **Testing**: Jest, Cypress, Vitest, Storybook
- **Storage & Media**: AWS S3
- **APIs & Integrations**: Stripe, PortOne (Iamport), Mapbox, GitHub OAuth, Forkify API, SendGrid, SMTP
- **Authentication & Security**: JWT, OAuth 2.0, Role-Based Access Control
- **Deployment & CI/CD**: CI/CD pipelines, environment-specific configurations

---

## ✨ Let's Connect

Feel free to explore the demos, and if you'd like to know more about the implementations, reach out via the contact section on my portfolio or GitHub.

---

> 💡 Pro tip: All media assets use optimized lazy loading for better performance and user experience.
