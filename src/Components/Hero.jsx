import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-angola-black"
    >
      {/* Premium Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-cultural-mesh opacity-10"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-angola-red/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-angola-black via-transparent to-transparent"></div>
      </div>

      {/* Artisanal Glows */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-angola-red rounded-full blur-[160px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-angola-yellow rounded-full blur-[140px] opacity-5"></div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Editorial Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-2 rounded-full w-fit backdrop-blur-xl group cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-angola-yellow shadow-[0_0_10px_rgba(255,215,0,0.8)]"></span>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">
              Orgulho Nacional • Vanguarda Digital
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.8] tracking-tighter">
              MATEIA <br />
              <span className="text-gradient-patriotic">MODERNA</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/50 max-w-xl leading-relaxed font-light italic">
            "A força da nossa terra, traduzida em curadoria de excelência e
            tecnologia de classe mundial."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-angola-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-angola-red hover:text-white transition-all duration-500 shadow-2xl shadow-white/5"
            >
              Explorar Coleção
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-white/10 text-white/80 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-white/5 backdrop-blur-sm transition-all duration-500"
            >
              Nossa Missão
              <div className="w-2 h-2 rounded-full bg-angola-yellow group-hover:scale-150 transition-transform"></div>
            </motion.button>
          </div>

          {/* Stats / Citizenship */}
          <div className="flex items-center gap-12 mt-8 pt-12 border-t border-white/5">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-white tracking-tighter">
                100%
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                Património Angolano
              </span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-white tracking-tighter">
                Premium
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                Padrão Internacional
              </span>
            </div>
          </div>
        </motion.div>

        {/* Artistic Visual Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Layers */}
          <div className="absolute w-[130%] h-[130%] border border-white/3 rounded-full animate-[spin_100s_linear_infinite]"></div>
          <div className="absolute w-[110%] h-[110%] border border-angola-red/5 rounded-full animate-[spin_80s_reverse_linear_infinite]"></div>

          <div className="relative group perspective-1000">
            {/* The Mascot */}
            <div className="absolute inset-0 bg-linear-to-tr from-angola-red via-transparent to-angola-yellow opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-1000"></div>

            <motion.img
              animate={{
                y: [0, -25, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/mascote.png"
              alt="Palanca Negra Gigante"
              className="relative w-full max-w-[550px] z-10 drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)] filter grayscale-25 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Cultural Mesh Indicator */}
      <div className="absolute bottom-0 right-0 p-12 opacity-20 hidden lg:block">
        <div className="w-32 h-32 bg-angola-pattern rotate-45"></div>
      </div>
    </section>
  );
}

export default Hero;
