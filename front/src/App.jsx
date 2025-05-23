import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import MainPage from './page/mainpage/MainPage'
import Services from './page/services/Services'
import Leadership from './page/leadership/Leadership'
import About from './page/about/About'
import Board from './page/board/Board'
import Contact from './page/contact/Contact'

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
  }
])

function App() {
  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default App
