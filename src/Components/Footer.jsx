import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-angola-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-angola-red via-angola-yellow to-angola-black"></div>
      <div className="absolute inset-0 bg-angola-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        {/* Brand & Manifesto */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <img src="/logo.png" className="w-48 mb-2" alt="Mateia Logo" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-angola-red">
              Orgulho de Angola
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed font-light">
            "Acreditamos que cada angolano merece o melhor do mundo, preservando
            a nossa essência. A Mateia é o reflexo da nossa força, nossa união e
            nosso futuro brilhante."
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-angola-red transition-all group"
            >
              <Facebook
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-angola-red transition-all group"
            >
              <Instagram
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-angola-red transition-all group"
            >
              <Twitter
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-8">
          <h4 className="text-lg font-black text-angola-yellow uppercase tracking-widest">
            Explorar
          </h4>
          <ul className="flex flex-col gap-4 text-white/60 text-sm font-medium">
            <li>
              <a
                href="#"
                className="hover:text-angola-red transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-px bg-angola-red transition-all"></span>{" "}
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-angola-red transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-px bg-angola-red transition-all"></span>{" "}
                Produtos Populares
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-angola-red transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-px bg-angola-red transition-all"></span>{" "}
                Categorias Elite
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-angola-red transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-px bg-angola-red transition-all"></span>{" "}
                Nossa Missão
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <h4 className="text-lg font-black text-angola-yellow uppercase tracking-widest">
            Contacto
          </h4>
          <ul className="flex flex-col gap-6 text-white/60 text-sm">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-angola-red shrink-0" />
              <span>
                Av. Talatona, Edifício Mateia Center
                <br />
                Luanda, Angola
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-angola-red shrink-0" />
              <span>+244 9XX XXX XXX</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-angola-red shrink-0" />
              <span>atendimento@mateia.ao</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-8">
          <h4 className="text-lg font-black text-angola-yellow uppercase tracking-widest">
            Comunidade
          </h4>
          <div className="flex flex-col gap-4">
            <p className="text-white/50 text-xs leading-relaxed">
              Junte-se à revolução do varejo angolano. Receba novidades e
              ofertas exclusivas.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="bg-white/5 border border-white/10 p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-angola-red focus:bg-white/10 transition-all"
              />
              <button className="bg-angola-red text-white font-black p-4 rounded-2xl hover:bg-white hover:text-angola-red transition-all shadow-lg shadow-angola-red/20 uppercase tracking-widest text-xs">
                Inscrever-se Agora
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 mt-24 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Mateia E-commerce. Desenvolvido com{" "}
          <span className="text-angola-red">❤</span> em Angola.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <a href="#" className="hover:text-white transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>

      {/* Mascot Peek */}
      <img
        src="/mascote.png"
        className="absolute -bottom-20 -right-20 w-80 opacity-5 pointer-events-none rotate-[-15deg] grayscale"
      />
    </footer>
  );
};

export default Footer;
