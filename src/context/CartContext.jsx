import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const itemAlreadyInCart = cartItems.find(function (item) {
      return item.id === product.id;
    });

    if (itemAlreadyInCart) {
      const updatedItems = cartItems.map(function (item) {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  }

  function removeFromCart(productId) {
    const filteredItems = cartItems.filter(function (item) {
      return item.id !== productId;
    });
    setCartItems(filteredItems);
  }

  let totalCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCount = totalCount + cartItems[i].quantity;
  }

  const valueToShare = {
    cartItems: cartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    totalCount: totalCount,
  };

  return (
    <CartContext.Provider value={valueToShare}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
