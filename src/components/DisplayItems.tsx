import { Dispatch, SetStateAction } from "react";

type DisplayProps = {
  items: string[];
  setFunction: Dispatch<SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DisplayItems = ({ items, setFunction, setIsOpen }: DisplayProps) => {
  const handleClick = (item: string) => {
    setFunction(item);
    setIsOpen((prev) => !prev);
  };
  return (
    <ul className="z-10 mt-3 absolute w-full bg-white">
      {items.map((item, idx) => (
        <li
          key={idx}
          onClick={() => handleClick(item)}
          className="p-2 text-xs hover:bg-slate-100 hover:cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DisplayItems;
