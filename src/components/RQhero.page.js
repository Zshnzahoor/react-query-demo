import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const onSuccess = () => {
  return console.log("Api result success after api call");
};

const onError = () => {
  return console.log("Api result error after api call");
};

const fetcherHeroDetails = (heroId) => {
  //   const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const RQhero = () => {
  const { id } = useParams();

  //   const { isError, isLoading, data, error } = useSuperHeroData(id);
  const { isError, isLoading, data, error } = useSuperHeroData(id);

  if (isLoading) {
    <h2>Loading....</h2>;
  }
  if (isError) {
    <h2>{error.message}</h2>;
  }
  return (
    <div>
      RQhero
      <div>RQ Hero Details</div>
      {data?.data?.name}-{data?.data?.alterEgo}
    </div>
  );
};
