import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchData02() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .then((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error, "errrrorr"));
  });
  const inputHandler = (e) => {
    setId(e.target.value);
  };

  const fetchHandling = () => {
    setIdFromButton(id);
  };
  return (
    <div>
      <input
        placeholder="enter number "
        type="text"
        value={id}
        onChange={inputHandler}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h1>{post.title}</h1>
      <button onClick={fetchHandling}>Fetch Data</button>
    </div>
  );
}
