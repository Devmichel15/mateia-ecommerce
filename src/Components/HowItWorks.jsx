import { motion } from "framer-motion";

const StepShape = ({ index, color }) => {
  const shapes = [
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 2"
      />
      <path
        d="M50 20 L80 50 L50 80 L20 50 Z"
        fill="currentColor"
        opacity="0.1"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fill="currentColor"
      >
        01
      </text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 2"
      />
      <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.1" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fill="currentColor"
      >
        02
      </text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M50 10 L90 80 L10 80 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 2"
      />
      <path d="M50 30 L70 70 L30 70 Z" fill="currentColor" opacity="0.1" />
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fill="currentColor"
      >
        03
      </text>
    </svg>,
  ];
  return (
    <div
      className={`w-32 h-32 ${color} relative mb-8 group-hover:scale-110 transition-transform duration-700`}
    >
      {shapes[index]}
    </div>
  );
};

const steps = [
  {
    title: "Curadoria de Elite",
    description:
      "Nossa equipe seleciona criteriosamente o que há de melhor no mercado nacional e internacional.",
    color: "text-angola-yellow",
  },
  {
    title: "Experiência Fluida",
    description:
      "Uma interface desenhada para que sua jornada de compra seja tão bela quanto funcional.",
    color: "text-angola-red",
  },
  {
    title: "Entrega Patriótica",
    description:
      "Sua encomenda chega com o rigor e o cuidado que todo cidadão angolano merece.",
    color: "text-white",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-40 bg-angola-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-angola-red/5 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-angola-yellow font-bold uppercase tracking-[0.5em] text-[10px]">
              O Fluxo do Sucesso
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Caminho da <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-angola-red to-angola-gold">
                Excelência
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-px bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-linear-to-r from-transparent via-angola-yellow to-transparent"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <StepShape index={index} color={step.color} />
              <div className="space-y-4 max-w-[280px]">
                <h3 className="text-2xl font-black tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large Decorative Text */}
      <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-white/2 select-none pointer-events-none tracking-tighter">
        MATEIA
      </div>
    </section>
  );
};

export default HowItWorks;
