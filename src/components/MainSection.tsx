import SearchNavigation from "./SearchNavigation";

const MainSection = () => {
  return (
    <div className="py-4 px-6 md:px-20 relative min-h-[800px]">
      <div className="absolute w-[80%]  lg:w-[90%] left-1/2 -translate-x-1/2 md:-translate-y-[60px] -translate-y-[10px]">
        <SearchNavigation />
      </div>
    </div>
  );
};

export default MainSection;
