import {useState} from 'react'

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";

const PriceBar = () => {

  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="border p-3 flex gap-3  items-center">
      <div>
        <IoPricetag />
      </div>
      <div className="flex-1">
        <h3 className="text-sm">Prize (any)</h3>
        <p className="text-xs">Select your prize</p>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
    </div>
  );
};

export default PriceBar;
