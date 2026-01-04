import { motion } from "framer-motion";
import { Smartphone, Monitor, Watch, Headphones } from "lucide-react";

const categories = [
  {
    name: "Mobile",
    icon: <Smartphone size={32} />,
    count: "1.2k+ Produtos",
    color: "bg-angola-red",
  },
  {
    name: "Estações Pro",
    icon: <Monitor size={32} />,
    count: "850+ Produtos",
    color: "bg-angola-black",
  },
  {
    name: "Acessórios",
    icon: <Watch size={32} />,
    count: "2k+ Produtos",
    color: "bg-angola-yellow",
  },
  {
    name: "Áudio Elite",
    icon: <Headphones size={32} />,
    count: "500+ Produtos",
    color: "bg-angola-red",
  },
];

function Category() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl font-black text-angola-black">
            Navegue por <span className="text-angola-red">Categorias</span>
          </h2>
          <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
          <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            Encontre o que deseja
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-50 rounded-[40px] p-10 flex flex-col items-center gap-6 overflow-hidden transition-all duration-500 group-hover:bg-angola-black group-hover:shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-angola-pattern opacity-[0.03] group-hover:opacity-10 transition-opacity"></div>

                <div
                  className={`w-20 h-20 ${cat.color} text-white rounded-[28px] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                >
                  {cat.icon}
                </div>

                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-xl font-black text-angola-black group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-angola-yellow transition-colors">
                    {cat.count}
                  </span>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-1 bg-angola-red rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
