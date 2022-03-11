import { useQuery } from "react-query";

export const useSuperHeroesData = (onSuccess, onError, fetchHeroes) => {
  return useQuery("super-heroes", fetchHeroes, {
    //   cacheTime: 5000,
    //   staleTime: 30000,
    //   refetchOnMount: true,
    //   refetchOnWindowFocus: true,
    //   refetchInterval: 2000,
    //   refetchIntervalInBackground: true,
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const HeroesName = data.data.map((hero) => hero.name);
    //   return HeroesName;
    // },
  });
};
