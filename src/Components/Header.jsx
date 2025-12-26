import { ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between p-4 w-full gap-16 items-center">
      <div className="">
        <img src="/logo.png" className="w-48 " alt="Mateia Logo" />
      </div>

      <div className="flex flex-1 relative">
        <input
          type="text"
          placeholder="Pesquise pelo produto..."
          className="p-2 pl-5 w-full rounded-full bg-white text-black border-2 border-angola-yellow focus:outline-none focus:border-angola-red transition-colors"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-angola-black hover:text-angola-red transition-colors">
          <Search />
        </button>
      </div>

      <div className="flex gap-4">
        <button className="hover:text-angola-yellow transition-colors">
          <ShoppingCart fontSize={23} />
        </button>
        <button className="hover:text-angola-yellow transition-colors">
          <User fontSize={23} />
        </button>
      </div>
    </header>
  );
};

export default Header;
