import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
export const ParallelQueriespage = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <>
      <div>ParallelQueriespage</div>
      <h4>Super Heroes</h4>

      {superHeroes?.data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
      <h4>Friends</h4>
      {friends?.data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
