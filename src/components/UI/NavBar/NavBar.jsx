import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <header>
      <div>
          <nav className="navbar">
              <ul className="navbar__links">
                <li className='main__links'><Link to="/">HOME</Link></li>
                <li className='main__links'><Link to="/about">ABOUT</Link></li>
                <li className='main__links'><Link to="/about/inner">ABOUT inner</Link></li>
                <li className='main__links'><Link to="/posts">POSTS</Link></li>

              </ul>
          </nav>
      </div>
    </header>
  )
}

export default NavBar
