import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function FetchData() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const fetchHandling = (id = 1) => {
    setId(parseInt(id));
    console.log(id, "idddddddddddd");
    const data = axios
      .get(`https://jsonplaceholder.typicode.com/posts/${parseInt(id)}`)
      .then((data) => setData(data.data));
    console.log(data);
  };

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         console.log(res.data);
  //         setData(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  const fetchById = (e) => {
    fetchHandling(e.target.value);
  };

  return (
    <div>
      <ul></ul>
      <input
        placeholder="enter number for fetching"
        type="number"
        onChange={fetchById}
        value={id}
      />
      <button onClick={fetchHandling}>Fetch Data</button>
      {data.length >= 2 ? (
        <div>
          <ul>
            {data.map((dtd) => (
              <li key={dtd.id}>{dtd.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h1 key={data.id}>{data.title}</h1>
      )}
    </div>
  );
}
