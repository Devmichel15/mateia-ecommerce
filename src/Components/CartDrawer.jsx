import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../Context/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    formatPrice,
    checkoutViaWhatsApp,
  } = useCart();

  const subtotal = getCartTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-101 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-angola-black tracking-tight">
                  Meu <span className="text-angola-red">Carrinho</span>
                </h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                  {cart.length} ITENS SELECIONADOS
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors text-angola-black"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-angola-black">
                      Seu carrinho está vazio
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Parece que você ainda não adicionou nenhum tesouro
                      patriótico.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-8 py-4 bg-angola-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-angola-red transition-colors"
                  >
                    Começar a Comprar
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-gray-50 rounded-2xl overflow-hidden shrink-0 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-angola-black leading-tight group-hover:text-angola-red transition-colors">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-angola-red transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">
                        {item.category}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-gray-100 rounded-xl bg-gray-50/50 p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-angola-black"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-black text-angola-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-angola-black"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-black text-angola-black">
                          {formatPrice(
                            parseInt(item.price.replace(/[^\d]/g, ""))
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-gray-50 border-t border-gray-100 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="text-angola-black font-bold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Entrega</span>
                    <span className="text-angola-green font-bold uppercase tracking-widest text-[10px]">
                      Grátis
                    </span>
                  </div>
                  <div className="pt-4 flex justify-between items-center border-t border-gray-200">
                    <span className="text-lg font-black text-angola-black uppercase tracking-tighter">
                      Total
                    </span>
                    <span className="text-2xl font-black text-angola-red">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={checkoutViaWhatsApp}
                    className="w-full py-5 bg-angola-black text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-angola-red transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 group"
                  >
                    Finalizar Compra
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-3 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-angola-red transition-colors"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
