import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    location: "Luanda",
    initial: "A",
    text: "A Mateia transformou a forma como faço compras. A rapidez na entrega em Talatona foi surpreendente e a qualidade dos itens é impecável.",
    highlight: "Eficiência Pura",
  },
  {
    name: "João Manuel",
    location: "Benguela",
    initial: "J",
    text: "Finalmente um e-commerce que entende o mercado angolano. O suporte ao cliente é atencioso e o site transmite muita confiança.",
    highlight: "Confiança Nacional",
  },
  {
    name: "Maria Antónia",
    location: "Huambo",
    initial: "M",
    text: "Excelente seleção de produtos. O MateiaBook Pro superou minhas expectativas. Orgulho de ver uma marca angolana com este nível.",
    highlight: "Excelência AO",
  },
];

const TestimonialCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="card-artistic p-12 flex flex-col gap-10 group"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className="fill-angola-yellow text-angola-yellow"
              />
            ))}
          </div>
          <span className="text-angola-red font-bold text-[10px] uppercase tracking-[0.3em] block">
            {item.highlight}
          </span>
        </div>
        <Quote
          size={40}
          className="text-gray-100 group-hover:text-angola-red/20 transition-colors"
        />
      </div>

      <p className="text-xl text-angola-black/60 font-light italic leading-relaxed">
        "{item.text}"
      </p>

      <div className="flex items-center gap-6 mt-auto">
        <div className="w-16 h-16 bg-angola-black text-white rounded-[24px] flex items-center justify-center font-black text-2xl shadow-2xl group-hover:bg-angola-red transition-all duration-500 group-hover:rotate-6">
          {item.initial}
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-black text-angola-black">{item.name}</h4>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
            {item.location} • Angola
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-40 bg-[#FDFDFD] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <span className="text-angola-red font-bold uppercase tracking-[0.4em] text-[10px]">
            Vozes de Angola
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-angola-black">
            Relatos de <br />
            <span className="text-gradient-patriotic">Experiência</span>
          </h2>
          <div className="w-24 h-px bg-gray-100 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
