import ListItems from "./ListItems";
import SearchNavigation from "./SearchNavigation";

const MainSection = () => {
  return (
    <main className="py-10 px-6 md:px-20 relative">
      <SearchNavigation />
      <ListItems />
    </main>
  );
};

export default MainSection;
