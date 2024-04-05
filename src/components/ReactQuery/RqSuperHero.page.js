import { useQuery } from "react-query";
import React from "react";
import axios from "axios";

export default function RqSuperHero() {
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4001/superheroes");
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <h2>RqSuperHero</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}
