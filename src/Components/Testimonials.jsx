import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    location: "Luanda",
    initial: "A",
    text: "A Mateia transformou a forma como faço compras. A rapidez na entrega em Talatona foi surpreendente e a qualidade dos headphones é impecável.",
  },
  {
    name: "João Manuel",
    location: "Benguela",
    initial: "J",
    text: "Finalmente um e-commerce que entende o mercado angolano. O suporte ao cliente é atencioso e o site transmite muita confiança.",
  },
  {
    name: "Maria Antónia",
    location: "Huambo",
    initial: "M",
    text: "Excelente seleção de produtos. O MateiaBook Pro superou minhas expectativas. Orgulho de ver uma marca angolana com este nível.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-angola-pattern opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-angola-red font-bold uppercase tracking-widest text-sm">
              Experiências
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-angola-black">
              Vozes da{" "}
              <span className="text-angola-yellow">Nossa Comunidade</span>
            </h2>
            <div className="w-20 h-1 bg-angola-black rounded-full mt-2"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50/50 p-10 rounded-[40px] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <Quote
                className="absolute top-8 right-8 text-angola-red/10 group-hover:text-angola-red/20 transition-colors"
                size={60}
              />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-angola-yellow text-angola-yellow"
                  />
                ))}
              </div>

              <p className="text-angola-black/70 font-light italic leading-relaxed mb-8 relative z-10">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-angola-black text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:bg-angola-red transition-colors">
                  {item.initial}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-angola-black">{item.name}</h4>
                  <span className="text-xs text-angola-red font-bold uppercase tracking-wider">
                    {item.location}, Angola
                  </span>
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
