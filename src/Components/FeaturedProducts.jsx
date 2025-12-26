import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Headphone Premium",
    price: "45.000 KZ",
    category: "Áudio",
    image: "/headphone.png",
    tag: "Oferta",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "250.000 KZ",
    category: "Mobile",
    image: "/headphone.png", // Reuse for now
    tag: "Novo",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "35.000 KZ",
    category: "Acessórios",
    image: "/headphone.png", // Reuse for now
    tag: "",
  },
  {
    id: 4,
    name: "Laptop Pro",
    price: "450.000 KZ",
    category: "Computadores",
    image: "/headphone.png", // Reuse for now
    tag: "Popular",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-8 md:px-32 bg-white">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl font-bold text-angola-black mb-4">
          Destaques da <span className="text-angola-red">Semana</span>
        </h2>
        <div className="w-24 h-1 bg-angola-yellow rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -10 }}
            className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden group"
          >
            {product.tag && (
              <span className="absolute top-4 left-4 bg-angola-red text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {product.tag}
              </span>
            )}

            <div className="aspect-square flex items-center justify-center mb-6 relative z-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="relative z-10">
              <span className="text-sm text-gray-500 font-medium">
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-angola-black mt-1 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-angola-red">
                  {product.price}
                </span>
                <button className="bg-angola-black text-white p-2 rounded-full hover:bg-angola-yellow hover:text-black transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decor Circle */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-angola-yellow/20 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
