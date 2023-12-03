import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import { housesData } from "../../data";

import type { HouseType } from "../../types";

type ContextType = {
  houses: HouseType[];
  country: string;
  flatType: string;
  priceRange: string;
  countries: string[];
  flatTypes: string[];
  loading: boolean;
  handleClickSearch: () => void;
  setCountry: React.Dispatch<SetStateAction<string>>;
  setFlatType: React.Dispatch<SetStateAction<string>>;
  setPriceRange: React.Dispatch<SetStateAction<string>>;
};

export const HomeContext = createContext<ContextType>({} as ContextType);

const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [countries, setCountries] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);
  const [houses, setHouses] = useState<Array<HouseType>>(housesData);
  const [flatTypes, setFlatTypes] = useState<Array<string>>([]);
  const [country, setCountry] = useState("Location any");
  const [flatType, setFlatType] = useState("Property any");
  const [priceRange, setPriceRange] = useState("Default value");

  console.log(houses, country);

  const handleClickSearch = () => {
    setLoading(true);
    const selectedHouses = housesData
      .filter((house) => {
        if (country === "Location any") return true;

        return country === house.country;
      })
      .filter((house) => {
        if (flatType === "Property any") return true;

        return flatType === house.type;
      })
      .filter((house) => {
        if (priceRange === "Default value") return true;

        const [min, , max] = priceRange.split(" ");

        return (
          parseInt(min) <= parseInt(house.price) &&
          parseInt(house.price) <= parseInt(max)
        );
      });

    setTimeout(() => {
      setLoading(false);
      setHouses(selectedHouses);
    }, 2000);
  };

  useEffect(() => {
    const countries = housesData.map((item: HouseType) => item.country);
    const uniqueCountries = new Set(countries);
    setCountries(["Location any", ...uniqueCountries]);
  }, []);

  useEffect(() => {
    const flatTypes = housesData.map((item: HouseType) => item.type);
    const uniqueFlatTypes = new Set(flatTypes);
    setFlatTypes(["Property any", ...uniqueFlatTypes]);
  }, []);

  return (
    <HomeContext.Provider
      value={{
        countries,
        flatTypes,
        flatType,
        priceRange,
        setCountry,
        setFlatType,
        setPriceRange,
        country,
        handleClickSearch,
        houses,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
