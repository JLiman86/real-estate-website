import { useContext } from "react";
import { HomeContext } from "../components/context/HomeContext";
import ListItem from "./ListItem";
import { CgSpinner } from "react-icons/cg";

const ListItems = () => {
  const { houses,loading } = useContext(HomeContext);

  if (loading) {
    return (
      <section className="flex items-center justify-center h-[600px] mt-5">
        <CgSpinner className = "animate-spin text-violet-700" size={40}/>
      </section>
    );
  }

  if (houses.length < 1) {
    return (
      <section className="flex items-center justify-center h-[600px] mt-5">
        NO DATA
      </section>
    );
  }

  return (
    <section className="pt-80 lg:pt-20 ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 gap-x-8 gap-y-10 lg:grid-cols-3">
        {houses.map((house) => {
          return <ListItem key={house.id} house={house} />;
        })}
      </ul>
    </section>
  );
};

export default ListItems;
