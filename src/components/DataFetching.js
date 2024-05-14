import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data[0].title);
        setData(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
}
