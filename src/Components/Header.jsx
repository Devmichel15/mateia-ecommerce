import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between p-4 w-full bg-transparent gap-16 items-center">
      <div className="text-2xl font-bold text-red-600">Mateia</div>
      <nav className="flex gap-4">
        <a
          href="#"
          className="text-black hover:underline"
        >
          Produtos
        </a>
        <a
          href="#"
          className="text-black hover:underline"
        >
          Entregas
        </a>
        <a
          href="#"
          className="text-black hover:underline"
        >
          Criar Conta
        </a>
      </nav>
      <div className="flex flex-1">
        <input type="text" id="" placeholder="Pesquise pelo produto..." 
            className="p-2 border border-neutral-600 pl-5 w-full rounded-full "
        />
      </div>
      <button>
        <FaShoppingCart fontSize={23} />
      </button>
    </header>
  );
};

export default Header;
