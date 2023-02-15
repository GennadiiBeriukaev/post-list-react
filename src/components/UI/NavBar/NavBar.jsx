import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../buttons/MyButton'
import { useContext } from 'react';
import { AuthContext } from '../../../context';

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = ()=>{
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    
    <header>
      <div>
          
          <nav className="navbar">
              <ul className="navbar__links">
                <MyButton
                    onClick={logout}
                    style={{borderRadius: 10,  border: '3px solid grey', color: 'black', fontWeight:'bold'}}>
                    LOG OUT
                </MyButton>
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
