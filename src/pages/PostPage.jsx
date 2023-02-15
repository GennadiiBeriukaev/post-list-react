import React from 'react'
import {useParams} from "react-router-dom"
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../components/UI/Loader/Loader';

const PostPage = () => {
    const params = useParams(); 
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([1,2,3]);
    const [fetchPostById, isLoading, error] = useFetching(
        async () => {
            const response = await PostService.getById(params.id)
            setPost(response.data);
    });
    const [fetchComments, isComLoading, comeError] = useFetching(
        async () => {
            const response = await PostService.getCommentByPostId(params.id)
            setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [] );
    

  return (
    <div>
        {isLoading 
        ? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
        : <div 
            style={{textAlign: 'center', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}> 
            <h1>{post.id}</h1> <h2>{post.title} </h2>
            <h3>{post.body}</h3>
        </div>
        }
        <h2 style={{textAlign: 'center', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>Комментарии</h2>




         <div>
            {isComLoading
            ? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
            : <div>

            {comments.map( comm => 
                    <div 
                    
                    style={{marginLeft: '20%', marginTop: 50}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )}


            </div>
            }
        </div> 







    </div>
  );
}
export default PostPage;
