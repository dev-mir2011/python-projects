import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getBlogs, usersGET, isLoggedIn, userDataGET, getCurrentUserBlogs } from './routes.js'

import Home from './components/views/Home.jsx'
import Blogs from './components/views/Blogs.jsx'
import Header from './components/elements/header.jsx'
import Bloggers from './components/views/Bloggers.jsx'
import Login from './components/views/Login.jsx'
import CreateAccount from './components/views/Create-Account.jsx';
import Settings from './components/views/Settings.jsx';
import UserSettings from './components/views/User-Settings.jsx';
import UserBlogs from './components/views/User-Blogs.jsx';
import DeleteAccount from './components/views/Delete-Account.jsx'
import ScrollToTop from './Scroll-to-top.jsx'
import EmailUpdate from './components/views/Email-Update.jsx'
import PasswordUpdate from './components/views/Password-Update.jsx'
import UsernameUpdate from './components/views/Username-Update.jsx'
import CreateBlog from './components/views/Create-Blog.jsx'
import EditBlogPost from './components/views/Edit-Blog-Post.jsx'
import DeleteBlogPost from './components/views/Delete-Blog-Post.jsx'
import UpdateBio from './components/views/Update-Bio.jsx'
import SingleUser from './components/views/Single-User.jsx'
import SingleBlogPost from './components/views/Single-Blog-Post.jsx'

function AppContent() {
  const location = useLocation()

  const [blogs, setBlogs] = useState([])
  const [users, setUsers] = useState([])
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [currentUserBlogs, setCurrentUserBlogs] = useState([])

  async function getAllBlogs() {
    const blogPosts = await getBlogs()
    setBlogs(blogPosts)
  }

  async function getCurrentUserBlogPosts() {
    const currentUserBlogPosts = await getCurrentUserBlogs()
    setCurrentUserBlogs(currentUserBlogPosts)
  }

  async function getAllUsers() {
    const usersData = await usersGET()
    setUsers(usersData)
  }

  async function checkIfLoggedIn() {
    const res = await isLoggedIn()
    setIsUserLoggedIn(res.message)
  }

  async function getCurrentUserInformation() {
    const response = await userDataGET()
    setCurrentUser(response)
  }

  useEffect(() => {
    getAllBlogs()
    getAllUsers()
  }, [location.pathname])

  useEffect(() => {checkIfLoggedIn()}, [location.pathname])

  useEffect(() =>{
    if (isUserLoggedIn){
      getCurrentUserInformation()
    }

  }, [isUserLoggedIn])

  useEffect(() => {
    if (isUserLoggedIn){
      getCurrentUserBlogPosts()
    }
  }, [isUserLoggedIn])

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }


  return (
    <>
      <Header isLoggedIn={isUserLoggedIn} currentUser={currentUser} />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isUserLoggedIn} />} />
        <Route path="/blogs" element={<Blogs blogPosts={blogs} isLoggedIn={isUserLoggedIn} />} />
        <Route path="/bloggers" element={<Bloggers users={users} isLoggedIn={isUserLoggedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user-settings" element={<UserSettings Theme={theme} toggleTheme={toggleTheme} username={currentUser.username} email={currentUser.email} userid={currentUser.USER_ID} bio={currentUser.bio} />} />
        <Route path="/user-blogs" element={<UserBlogs currentUserBlogPosts={currentUserBlogs} />} />
        <Route path="/delete-user" element={<DeleteAccount />} />
        <Route path="/update-email" element={<EmailUpdate />} />
        <Route path="/update-username" element={<UsernameUpdate />} />
        <Route path="/update-password" element={<PasswordUpdate />} />
        <Route path="/update-bio" element={<UpdateBio />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlogPost />} />
        <Route path="/delete-blog/:id" element={<DeleteBlogPost />} />
        <Route path="/blog/:id" element={<SingleBlogPost />} />
        <Route path="/blogger/:id" element={<SingleUser />} />
      </Routes>

      <footer>
        <h1 className="blue">© 2025 MirX Blog</h1>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
