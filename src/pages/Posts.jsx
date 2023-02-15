import React, {useState, useMemo} from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList'
import MyButton from '../components/UI/buttons/MyButton';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import { useEffect } from 'react';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import {getPageCount} from '../utils/pages'
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';

/*----------------------------------------------------------------------------------------------------------*/




function Posts() {


  const [posts, setPosts] = useState([
      
  ])
  

  const [filter, setFilter] = useState({sort:'', query:''}) 

  const [modal, setModal] = useState('false');

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);


  
 

  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
      const responce = await PostService.getAll(limit, page);
      setPosts(responce.data)
      const totalCount = responce.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit));
  });
       
  useEffect(()=>{
    fetchPosts()
  },
  [page, limit]);

  const changePage = (page) => {
    setPage(page)
  }

 
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
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      <MyButton
        style={{marginTop: 30 }}
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

      <MySelect
        style={{marginTop: 20}}
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="number of items per page"
        options={[
          {value:5, name:'5'},
          {value:10, name:'10'},
          {value:25, name:'25'},
          {value:-1, name:'Show all'},
        ]}
      />

      {postError && <h1>Something went wrong ${postError}</h1>} 
      {isPostLoading
        ?  <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPost} title="JS posts"/>
      }

      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      
    </div>
  );
}

export default Posts;
