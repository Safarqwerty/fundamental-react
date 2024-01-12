import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([])

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) =>
            item.title.includes(value)
        );
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((json) => setExternalPosts(json))
    }, [])

    useEffect(() => {
        console.log("ada post baru")
    }, [posts])

    useEffect(() => {
        console.log("render")
    })

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {posts.map((props, index) => (
            <Article {...props} key={index} />
            ))}
            <hr />
            <h2>External Posts: </h2>
            <ol>
                {externalPosts.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ol>
        </>
    );
}

export default Homepage;