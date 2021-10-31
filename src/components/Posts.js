import React from 'react';
import { useState, useEffect } from 'react';

import SinglePost from './SinglePost';
import deletePost from './DeletePost';

function Posts(props) {
    const [ posts, setPosts ] = useState(["default value"]);

    useEffect(() => { 
        async function getPosts(){
            const response = await fetch(
                'https://strangers-things.herokuapp.com/api/2109-lsu-rm-web-ft/posts'
            );

            const responseObj = await response.json() 

            setPosts(responseObj.data.posts)
        }
        getPosts();
    },[]); 

    const postsToRender = posts.map((post) => {
        return <SinglePost post={post} />;
    })

    const postID = posts.map._id 

    const handleClick = async (postID) => {
        await deletePost(localStorage._id, postID)
    }

    return (
        <div>
            <h1>Posts:</h1>
            {postsToRender}
            {posts.isAuthor ?
            <button type="button" onClick={() => handleClick(posts._id)}>Delete</button>
            : null}
        </div>     
    );
}
export default Posts;