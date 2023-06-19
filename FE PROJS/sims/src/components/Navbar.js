import React from 'react'
import { faHome, faSignInAlt, faTasks } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState } from 'react'

function Navbar() {
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        { 
            name: "Home",
            path: "/",
            icon: faHome,
          },
          {
            name: "Login",
            path: "/Login",
            icon: faSignInAlt,

          },
          {
            name: "Track",
            path: "/track",
            icon: faTasks,
          }
        ]  
    
    function closeSidebar(){
      setShowSidebar(!showSidebar)
    }
  
    return (
    
    <>
    <div className='navbar container'>
        <div className='logo'>
            <img src='./achievers-logo.png' alt=''></img>
        </div>
        <div className='nav-links'>
        {
            links.map(link=>(
              <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
            ))
          }
        </div>
        <div onClick={() => setShowSidebar(closeSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className='bar'> </div>
          <div className='bar'> </div>
          <div className='bar'> </div>
        </div>
    </div>
    {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  )
}

export default Navbar