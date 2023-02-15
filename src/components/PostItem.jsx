import React from "react";
import MyButton from "./UI/buttons/MyButton";
import { useParams, useNavigate,  } from "react-router-dom";



const PostItem = ({post, number, remove, }) => {
    const history = useNavigate();
    return(
        <div className="post">
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
            <MyButton
                onClick={(e) => {e.preventDefault(); history(`${post.id}`)}}>Open
            </MyButton>
            <MyButton
                onClick={() => remove(post)}>Delete
            </MyButton>
            </div>
        </div>
    );
};

export default PostItem;