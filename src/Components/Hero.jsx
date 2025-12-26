import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex items-center justify-between w-full h-150 bg-gray-200 bg-center bg-cover rounded-2xl mt-3 px-32">
      
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 max-w-xl"
      >
        <h1 className="text-7xl font-bold text-black">
          Encontre o que procura
        </h1>

        <p className="text-2xl text-black">
          Encontre headphones de qualidade premium, perfeitos para quem busca
          áudio de alta fidelidade e estilo incomparável.
        </p>

        <button className="w-fit bg-[#FCD116] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
          Criar Conta
        </button>
      </motion.div>

      {/* Texto decorativo */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-neutral-500/40 select-none pointer-events-none">
        HEADPHONE
      </h1>

      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/headphone.png"
          alt="Headphone premium"
          className="h-125 object-contain"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
