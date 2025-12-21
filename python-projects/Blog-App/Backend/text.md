Welcome to the MirX API
Your lightweight, fast, and secure backend for publishing, managing, and delivering blog content.

Whether you're building a personal blog, news platform, or a full-scale content application, the Blog API gives you the tools to create, update, and manage posts with ease.

What This API Offers

Session based Authentication
Secure login and protected routes for admins.

Post Management
Create, read, update, and delete blog posts through REST endpoints.

User System
Register, authenticate, and manage users.

Fast JSON Responses
Optimized for frontend frameworks like React, Vue, and mobile apps.

Available Endpoints

A few key examples (actual URLs depend on your server setup)

Public

GET /all_blogs – Fetch all published posts

GET /blog/:id – Fetch a single post

GET /users - Fetch all bloggers

GET /get_author_data/:id - Fetch information on one specific blogger

POST /create_user - Create a user (Usename, Email, Password)

Authenticated

POST /posts – Create a new post

PUT /posts/:id – Edit a post

DELETE /posts/:id – Remove a post

GET /admin/stats – View dashboard data

Built For Developers

The Blog API is designed with simplicity in mind:

Clean and readable JSON

CORS-friendly

Works smoothly with any frontend

Easy to scale

Built with Flask + SQLAlchemy

Why Use This API?

Perfect for blogs, portfolios, SaaS dashboards, and content apps

Extremely easy to integrate with React, Next.js, Vue, or mobile apps

Designed to be extendable — add comments, likes, admin roles, analytics, etc.

Get Started
