<template>
    <div class="w-[90%] mx-auto p-4 min-h-screen">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-[70%]">
          <h1 class="text-3xl font-bold mb-7">Desserts</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DessertCard 
              v-for="(item, index) in desserts" 
              :key="index" 
              :dessert="item" 
              @add-to-cart="addToCart" 
            />
          </div>
        </div>
    
        <div class="w-full md:w-[30%] ml-0 md:ml-6">
          <Cart :initialCart="cart" @remove-item="removeFromCart" /> 
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import type { Dessert, CartItem } from "../utils/types";
  import DessertCard from "../components/DesertCard.vue";
  import Cart from "../components/Cart.vue"; 
  
  
  const desserts = ref<Dessert[]>([
    { id: 1, name: "Waffle with Berries", desc: "Waffle with Berries", price: 11, image: "/images/image-cake-desktop.jpg" },
    { id: 2, name: "Vanilla Bean Crème Brûlée", desc: "Waffle with berries", price: 12, image: "/images/image-baklava-mobile.jpg" },
    { id: 3, name: "Macaron Mix of Five", desc: "Waffle with Berries", price: 10, image: "/images/image-macaron-desktop.jpg" },
    { id: 4, name: "Macaron Mix of Five", desc: "Waffle with Berries", price: 9, image: "/images/image-macaron-desktop.jpg" },
    { id: 5, name: "Macaron Mix of Five", desc: "Waffle with Berries", price: 8, image: "/images/image-macaron-desktop.jpg" },
    { id: 6, name: "Waffle", desc: "Waffle with Berries", price: 4, image: "/images/image-macaron-desktop.jpg" }
  ]);
  
  
  const cart = ref<CartItem[]>([]);
  
  
  const addToCart = (item: Dessert) => {
    const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem: CartItem = { ...item, quantity: 1 };
      cart.value.push(newItem);
    }
  };
  
 
  const removeFromCart = (item: CartItem) => {
    const itemIndex = cart.value.findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex !== -1) {
      cart.value.splice(itemIndex, 1); 
    }
  };
  </script>
  