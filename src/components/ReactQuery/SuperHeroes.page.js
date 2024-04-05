import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SuperHeroes() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }, []);
  });
  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h2>SuperHeroes page</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
}
