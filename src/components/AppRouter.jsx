import React from 'react'
import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom"
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import Home from '../pages/Home';
import AboutInner from '../pages/AboutInner';
import PostPage from '../pages/PostPage';
import Login from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context';



const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
      isAuth
      ? <Routes>
            <Route path="/" element={ <Home/>}/>  
            <Route path="/about" element={ <About/>}>
                <Route path="inner" element={ <AboutInner/>}/>
            </Route>
            <Route path="/posts" element={ <Posts />}/>
            <Route path="/posts/:id" element={ <PostPage />}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      : <Routes>
          <Route path="/" element={ <Home/>}/>  
          <Route path="/about" element={ <About/>}>
              <Route path="inner" element={ <AboutInner/>}/>
          </Route>
          <Route path="/posts" element={ <Login/>}/>
          <Route path="/posts/:id" element={ <Login/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    )
  }

export default AppRouter
