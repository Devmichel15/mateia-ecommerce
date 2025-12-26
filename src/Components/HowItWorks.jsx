import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Encontre seu Produto",
    description:
      "Navegue pela nossa vasta seleção de produtos de alta qualidade e escolha o ideal para si.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: "Faça seu Pedido",
    description:
      "Adicione ao carrinho e finalize sua compra com nossos métodos de pagamento seguros e rápidos.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <line x1="16" y1="8" x2="20" y2="8" />
        <line x1="16" y1="16" x2="23" y2="16" />
        <line x1="16" y1="12" x2="23" y2="12" />
      </svg>
    ),
    title: "Entrega Rápida",
    description:
      "Receba seu produto no conforto da sua casa em tempo recorde em qualquer lugar de Angola.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-angola-black mb-4">
            Como <span className="text-angola-red">Funciona</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprar na Mateia é simples, rápido e seguro. Veja como é fácil com
            nossos 3 passos simples.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gray-200 -z-10 border-t-2 border-dashed border-gray-300"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-24 h-24 bg-angola-black text-angola-yellow rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-angola-red group-hover:text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-angola-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
