import { motion } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Watch,
  Headphones,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Mobile",
    icon: <Smartphone size={40} strokeWidth={1} />,
    count: "Explorar Elite",
    color: "text-angola-red",
  },
  {
    name: "Estações Pro",
    icon: <Monitor size={40} strokeWidth={1} />,
    count: "Vanguarda Digital",
    color: "text-white",
  },
  {
    name: "Acessórios",
    icon: <Watch size={40} strokeWidth={1} />,
    count: "Curadoria Gold",
    color: "text-angola-yellow",
  },
  {
    name: "Áudio Elite",
    icon: <Headphones size={40} strokeWidth={1} />,
    count: "Som Patriota",
    color: "text-angola-red",
  },
];

function Category() {
  return (
    <section
      id="categorias"
      className="py-40 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-angola-red font-bold uppercase tracking-[0.4em] text-[10px]">
              Arquivos Mateia
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-angola-black">
              Universo de <br />
              <span className="text-gradient-patriotic">Possibilidades</span>
            </h2>
          </motion.div>
          <p className="text-gray-400 font-light text-lg max-w-sm italic">
            "Categorias desenhadas para atender o mais alto rigor estético e
            funcional."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden bg-angola-black rounded-[48px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-noise opacity-10"></div>
              <div className="absolute inset-0 bg-cultural-mesh opacity-10 group-hover:opacity-20 transition-opacity"></div>

              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-angola-black/80"></div>

              <div className="relative h-full p-12 flex flex-col justify-between z-10">
                <div
                  className={`w-20 h-20 rounded-3xl border border-white/10 flex items-center justify-center ${cat.color} group-hover:scale-110 group-hover:bg-white group-hover:text-angola-black transition-all duration-700`}
                >
                  {cat.icon}
                </div>

                <div className="space-y-4">
                  <span className="text-angola-yellow font-bold text-[10px] uppercase tracking-[0.3em]">
                    {cat.count}
                  </span>
                  <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-angola-red transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="h-px flex-1 bg-white/20"></div>
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-angola-red/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
