import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function DataFetching() {
  //   const [data, setData] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        // console.log(res.data[0].title);
        setPost(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      {/* <ul>
        {post.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
