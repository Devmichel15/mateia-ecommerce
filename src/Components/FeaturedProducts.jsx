import { motion, AnimatePresence } from "framer-motion";
import { Plus, Heart, Eye, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Headphone Elite Mateia",
    price: "45.000",
    category: "Premium Audio",
    image: "/headphone.png",
    tag: "Exclusivo",
    color: "angola-red",
  },
  {
    id: 2,
    name: "Smartphone Kwanza Pro",
    price: "250.000",
    category: "Tecnologia",
    image: "/headphone.png",
    tag: "Lançamento",
    color: "angola-black",
  },
  {
    id: 3,
    name: "Relógio Palanca Gold",
    price: "35.000",
    category: "Acessórios",
    image: "/headphone.png",
    tag: "Popular",
    color: "angola-yellow",
  },
  {
    id: 4,
    name: "MateiaBook Pro 16",
    price: "450.000",
    category: "Computadores",
    image: "/headphone.png",
    tag: "Esgotando",
    color: "angola-red",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-angola-pattern opacity-[0.02] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-12 h-1 bg-angola-red rounded-full"></span>
            <span className="text-angola-red font-bold uppercase tracking-widest text-sm">
              Coleção 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-angola-black">
            Destaques da <span className="text-angola-red">Nossa Terra</span>
          </h2>
        </div>
        <button className="text-angola-black font-bold border-b-2 border-angola-yellow pb-1 hover:text-angola-red hover:border-angola-red transition-all uppercase tracking-wider text-sm">
          Ver Toda a Loja
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col bg-gray-50/50 rounded-[32px] p-2 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container */}
            <div className="aspect-4/5 bg-gray-100 rounded-[28px] overflow-hidden relative flex items-center justify-center p-8 group-hover:bg-white transition-colors">
              {product.tag && (
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`bg-angola-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border-l-2 border-angola-red`}
                  >
                    {product.tag}
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-angola-black hover:bg-angola-red hover:text-white transition-all">
                  <Heart size={18} />
                </button>
                <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-angola-black hover:bg-angola-red hover:text-white transition-all">
                  <Eye size={18} />
                </button>
              </div>

              <motion.img
                whileHover={{ scale: 1.1, rotate: -5 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain relative z-10 transition-transform duration-500"
              />

              {/* Quick Add Button */}
              <button className="absolute bottom-4 left-4 right-4 bg-angola-black text-white py-3 rounded-2xl font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all flex items-center justify-center gap-2 hover:bg-angola-red">
                <Plus size={18} />
                Adicionar ao Carrinho
              </button>
            </div>

            {/* Info */}
            <div className="p-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2 block">
                {product.category}
              </span>
              <h3 className="text-xl font-black text-angola-black mb-3 group-hover:text-angola-red transition-colors capitalize">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-bold uppercase">
                    Preço
                  </span>
                  <span className="text-2xl font-black text-angola-black">
                    {product.price}{" "}
                    <span className="text-sm font-bold text-angola-red">
                      KZ
                    </span>
                  </span>
                </div>
                <div className="w-12 h-12 bg-angola-yellow rounded-2xl flex items-center justify-center text-angola-black group-hover:bg-angola-red group-hover:text-white transition-all shadow-lg shadow-angola-yellow/20 group-hover:shadow-angola-red/20 rotate-12 group-hover:rotate-0">
                  <ShoppingCart size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
