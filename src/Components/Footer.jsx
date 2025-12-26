import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-angola-black text-white pt-16 pb-8 border-t-8 border-angola-red relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-32 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <img src="/logo.png" className="w-48 mb-6" alt="Mateia Logo" />
          <p className="text-gray-400 mb-6">
            A sua loja online de confiança em Angola. Qualidade, variedade e a
            melhor experiência de compra.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-angola-red transition-colors text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-angola-red transition-colors text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-angola-red transition-colors text-white"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-bold text-angola-yellow mb-6">
            Links Rápidos
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contactos
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xl font-bold text-angola-yellow mb-6">
            Categorias
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Eletrônicos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Moda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Casa & Cozinha
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Beleza
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold text-angola-yellow mb-6">
            Newsletter
          </h4>
          <p className="text-gray-400 mb-4">
            Receba ofertas exclusivas no seu email.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Seu email"
              className="bg-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-angola-red"
            />
            <button className="bg-angola-yellow text-angola-black font-bold p-3 rounded-lg hover:bg-white transition-colors">
              Inscrever
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-32 mt-12 pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Mateia E-commerce. Todos os direitos
          reservados.
        </p>
        
      </div>

      {/* Mascot Peek */}
      <img
        src="/mascote.png"
        className="absolute -bottom-10 -right-10 w-64 opacity-20 pointer-events-none rotate-[-15deg] grayscale mix-blend-overlay"
      />
    </footer>
  );
};

export default Footer;
