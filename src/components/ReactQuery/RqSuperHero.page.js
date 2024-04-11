import { useQuery } from "react-query";
import React from "react";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4001/superheroes");
};

export default function RqSuperHero() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeros,
    {
      staleTile: 100000,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
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
