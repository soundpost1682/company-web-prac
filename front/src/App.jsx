import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import axios from 'axios'

import MainPage from './page/mainpage/MainPage'
import Services from './page/services/Services'
import Leadership from './page/leadership/Leadership'
import About from './page/about/About'
import Board from './page/board/Board'
import Contact from './page/contact/Contact'
import AdminLogin from './page/admin/AdminLogin'
import { useEffect, useState } from 'react'

function AuthRedirectRoute(){
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(()=>{
    const verifyToken = async()=>{
      try{
        const response = await axios.post('http://localhost:3000/api/auth/verify-token', {}, {withCredentials:true} )
      setIsAuthenticated(true)}
      catch(error){
        console.log('Token verify failed.', error)
        setIsAuthenticated(false)
    }
  }
  verifyToken()
},[])

  if (isAuthenticated ===null){
    return null
  }
  return isAuthenticated ? <Navigate to='/admin/posts' replace /> : <Outlet/>
}

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        index : true,
        element : <MainPage/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/services',
        element : <Services/>
      },
      {
        path : '/leadership',
        element : <Leadership/>
      },
      {
        path : '/board',
        element : <Board/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
    ]
  },
  {
    path : '/admin',
    element : <AuthRedirectRoute/>,
    children:[{index:true, element:<AdminLogin/>}],
  },
])

function App() {
  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default App
