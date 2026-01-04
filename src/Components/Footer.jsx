import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-angola-black text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/3"></div>
      <div className="absolute top-0 left-2/4 w-px h-full bg-white/3"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/3"></div>

      <div className="container mx-auto px-6 md:px-16 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          {/* Brand Manifesto */}
          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <img
                src="/logo.png"
                className="w-48 filter brightness-0 invert"
                alt="Mateia"
              />
              <p className="text-3xl md:text-5xl font-black tracking-tighter leading-tight max-w-lg">
                Forjando o Futuro Digital de{" "}
                <span className="text-angola-red">Angola</span> com Excelência.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-white/40 font-light text-lg max-w-md">
              <p>
                A Mateia não é apenas uma plataforma de vendas. É um símbolo de
                progresso, unindo o talento nacional à tecnologia de vanguarda.
              </p>
              <div className="flex gap-6 mt-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, color: "var(--color-angola-yellow)" }}
                    className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter / Invitation */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[48px] flex flex-col gap-10">
            <div className="space-y-3">
              <span className="text-angola-yellow font-bold uppercase tracking-[0.4em] text-[10px]">
                Newsletter Elite
              </span>
              <h3 className="text-3xl font-black">Junte-se à Vanguarda</h3>
              <p className="text-white/40 font-light">
                Receba curadorias exclusivas e lançamentos limitados diretamente
                no seu e-mail.
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 outline-none focus:border-angola-red transition-colors text-white font-light"
              />
              <button className="absolute right-3 top-3 bottom-3 bg-white text-angola-black px-8 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-angola-red hover:text-white transition-all">
                Assinar
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-32 border-t border-white/5">
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-angola-yellow">
              Explorar
            </h4>
            <ul className="flex flex-col gap-4 text-white/40 font-light">
              <li className="hover:text-white transition-colors">
                <a href="#">Coleções Premium</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Novidades</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Edições Limitadas</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Cidadania</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-angola-yellow">
              Institucional
            </h4>
            <ul className="flex flex-col gap-4 text-white/40 font-light">
              <li className="hover:text-white transition-colors">
                <a href="#">Nossa História</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Manifesto</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Sustentabilidade</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Carreiras</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-angola-yellow">
              Contacto
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-angola-red transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-white/40 font-light group-hover:text-white transition-colors">
                  +244 923 000 000
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-angola-red transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-white/40 font-light group-hover:text-white transition-colors">
                  geral@mateia.ao
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/5 gap-8">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2024 MATEIA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Extreme Decoration */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-angola-red rounded-full blur-[200px] opacity-10"></div>
    </footer>
  );
};

export default Footer;
