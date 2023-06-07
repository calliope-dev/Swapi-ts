import React, { createContext } from "react";

interface IContext {
    starWarsPlanets: never[],
    setPlanets: React.Dispatch<React.SetStateAction<never[]>>
}

const AppContext = createContext<IContext | null>(null);

export default AppContext;