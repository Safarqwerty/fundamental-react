/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((json) => setPosts(json))
    }, [])

    return (
        <>
            <h2>Blog Posts</h2>
            <ol>
                {posts.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ol>
        </>
    )
}

export default Blog