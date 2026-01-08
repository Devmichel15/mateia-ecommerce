import { motion } from "framer-motion";
import { Coffee, Flag, Users, Leaf, ArrowRight } from "lucide-react";

const stats = [
  {
    icon: <div className="w-1 px-4 h-8 bg-angola-red rounded-full" />,
    label: "Origem",
    value: "Angolana",
    color: "text-angola-red",
  },
  {
    icon: <div className="w-1 px-4 h-8 bg-angola-yellow rounded-full" />,
    label: "Alcance",
    value: "Nacional",
    color: "text-angola-yellow",
  },
  {
    icon: <div className="w-1 px-4 h-8 bg-angola-black rounded-full" />,
    label: "Impacto",
    value: "Local",
    color: "text-angola-black",
  },
];

const AboutUs = () => {
  return (
    <section id="missao" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Content Space */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-angola-red font-bold uppercase tracking-[0.4em] text-[10px]">
                  O Manifesto
                </span>
                <span className="flex-1 h-px bg-gray-100"></span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-angola-black">
                A Alma de <br />
                <span className="text-gradient-patriotic">Nossa Pátria</span>
              </h2>
            </div>

            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl border-l-4 border-angola-red pl-8 italic">
              "Nascemos da audácia de acreditar que Angola pode e deve ser
              protagonista da sua própria revolução digital, unindo tradição e
              vanguarda."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-4 group">
                  {stat.icon}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-black text-angola-black group-hover:text-angola-red transition-colors">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-full bg-angola-black flex items-center justify-center text-white group-hover:bg-angola-red transition-colors">
                <ArrowRight />
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-angola-black underline decoration-2 underline-offset-8 decoration-angola-yellow">
                Descubra Nossa História
              </span>
            </motion.button>
          </motion.div>

          {/* Artistic Frame Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Background Frames */}
            <div className="absolute -inset-8 border-2 border-gray-50 rounded-[64px] -rotate-3"></div>
            <div className="absolute -inset-4 border-2 border-angola-red/10 rounded-[64px] rotate-2"></div>

            <div className="relative aspect-3/4 rounded-[56px] overflow-hidden gold-glow">
              <img
                src="/background.png"
                className="w-full h-full object-cover filter contrast-125 brightness-75 scale-110"
                alt="Mateia Art"
              />
              <div className="absolute inset-0 bg-linear-to-t from-angola-black via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-12 right-12 left-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px]">
                <div className="flex flex-col gap-2">
                  <span className="text-angola-yellow font-bold text-[10px] uppercase tracking-[0.4em]">
                    Selo de Autencidade
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    Orgulhosamente <br />
                    Angolano
                  </h3>
                </div>
              </div>
            </div>

            {/* Mesh Detail */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-cultural-mesh opacity-30 rotate-12"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
