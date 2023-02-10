/* import React from "react"; */
import React, {useState} from 'react';
import MyButton from "./UI/buttons/MyButton";
import MyInput from './UI/input/MyInput';



const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''});


    const addNewPost = (e)=>{
        e.preventDefault();
        const NewPost = {
        ...post, id: Date.now(),
    }
        create(NewPost)
        setPost({title:'', body:''})
    }

    return(
        <form >
            <MyInput 
                onChange={e => setPost({...post, title: e.target.value})} 
                value={post.title} type="text" 
                placeholder="post name"/>
            <MyInput 
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body} 
                type="text" 
                placeholder="post description"/>
            <MyButton 
                onClick={addNewPost}>CREATE POST
            </MyButton> 
        </form>
    );
};

export default PostForm;