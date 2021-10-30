import React from 'react';
import { useState, useEffect } from 'react';

import SinglePost from './SinglePost';

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

    return (
        <div>
            <h1>Posts:</h1>
            {postsToRender}
        </div>     
    );
}
export default Posts;