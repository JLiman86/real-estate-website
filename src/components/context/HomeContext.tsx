import React, { createContext, useState, useEffect } from "react";
import { housesData } from "../../data";

import type { HouseType } from "../../types";

type ContextType = {
  countries: string[];
};

export const HomeContext = createContext<ContextType>({countries:[]});

const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [countries, setCountries] = useState<Array<string>>([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const countries = housesData.map((item: HouseType) => item.country);

    const uniqueCountries = new Set(countries);

    setCountries([...uniqueCountries]);
  }, []);

  return (
    <HomeContext.Provider value={{ countries }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
