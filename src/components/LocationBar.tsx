import { useState, useContext } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { HomeContext } from "./context/HomeContext";

const LocationBar = () => {
  const { countries } = useContext(HomeContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log(countries);
  return (
    <div className="border p-3 flex gap-3  items-center">
      <div>
        <FaLocationDot />
      </div>
      <div className="flex-1">
        <h3 className="text-sm">Location type (any)</h3>
        <p className="text-xs">Select your location</p>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
    </div>
  );
};

export default LocationBar;
