import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b-2 border-x-stone-400 flex justify-between items-center py-4 px-6 md:px-20" >
      <Link to="/" className="text-3xl font-semibold">
        HomeLand <span className="text-xl text-violet-900">corp.</span>
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="" className="px-3 py-2">
          Sign In
        </Link>
        <Link
          to=""
          className="px-3 py-2 bg-violet-800 text-white rounded-lg hover:bg-violet-600 transition"
        >
          Sign Out
        </Link>
      </div>
    </header>
  );
};

export default Header;
