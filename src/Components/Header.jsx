import { ShoppingCart, User, Search, Heart, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-16 py-4 flex items-center justify-between ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <button className="md:hidden text-angola-black">
          <Menu size={24} />
        </button>
        <div className="flex flex-col">
          <img src="/logo.png" className="w-32 md:w-40" alt="Mateia Logo" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-angola-red ml-1 hidden md:block">
            Orgulho de Angola
          </span>
        </div>
      </div>

      {/* Navigation - Tablet/Desktop */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
        <a
          href="#"
          className="hover:text-angola-red transition-colors relative group"
        >
          Início
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-angola-red transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="hover:text-angola-red transition-colors relative group"
        >
          Loja
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-angola-red transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="hover:text-angola-red transition-colors relative group"
        >
          Categorias
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-angola-red transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="hover:text-angola-red transition-colors relative group"
        >
          Nossa Missão
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-angola-red transition-all group-hover:w-full"></span>
        </a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="O que procura?"
            className="bg-gray-100/50 border border-gray-200 py-2 px-4 rounded-full w-40 md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-angola-red/20 focus:bg-white transition-all"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-angola-black hover:text-angola-red transition-transform hover:scale-110 relative">
            <Heart size={22} />
            <span className="absolute -top-1 -right-1 bg-angola-yellow text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="text-angola-black hover:text-angola-red transition-transform hover:scale-110 relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-angola-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <Link to="sign">
          <button className="hidden sm:flex items-center gap-2 bg-angola-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-angola-red transition-colors shadow-md">
            <User size={18} />
            <span>Entrar</span>
          </button>
          </Link>
          <button className="sm:hidden text-angola-black">
            <User size={22} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
