import { useState, useContext } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

import { HomeContext } from "./context/HomeContext";

import DisplayItems from "./DisplayItems";

const PropertyBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { flatTypes,setFlatType,flatType } = useContext(HomeContext);

  return (
    <div className="relative">
      <div className="border p-3 flex gap-3  items-center">
        <div>
          <FaHouseUser />
        </div>
        <div className="flex-1">
          <h3 className="text-sm">{flatType}</h3>
          <p className="text-xs">Select your property</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      {isOpen && (
        <DisplayItems
          setIsOpen={setIsOpen}
          setFunction={setFlatType}
          items={flatTypes}
        />
      )}
    </div>
  );
};

export default PropertyBar;
