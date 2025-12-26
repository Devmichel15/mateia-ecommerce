import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-20 bg-angola-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <img
          src="/mascote.png"
          alt="Mascote"
          className="w-[600px] object-contain rotate-12 translate-x-1/4 -translate-y-1/4"
        />
      </div>

      <div className="container mx-auto px-8 md:px-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            O que dizem nossos{" "}
            <span className="text-angola-yellow">Clientes</span>
          </h2>
          <p className="text-gray-400">
            Junte-se a milhares de angolanos satisfeitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4 text-angola-yellow">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Serviço incrível! A entrega foi super rápida e o produto chegou
                em perfeitas condições. Recomendo muito a Mateia!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl">
                  {["A", "J", "M"][i - 1]}
                </div>
                <div>
                  <h4 className="font-bold">Cliente Satisfeito</h4>
                  <span className="text-sm text-gray-500">Luanda, Angola</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
