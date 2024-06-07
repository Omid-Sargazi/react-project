import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function FetchData() {
  const [data, setData] = useState([]);

  const fetchHandling = () => {
    const data = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setData(data.data));
    console.log(data);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ul></ul>
      <button onClick={fetchHandling}>Fetch Data</button>
      <div>
        <ul>
          {data.map((dtd) => (
            <li key={dtd.id}>{dtd.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
