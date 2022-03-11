import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const DynamicParallelpage = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log("result=", queryResult);
  return (
    <>
      <div>DynamicParallelpage</div>
      {queryResult?.data?.data?.map((rslt) => {
        return <div key={rslt.id}>{rslt.name}</div>;
      })}
    </>
  );
};
