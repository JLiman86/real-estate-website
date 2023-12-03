import type { HouseType } from "../types";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";

import { Link } from "react-router-dom";

const ListItem = ({ house }: { house: HouseType }) => {
  const {
    image,
    type,
    country,
    address,
    bathrooms,
    bedrooms,
    surface,
    id,
    price,
  } = house;

  return (
    <Link
      className="shadow-2xl rounded-tl-[110px] overflow-hidden"
      to={`/houses/${id}`}
    >
      <li className="flex flex-col gap-3 shadow-xl p-4 ">
        <img src={image} alt="" />
        <p className="text-xs space-x-3 text-white">
          <span className="p-1 bg-green-600 rounded-lg">{type}</span>
          <span className="bg-violet-700 p-1 rounded-lg">{country}</span>
        </p>
        <h2 className="font-medium">{address}</h2>
        <p className="text-xs flex gap-4">
          <div className="flex items-center gap-2">
            <IoBedOutline />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosResize />
            <span>{surface}</span>
          </div>
        </p>
        <h3 className="text-violet-700 font-semibold">{price}</h3>
      </li>
    </Link>
  );
};

export default ListItem;
