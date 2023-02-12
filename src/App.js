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

/*----------------------------------------------------------------------------------------------------------*/




function App() {

  /*-------------------------------   STATES     ---------------------------*/


  const [posts, setPosts] = useState([
      /* {id:1, title:'aavascript', body:'Aava-scriptizer'},
      {id:2, title:'cytuhon', body:'Bm Bytuhon'},
      {id:3, title:'besting', body:'Cm testing man'}, */
  ])
  

  const [filter, setFilter] = useState({sort:'', query:''}) 

  const [modal, setModal] = useState('false');

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
  });

  useEffect(()=>{
    fetchPosts()
  },
  []);

 
/*--------------------------------------------------------------------------------*/

/*-------------------------     CREATE/REMOVE POST     --------------------------*/

  const createPost = (newPost)=>{
    setPosts([...posts, newPost]);
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !==post.id))
  }

/*----------------------------------    SERVER    ------------------------------*/




/*----------------------------------------    RETURN APP COMPONENT      --------------------------------------*/


  return (

    <div className="App">
      <MyButton
        style={{marginTop: 30}}
        onClick={()=>setModal(true)}
      >
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm 
          create={createPost}/>
      </MyModal>
      

      <hr style={{margin: '25px 0'}}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {postError && <h1>Something went wrong ${postError}</h1>} 
      {isPostLoading
        ?  <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPost} title="JS posts"/>
      }
    </div>
  );
}

export default App;
