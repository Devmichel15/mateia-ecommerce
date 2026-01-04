import { motion } from "framer-motion";
import { ShoppingBag, Star, Heart, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Como convercer alguém em 90 segundos",
    price: "5.000 Kz",
    category: "Edição Limitada",
    image: "/livro1.png",
    rating: 5,
    color: "bg-angola-black",
  },
  {
    id: 2,
    name: "As armas da persuasão",
    price: "3.000 Kz",
    category: "Cidadania",
    image: "/livro2.png",
    rating: 4,
    color: "bg-angola-red",
  },
  {
    id: 3,
    name: "O poder do subconsciente",
    price: "2.000 Kz",
    category: "Tecnologia",
    image: "/livro3.png",
    rating: 5,
    color: "bg-angola-yellow",
  },
 
];

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="card-artistic group h-full flex flex-col"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-noise opacity-5 z-10"></div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100 shadow-inner"
        />

        {/* Floating Actions */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-angola-red hover:text-white transition-colors">
            <Heart size={20} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-angola-black hover:text-white transition-colors">
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="absolute top-6 left-6 z-20">
          <span className="bg-angola-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-white/10">
            {product.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-angola-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <button className="absolute bottom-6 left-6 right-6 py-4 bg-white text-angola-black font-black text-xs uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-2xl z-20 flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
          <ShoppingBag size={16} />
          Adicionar à Bolsa
        </button>
      </div>

      <div className="p-8 flex flex-col flex-1 gap-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-black text-angola-black leading-tight group-hover:text-angola-red transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-angola-yellow">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-angola-black">5.0</span>
          </div>
        </div>
        <p className="text-2xl font-black text-angola-black mt-auto">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-40 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-angola-red font-bold uppercase tracking-[0.4em] text-[10px]">
              Coleção 2024
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Destaques da <br />
              <span className="text-gradient-patriotic">Nossa Pátria</span>
            </h2>
          </motion.div>

          <motion.button
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-angola-black font-black text-sm uppercase tracking-widest border-b-2 border-angola-black pb-2"
          >
            Ver Catálogo Completo
            <ArrowUpRight
              size={20}
              className="group-hover:rotate-45 transition-transform"
            />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
