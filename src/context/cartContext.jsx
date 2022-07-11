import { createContext, useState } from "react";
import { addToCart } from "../Helpers/addToCart";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, qty) => {
    if (isInCart(item)) {
      let newQty = sumQty(item, qty);
      setCart([
        ...cart.filter((cartItem) => cartItem.id !== item.id),
        { ...item, qty: newQty },
      ]);
    } else {
      setCart([...cart, { ...item, qty }]);
    }
    addToCart(qty);
  };

  function sumQty(item, qty) {
    return qty + cart.filter((cartItem) => cartItem.id === item.id)[0].qty;
  }

  function isInCart(item) {
    return cart.some((cartItem) => cartItem.id === item.id);
  }

  function removeItem(item) {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
