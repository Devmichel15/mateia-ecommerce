import { ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between p-4 w-full bg-transparent gap-16 items-center">
      <div className="">
        <img src="/public/logo.png" className="w-48" alt="" />
      </div>
      
      <div className="flex flex-1">
        <input
          type="text"
          id=""
          placeholder="Pesquise pelo produto..."
          className="p-2 border relative border-neutral-600 pl-5 w-full rounded-full "
        />
        <button className="absolute right-45 mr-10 mt-2 text-neutral-600">
          <Search />
        </button>
      </div>
      <button>
        <ShoppingCart fontSize={23} />
      </button>
      <button>
        <User fontSize={23} />
      </button>
    </header>
  );
};

export default Header;
