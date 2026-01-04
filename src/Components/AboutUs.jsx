import { motion } from "framer-motion";
import { Coffee, Flag, Users, Leaf } from "lucide-react";

const stats = [
  {
    icon: <Coffee size={24} />,
    label: "Origem",
    value: "Angolana",
    color: "text-angola-red",
  },
  {
    icon: <Flag size={24} />,
    label: "Alcance",
    value: "Nacional",
    color: "text-angola-yellow",
  },
  {
    icon: <Users size={24} />,
    label: "Impacto",
    value: "Local",
    color: "text-angola-black",
  },
];

const AboutUs = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-angola-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-angola-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-angola-red/10 to-transparent"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="text-angola-yellow font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-angola-red decoration-2 underline-offset-8">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Mais que um E-commerce,
              <br />
              <span className="text-angola-red">Uma Missão de Cidadania</span>
            </h2>
          </div>

          <p className="text-white/70 text-lg leading-relaxed font-light">
            A Mateia nasceu do desejo de elevar o comércio em Angola a patamares
            internacionais, sem nunca perder as nossas raízes. Somos um portal
            para a modernidade, focados em oferecer qualidade, confiança e
            agilidade para todos os angolanos.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[24px] flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors"
              >
                <div className={`${stat.color}`}>{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-tighter">
                    {stat.label}
                  </span>
                  <span className="text-lg font-black">{stat.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="p-4 bg-angola-red/20 rounded-2xl border border-angola-red/30">
              <Leaf className="text-angola-red" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Desenvolvimento Sustentável</h4>
              <p className="text-white/50 text-sm">
                Apoiamos a economia local e o empreendedorismo nacional.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 border border-white/10 rounded-[40px] rotate-3 -z-10"></div>
          <div className="absolute -inset-4 border border-angola-red/20 rounded-[40px] -rotate-2 -z-10"></div>

          <div className="aspect-video bg-gray-900 rounded-[32px] overflow-hidden relative group">
            <img
              src="/background.png"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="Angola Moderna"
            />
            <div className="absolute inset-0 bg-linear-to-t from-angola-black to-transparent flex items-end p-10">
              <div className="flex flex-col">
                <span className="text-angola-yellow font-bold text-sm tracking-widest">
                  ORGULHO
                </span>
                <h3 className="text-3xl font-black">
                  Nossa Pátria, Nosso Mercado
                </h3>
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl hidden md:block">
            <h4 className="text-angola-black text-4xl font-black leading-none">
              100%
              <br />
              <span className="text-angola-red text-sm uppercase tracking-widest">
                Angolano
              </span>
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
