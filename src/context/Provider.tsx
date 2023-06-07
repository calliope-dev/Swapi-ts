import { useEffect, useMemo, useState } from "react";
import AppContext from "./Index";

// Api: https://swapi.dev/
import fetchPlanetsStarWars from "../Api/FetchApi";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [starWarsPlanets, setPlanets] = useState([]);


  useEffect(() => {
    const fetchApi = async () => {
      const planets = await fetchPlanetsStarWars();
      setPlanets(planets);
    };
    fetchApi();
  }, []);

  const contextValue = useMemo(() => ({
    starWarsPlanets,
    setPlanets
  }), [starWarsPlanets, setPlanets]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

