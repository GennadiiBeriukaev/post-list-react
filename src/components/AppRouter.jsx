import React from 'react'
import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom"
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import Home from '../pages/Home';
import AboutInner from '../pages/AboutInner';
import PostPage from '../pages/PostPage';



const AppRouter = () => {
  
  return (
    <Routes>
        <Route path="/" element={ <Home/>}/>  
        <Route path="/about" element={ <About/>}>
            <Route path="inner" element={ <AboutInner/>}/>
        </Route>
        <Route path="/posts" element={ <Posts />}/>
        <Route path="/posts/:id" element={ <PostPage />}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default AppRouter
