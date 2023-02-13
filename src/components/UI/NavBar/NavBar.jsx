import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <header>
      <div className="navbar">
          <div className="navbar__links">
            <Link className='main__links' to="/about">About site</Link> 
            <Link className='main__links' to="/posts">Posts</Link>
          </div>
      </div>
    </header>
  )
}

export default NavBar
