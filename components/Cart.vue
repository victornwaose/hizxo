<template>
  <div class="mt-6 px-4 py-6 bg-white rounded-2xl shadow-lg">
    <h2 class="text-2xl text-orange-600 font-bold mb-4">Your Cart ({{ cart.length }})</h2>

    <!-- Empty Cart -->
    <div v-if="cart.length === 0" class="flex flex-col items-center">
      <img
        src="/images/illustration-empty-cart.svg"
        alt="Empty Cart"
        class="w-32 h-32 mb-2"
      />
      <p class="text-gray-500">Your added items will appear here</p>
    </div>

    <div v-else>
      <ul>
        <li
          v-for="(item, index) in cart"
          :key="item.id"
          class="flex justify-between items-center border-b border-gray-200 py-2"
        >
          <div class="flex flex-col">
            <span class="text-base font-bold">{{ item.name }}</span>
            <div class="flex gap-4 text-sm mt-2">
              <span class="text-orange-600 font-bold">{{ item.quantity }}X</span>
              <span class="text-gray-500 font-medium">@ ${{ item.price }}</span>
              <span class="text-gray-600 font-bold">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </span>
            </div>
          </div>
          <img
            src="/images/icon-remove-item.svg"
            alt="remove"
            class="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100"
            @click="handleRemoveItem(item)"
          />
        </li>
      </ul>

      <div class="mt-4 flex justify-between items-center">
        <span class="font-medium text-gray-600 text-sm">Order Total:</span>
        <span class="font-bold text-lg">${{ totalPrice.toFixed(2) }}</span>
      </div>

      <div class="flex gap-3 p-4 bg-orange-50 mt-4">
        <img src="/images/icon-carbon-neutral.svg" alt="carbon neutral" />
        <p class="text-sm">
          This is a <span class="font-bold">carbon-neutral</span> delivery
        </p>
      </div>


      <button
        @click="openModal"
        class="bg-orange-600 px-6 rounded-3xl w-full mt-5 py-2 text-white"
      >
        Confirm Order
      </button>
    </div>
  </div>


  <CartModal
    :showModal="showModal"
    :cart="cart"
    @close-modal="closeModal"
    @clear-cart="handleClearCart"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";
import type { CartItem } from "../utils/types"; 
import CartModal from "./CartModal.vue"; 


const props = defineProps({
  cart: {
    type: Array as PropType<CartItem[]>, 
    required: true,
  },
  totalPrice: {
    type: Number, 
    required: true,
  },
  showModal: {
    type: Boolean, 
    required: true,
  },
});


const emit = defineEmits([
  "remove-item",
  "clear-cart",
  "open-modal",
  "close-modal",
]);


const handleRemoveItem = (item: CartItem) => {
  emit("remove-item", item);
};

const handleClearCart = () => {
  emit("clear-cart");
};


const openModal = () => {
  emit("open-modal");
};


const closeModal = () => {
  emit("close-modal");
};
</script>
