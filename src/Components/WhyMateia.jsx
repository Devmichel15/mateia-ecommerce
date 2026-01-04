import { motion } from "framer-motion";

const ArtisticIcon = ({ type, colorClass }) => {
  const icons = {
    agilidade: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "var(--color-angola-red)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: "var(--color-angola-yellow)",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
        <path
          d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <path
          d="M30 50 L45 65 L75 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    ),
    seguranca: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 10 C30 10 20 20 20 40 C20 70 50 90 50 90 C50 90 80 70 80 40 C80 20 70 10 50 10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M50 30 V60 M40 45 H60"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M50 5 L50 15 M95 50 L85 50 M50 95 L50 85 M5 50 L15 50"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    ),
    comunidade: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="35"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M20 85 C20 65 35 55 50 55 C65 55 80 65 80 85"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M50 5 L90 50 L50 95 L10 50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      </svg>
    ),
    logistica: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M10 50 H90 M70 30 L90 50 L70 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect
          x="20"
          y="35"
          width="40"
          height="30"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="35" cy="75" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="55" cy="75" r="5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };
  return <div className={`w-16 h-16 ${colorClass}`}>{icons[type]}</div>;
};

const benefits = [
  {
    type: "agilidade",
    title: "Agilidade Soberana",
    description:
      "Cada entrega é um compromisso com a dinâmica moderna do nosso país.",
    color: "text-angola-red",
  },
  {
    type: "seguranca",
    title: "Escudo de Confiança",
    description:
      "Tecnologia de ponta protegendo o patrimônio e os dados de cada cidadão.",
    color: "text-angola-yellow",
  },
  {
    type: "comunidade",
    title: "Legado e Comunidade",
    description:
      "Investimos parte de cada transação no futuro e desenvolvimento da nossa terra.",
    color: "text-angola-black",
  },
  {
    type: "logistica",
    title: "Logística Conectada",
    description:
      "Unindo províncias e pessoas através de um sistema de distribuição impecável.",
    color: "text-angola-red",
  },
];

const WhyMateia = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Background Zen Pattern */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-cultural-mesh opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-angola-red"></span>
              <span className="text-angola-red font-bold uppercase tracking-[0.4em] text-[10px]">
                Excelência Nacional
              </span>
              <span className="w-12 h-px bg-angola-red"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-angola-black tracking-tighter leading-none">
              A Arte de <br />
              <span className="text-gradient-patriotic">Servir Angola</span>
            </h2>
            <p className="max-w-xl text-gray-500 font-light leading-relaxed mt-4">
              Transcendemos o e-commerce tradicional para criar uma experiência
              de consumo que celebra a nossa identidade e impulsiona o
              progresso.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-artistic group p-12 flex flex-col items-start gap-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-angola-red/5 rounded-full blur-2xl group-hover:bg-angola-red/10 transition-colors"></div>
                <div className="relative transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <ArtisticIcon
                    type={benefit.type}
                    colorClass={benefit.color}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-angola-black leading-tight">
                  {benefit.title}
                </h3>
                <div className="w-8 h-1 bg-angola-yellow rounded-full group-hover:w-16 transition-all duration-500"></div>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute bottom-8 right-12 text-8xl font-black text-gray-50 opacity-[0.03] pointer-events-none group-hover:text-angola-red group-hover:opacity-[0.05] transition-all">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMateia;
