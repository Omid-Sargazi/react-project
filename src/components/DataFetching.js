import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function DataFetching() {
  //   const [data, setData] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        // console.log(res.data[0].title);
        setPost(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [idFromButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {post.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
