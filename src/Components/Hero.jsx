import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex items-center justify-between w-full h-[600px] bg-angola-red overflow-hidden mt-0 px-10 md:px-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center mix-blend-multiply pointer-events-none"></div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-6 max-w-xl z-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
          A Força da <span className="text-angola-yellow">Qualidade</span>
        </h1>

        <p className="text-xl text-white/90">
          Explore a nossa seleção premium de produtos com a garantia e confiança
          que você merece.
        </p>

        <button className="w-fit bg-angola-yellow text-angola-black font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:scale-105 transition-all shadow-lg">
          Ver Ofertas
        </button>
      </motion.div>

      {/* Texto decorativo */}
      <h1 className="absolute right-0 bottom-0 text-[12rem] font-bold text-black/10 select-none pointer-events-none leading-none z-0">
        MATEIA
      </h1>

      {/* Imagem Mascote */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 relative"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/mascote.png"
          alt="Palanca Negra Gigante Mascote"
          className="h-[500px] object-contain drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
