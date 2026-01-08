import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("mateia_cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mateia_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      // Remove " Kz" and dots from price string to calculate
      const priceValue = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + priceValue * item.quantity;
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const formatPrice = (value) => {
    return new Intl.NumberFormat("pt-AO", {
      style: "currency",
      currency: "AOA",
      minimumFractionDigits: 0,
    })
      .format(value)
      .replace("AOA", "Kz");
  };

  const WHATSAPP_NUMBER = "244923456789"; // Configure seu número aqui

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Olá Mateia 👋\n\n";
    message +=
      "Gostaria de finalizar a minha compra com os seguintes itens:\n\n";

    cart.forEach((item) => {
      message += `- Produto: ${item.name}\n`;
      message += `  Quantidade: ${item.quantity}\n`;
      message += `  Preço unitário: ${item.price}\n\n`;
    });

    const total = formatPrice(getCartTotal());
    message += `Total da compra: ${total}\n\n`;
    message += "Obrigado!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Opcional: Limpar carrinho após redirecionamento
    // clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        formatPrice,
        checkoutViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
