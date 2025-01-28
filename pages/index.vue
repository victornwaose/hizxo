<template>
  <div class="w-[90%] mx-auto p-4 min-h-screen">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-[70%]">
        <h1 class="text-3xl font-bold mb-7">Desserts</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DessertCard
            v-for="(dessert, index) in desserts"
            :key="index"
            :dessert="dessert"
            :inCart="isInCart(dessert)"
            :quantity="getQuantity(dessert)"
            @add-to-cart="handleAddToCart"
            @remove-from-cart="handleRemoveFromCart"
            @increase-quantity="handleIncreaseQuantity"
            @decrease-quantity="handleDecreaseQuantity"
          />
        </div>
      </div>

      <div class="w-full md:w-[30%] ml-0 md:ml-6">
        <Cart
          :cart="cart"
          :totalPrice="totalPrice"
          :showModal="showModal"
          @remove-item="handleRemoveFromCart"
          @clear-cart="clearCart"
          @open-modal="openModal"
          @close-modal="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import DessertCard from "../components/DesertCard.vue";
import Cart from "../components/Cart.vue";
import type { Dessert, CartItem } from "../utils/types";

const desserts = ref<Dessert[]>([
  { id: 1, name: "Waffle with Berries", desc: "Sweet and fruity waffle", price: 11, image: "/images/image-cake-desktop.jpg" },
  { id: 2, name: "Vanilla Bean Crème Brûlée", desc: "Classic dessert", price: 12, image: "/images/image-baklava-mobile.jpg" },
  { id: 3, name: "Macaron Mix of Five", desc: "Colorful and delicious", price: 10, image: "/images/image-macaron-desktop.jpg" },
  { id: 4, name: "Fudge Brownie", desc: "Rich and chocolatey", price: 9, image: "/images/image-brownie-desktop.jpg" },
  { id: 5, name: "Panna Cotta", desc: "Creamy Italian dessert", price: 8, image: "/images/image-panna-cotta-mobile.jpg" },
  { id: 6, name: "Meringue Delight", desc: "Light and crispy", price: 4, image: "/images/image-meringue-tablet.jpg" },
  { id: 7, name: "Tiramisu", desc: "Coffee-flavored favorite", price: 14, image: "/images/image-tiramisu-tablet.jpg" },
  { id: 8, name: "Crème Brûlée", desc: "Caramelized topping", price: 3, image: "/images/image-creme-brulee-thumbnail.jpg" },
  { id: 9, name: "Tiramisu Deluxe", desc: "Extra indulgent", price: 17, image: "/images/image-tiramisu-desktop.jpg" },
]);


const cart = ref<CartItem[]>([]);

const showModal = ref(false);


const handleAddToCart = (dessert: Dessert) => {
  const existingItem = cart.value.find((cartItem) => cartItem.id === dessert.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...dessert, quantity: 1 });
  }
};


const handleRemoveFromCart = (dessert: Dessert) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== dessert.id);
};


const handleIncreaseQuantity = (dessert: Dessert) => {
  const cartItem = cart.value.find((cartItem) => cartItem.id === dessert.id);
  if (cartItem) {
    cartItem.quantity += 1;
  }
};


const handleDecreaseQuantity = (dessert: Dessert) => {
  const cartItem = cart.value.find((cartItem) => cartItem.id === dessert.id);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      handleRemoveFromCart(dessert);
    }
  }
};


const clearCart = () => {
  cart.value = [];
};


const isInCart = (dessert: Dessert) => {
  return cart.value.some((cartItem) => cartItem.id === dessert.id);
};

const getQuantity = (dessert: Dessert) => {
  const cartItem = cart.value.find((cartItem) => cartItem.id === dessert.id);
  return cartItem ? cartItem.quantity : 0;
};


const totalPrice = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
});


const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>
