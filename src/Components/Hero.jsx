import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex justify-between items-center bg-[url('/public/hero-bg.png')] w-full h-[600px] bg-center bg-cover rounded-2xl mt-3">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-full h-full justify-center items-start ml-32 gap-8"
      >
        <h1 className="text-4xl font-bold text-white">
          Encontre o que procura
        </h1>
        <p className="text-black max-w-[500px] text-2xl">
          Encontre headphones de qualidade premium, perfeitos para quem busca
          áudio de alta fidelidade e estilo incomparável.
        </p>
        <button className="cursor-pointer bg-[#FCD116] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
          Criar Conta
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mr-32"
      >
        <img
          src="/public/headphone.png"
          alt=""
          className="h-[400px] lg:h-[500px] object-contain"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
