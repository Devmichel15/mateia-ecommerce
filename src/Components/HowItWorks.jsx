import { motion } from "framer-motion";
import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} />,
    title: "Explore",
    description:
      "Navegue pela nossa seleção de produtos premium com curadoria nacional.",
    color: "bg-angola-yellow",
    textColor: "text-angola-black",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Selecione",
    description:
      "Adicione ao carrinho com facilidade e finalize sua compra com segurança.",
    color: "bg-angola-red",
    textColor: "text-white",
  },
  {
    icon: <Truck size={32} />,
    title: "Receba",
    description:
      "Desfrute da nossa logística eficiente em qualquer ponto de Angola.",
    color: "bg-angola-black",
    textColor: "text-white",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-gray-50/50 relative">
      <div className="absolute inset-0 bg-angola-pattern opacity-[0.01] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-angola-black mb-6">
            Processo <span className="text-angola-red">Mateia</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Unimos tecnologia e amor pela pátria para tornar sua experiência de
            compra memorável, segura e puramente angolana em apenas 3 passos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-1 bg-linear-to-r from-angola-yellow via-angola-red to-angola-black opacity-10 rounded-full -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`w-24 h-24 ${step.color} ${step.textColor} rounded-[32px] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-gray-200`}
              >
                {step.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-black text-angola-black group-hover:text-angola-red transition-colors">
                  0{index + 1}. {step.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
