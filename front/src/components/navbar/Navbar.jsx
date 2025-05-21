import React from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { path : '/', label : 'Home' },
  { path : '/about', label : 'About' },
  { path : '/services', label : 'Services' },
  { path : '/leaders', label : 'Leaders' },
  { path : '/board', label : 'Board' },
  { path : '/contact', label : 'Contact' },
]

const MenuItem = ({path, label, onClick}) => (
  <li>
    <Link to={path} className='hover:text-blue-600 transition duration-300'
     onClick={onClick}>
      {label}
     </Link>
  </li>
)

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50'>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className='text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8'><a href='/'>XYZ Co</a></h1>

        <div className='hidden lg:flex justify-center'>
          <ul className='flex gap-8 text-lg'>
            {menuItems.map((item) =>(
                <MenuItem key={item.path} {...item} />
              ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
