// composables/useCart.ts
import { reactive } from 'vue';
import type { Dessert } from "@/utils/types";

interface CartItem {
  dessert: Dessert;
  quantity: number;
}

const cart = reactive<CartItem[]>([]);

const addToCart = (dessert: Dessert) => {
  const itemIndex = cart.findIndex((item) => item.dessert.id === dessert.id);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ dessert, quantity: 1 });
  }
};

const increaseQuantity = (dessertId: number) => {
  const item = cart.find((item) => item.dessert.id === dessertId);
  if (item) item.quantity += 1;
};

const decreaseQuantity = (dessertId: number) => {
  const item = cart.find((item) => item.dessert.id === dessertId);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else if (item && item.quantity === 1) {
    cart.splice(cart.indexOf(item), 1); // Remove item from cart if quantity reaches 0
  }
};

const getCart = () => cart;

export const useCart = () => {
  return {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getCart,
  };
};
