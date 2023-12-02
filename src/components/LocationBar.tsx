import { useState, useContext } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { HomeContext } from "./context/HomeContext";
import DisplayItems from "./DisplayItems";

const LocationBar = () => {
  const { countries,setCountry,country } = useContext(HomeContext);
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="relative">
      <div className="border p-3 flex gap-3  items-center">
        <div>
          <FaLocationDot />
        </div>
        <div className="flex-1">
          <h3 className="text-sm">{country}</h3>
          <p className="text-xs">Select your location</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      { isOpen && <DisplayItems setIsOpen={setIsOpen} setFunction={setCountry} items = {countries}/>}
    </div>
  );
};

export default LocationBar;
