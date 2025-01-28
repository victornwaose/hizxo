<template>
  <div v-if="showModal" class="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg w-96">
      <img src="/images/icon-order-confirmed.svg" alt="Order confirmed" class="my-4" />
      <h3 class="text-xl font-bold text-gray-900 mb-1">Order Confirmed</h3>
      <span class="text-xs text-orange-900">We hope you enjoyed your food!</span>

      <ul class="mt-4">
        <li v-for="(item, index) in cart" :key="index" class="flex justify-between items-center border-b border-gray-200 py-2">
          <div class="flex flex-col">
            <span class="text-base font-bold">{{ item.name }}</span>
            <div class="flex gap-4 text-sm mt-2">
              <span class="text-orange-600 font-bold">{{ item.quantity }}X</span>
              <span class="text-gray-600 font-bold">${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
          </div>
        </li>
      </ul>

      <div class="mt-4 flex justify-between items-center">
        <span class="font-medium text-gray-600">Total:</span>
        <span class="font-bold text-lg">${{ totalPrice.toFixed(2) }}</span>
      </div>

      <button @click="clearAndClose" class="mt-4 w-full bg-orange-600 py-2 rounded-3xl text-white">Start New Order</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import type { CartItem } from "../utils/types";

const props = defineProps<{
  showModal: boolean;
  cart: CartItem[];
}>();

const emit = defineEmits<{
  (e: 'close-modal'): void;
  (e: 'clear-cart'): void;
}>();

const totalPrice = computed(() => {
  return props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});

const clearAndClose = () => {
  emit('clear-cart'); 
  emit('close-modal');
};
</script>
