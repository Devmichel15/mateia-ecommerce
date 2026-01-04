import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-angola-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-angola-red/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-angola-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-angola-pattern opacity-5"></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-angola-red rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-angola-yellow rounded-full blur-[100px] opacity-10"></div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-angola-red animate-ping"></span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
              A Revolução Digital em Angola
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none">
            MATEIA
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-angola-red via-angola-yellow to-angola-gold">
              MODERNA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed font-light">
            Descubra a excelência do varejo nacional. Produtos autênticos,
            tecnologia de ponta e o compromisso com o desenvolvimento da nossa
            terra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-angola-red text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(230,0,0,0.5)] hover:bg-white hover:text-angola-red transition-all group"
            >
              Começar a Comprar
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Nossa Missão
            </motion.button>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-angola-yellow" size={20} />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">10k+</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">
                  Produtos
                </span>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-angola-red" size={20} />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">100%</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">
                  Seguro
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Animated Background Ring */}
          <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>

          <div className="relative group">
            {/* Main Image Overlay */}
            <div className="absolute -inset-4 bg-linear-to-tr from-angola-red to-angola-yellow opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>

            <motion.img
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/mascote.png"
              alt="Palanca Negra Gigante"
              className="relative w-full max-w-[500px] z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />

            {/* Floating Tags */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 right-0 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-angola-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AO</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">
                    Feito em Angola
                  </p>
                  <p className="text-white/40 text-[10px]">
                    Qualidade Garantida
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-white/20 to-transparent"></div>
      </motion.div>
    </section>
  );
}

export default Hero;
