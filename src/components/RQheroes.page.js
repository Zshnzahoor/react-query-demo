import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const onSuccess = () => {
  return console.log("Api result success after api call");
};

const onError = () => {
  return console.log("Api result error after api call");
};

export const RQheroespage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError, fetchHeroes);
  if (isLoading || isFetching) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        <h2>RQheroespage</h2>
        <button onClick={refetch}>Fetch Heroes</button>
      </div>

      {/* {data.map((HeroesName) => {
        return <div key={HeroesName}>{HeroesName}</div>;
      })} */}
      {console.log("data", data)}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`rq-super-hero/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
