import LocationBar from "./LocationBar";
import PriceBar from "./PriceBar";
import PropertyBar from "./PropertyBar";
import SearchButton from "./SearchButton";

const SearchNavigation = () => {
  return (
    <div className="grid grid-cols-1 gap-3 backdrop-blur-sm shadow-xl p-5 lg:grid-cols-4 absolute w-[80%]  lg:w-[90%] left-1/2 -translate-x-1/2 md:-translate-y-[80px] -translate-y-[10px]">
      <LocationBar />
      <PropertyBar />
      <PriceBar />
      <div className="flex justify-center items-center">
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchNavigation;
