import React, {useState, useMemo} from 'react';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList'
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import './styles/App.css';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios'
import { useEffect } from 'react';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import {getPageCount} from './utils/pages'
import {getPagesArray} from './utils/pages'
import Pagination from './components/UI/pagination/Pagination';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom"
import About from './pages/About';
import Posts from './pages/Posts';
import NavBar from './components/UI/NavBar/NavBar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter'; 


/*----------------------------------------------------------------------------------------------------------*/




function App() {
  return (
  <div className="main__page">
      <NavBar/>

      <AppRouter/>
    </div>
    
  );
}

export default App;
