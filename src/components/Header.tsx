import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b-[1px] border-stone-400 flex justify-between items-center py-4 px-6 md:px-20" >
      <Link to="/" className="md:text-2xl  text-base font-semibold">
        HomeLand <span className="text-sm text-violet-700">corp.</span>
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="" className="px-3 py-2 text-sm">
          Sign In
        </Link>
        <Link
          to=""
          className="text-sm px-3 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-500 transition"
        >
          Sign Out
        </Link>
      </div>
    </header>
  );
};

export default Header;
