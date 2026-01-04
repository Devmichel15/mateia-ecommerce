import { motion } from "framer-motion";
import { Zap, ShieldCheck, HeartPulse, Truck } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="text-angola-yellow" />,
    title: "Agilidade Máxima",
    description:
      "Processamento ultra-rápido para que receba seus produtos no menor tempo possível.",
  },
  {
    icon: <ShieldCheck className="text-angola-red" />,
    title: "Compra Segura",
    description:
      "Sistemas protegidos e garantia Mateia em todas as suas transações.",
  },
  {
    icon: <HeartPulse className="text-angola-black" />,
    title: "Apoio à Comunidade",
    description:
      "Parte de cada compra é reinvestida em projetos sociais e desenvolvimento local.",
  },
  {
    icon: <Truck className="text-angola-yellow" />,
    title: "Logística Nacional",
    description: "Entregas em todas as províncias com rastreio em tempo real.",
  },
];

const WhyMateia = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <span className="bg-angola-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Diferenciais
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-angola-black">
              Porquê Escolher a <span className="text-angola-red">Mateia</span>?
            </h2>
            <div className="w-20 h-1 bg-angola-yellow rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-gray-50 rounded-[40px] flex flex-col items-center text-center gap-6 hover:bg-angola-black transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-angola-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>

              <div className="w-20 h-20 bg-white shadow-xl rounded-[28px] flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-gray-100">
                {benefit.icon}
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-black text-angola-black group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {benefit.description}
                </p>
              </div>

              <div className="w-12 h-1 bg-angola-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMateia;
