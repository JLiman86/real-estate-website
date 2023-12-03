import { useParams } from "react-router-dom";
import type { HouseType } from "../types";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";

import { housesData } from "../data";

const PropertyDetails = () => {
  const { id } = useParams();

  let house: HouseType | undefined = undefined;

  if (id) {
    house = housesData.find((house) => house.id === parseInt(id));
  }

  if (house) {
    const {
      name,
      address,
      type,
      country,
      price,
      imageLg,
      bathrooms,
      bedrooms,
      surface,
      description,
    } = house;
    return (
      <section className="py-10 px-6 md:px-20 ">
        <div className="gap-4 flex flex-col lg:justify-between lg:items-center lg:flex-row">
          <div>
            <h2 className="text-2xl font-medium">{name}</h2>
            <p>{address}</p>
          </div>
          <div className="space-x-3 text-white text-sm">
            <span className="py-1 px-3 bg-green-600 rounded-2xl">{type}</span>
            <span className="py-1 px-3 bg-violet-700 rounded-2xl">
              {country}
            </span>
          </div>
          <div className="text-violet-700 text-3xl font-medium">$ {price}</div>
        </div>

        <div className="pt-5 flex flex-col md:flex-row gap-6  ">
          <div className="md:w-2/3 w-full">
            <img className="w-full" src={imageLg} alt="" />

            <div className="flex gap-2 py-4 text-violet-600">
              <div className="flex items-center gap-2">
                <IoBedOutline />
                <span> {bedrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBath />
                <span> {bathrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <MdOutlineZoomOutMap size={18} />
                </div>

                <span>{surface}</span>
              </div>
            </div>

            <p>{description}</p>
          </div>
          <div className="md:w-1/3 w-full">
            <form className="p-4 border-[1px] border-zinc-400 rounded-md">
              <div className="flex items-center gap-4">
                <div className="p-1 border-[1px] border-zinc-300 rounded-full">
                  <img className="w-20" src={house.agent.image} alt="" />
                </div>

                <div>
                  <h2 className="text-xl">{house.agent.name}</h2>
                  <p className="text-sm">{house.agent.phone}</p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <input
                  className="w-full p-2 outline-none border-[1px] border-zinc-200"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name*"
                />
                <input
                  className="w-full p-2 outline-none border-[1px] border-zinc-200"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email*"
                />
                <input
                  className="w-full p-2 outline-none border-[1px] border-zinc-200"
                  type="phone"
                  name=""
                  id=""
                  placeholder="Phone*"
                />
                <textarea
                  className="text-zinc-800 border-[1px] border-zinc-200 w-full h-[150px] p-2 outline-none"
                  defaultValue="Hello, Iam interested in [Modern Apartment]"
                  placeholder="Your text..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-6 md:px-20 min-h-screen">No data</section>
  );
};

export default PropertyDetails;
