
import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

const PropertyBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border p-3 flex gap-3  items-center">
      <div>
        <FaHouseUser />
      </div>
      <div className="flex-1">
        <h3 className="text-sm">Property type (any)</h3>
        <p className="text-xs">Select your property</p>
      </div>
      <button onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
    </div>
  );
};

export default PropertyBar;
