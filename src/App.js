import React, {useState, useMemo} from 'react';
import ClassCounter from './components/ClassCounter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList'
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import './styles/App.css';
/*-------------------------------------------------------------------------------*/




function App() {

  /*-------------------------------   CONST DECLARATION     ---------------------------*/


  const [posts, setPosts] = useState([
      {id:1, title:'aavascript', body:'Aava-scriptizer'},
      {id:2, title:'cytuhon', body:'Bm Bytuhon'},
      {id:3, title:'besting', body:'Cm testing man'},
  ])

  const [filter, setFilter] = useState({sort:'', query:''}) 


    /*-------------------------------   SORT LOGIC    --------------------------------*/

  const sortedPosts = useMemo(()=>{
        console.log('function called')
    if(filter.sort){
      return [...posts].sort((a, b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  },[filter.sort, posts])

  
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])



/*--------------------------------------------------------------------------------*/

/*-------------------------     CREATE/REMOVE POST     --------------------------*/

  const createPost = (newPost)=>{
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !==post.id))
  }

/*-------------------------------------------------------------------------------*/


  return (

    <div className="App">

      <PostForm 
        create={createPost}
      />

      <hr style={{margin: '25px 0'}}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {sortedAndSearchedPost.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPost} title="JS posts"/>
        : <h1 style={{textAlign: 'center'}}>No posts yet!</h1>
      }
    </div>
  );
}

export default App;
