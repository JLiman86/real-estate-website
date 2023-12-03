import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";

import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchButton = () => {

  const contextValues = useContext(HomeContext)
  return (
    <button onClick={contextValues?.handleClickSearch}  className="text-white px-10 py-3  rounded-xl bg-violet-700 font-semibold">
      <HiMagnifyingGlass />
    </button>
  );
};

export default SearchButton;
