import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const MainLayout = () => {
  const isActive = ({isActive}) => isActive ? 'active-navlink link' : 'navlink';
  return (
    <div className='container'>
      <header>
        <nav>

          <NavLink to='/' className={isActive}>Home</NavLink>
          <NavLink to='/userlist' className={isActive}>User List</NavLink>
          <NavLink to='/edituser' className={isActive}>Add User</NavLink>
        </nav>
      </header>
      <Outlet/>
      <footer>
        <span>This App was created by Marius Dainys in 2023</span>
      </footer>
      </div>
  )
}

export default MainLayout