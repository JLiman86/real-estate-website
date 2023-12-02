import { useState, useContext } from "react";

import { HomeContext } from "./context/HomeContext";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";

import DisplayItems from "./DisplayItems";

import { priceRanges } from "../data";

const PriceBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriceRange, priceRange } = useContext(HomeContext);
  return (
    <div className="relative">
      <div className="border p-3 flex gap-3  items-center">
        <div>
          <IoPricetag />
        </div>
        <div className="flex-1">
          <h3 className="text-sm">{priceRange}</h3>
          <p className="text-xs">Select your prize</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      {isOpen && (
        <DisplayItems
          setFunction={setPriceRange}
          setIsOpen={setIsOpen}
          items={priceRanges}
        />
      )}
    </div>
  );
};

export default PriceBar;
