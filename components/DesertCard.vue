<template>
  <div class="rounded-2xl overflow-hidden relative flex flex-col">
    <div class="relative flex-grow">
      <img 
        :src="dessert?.image" 
        :alt="dessert.name" 
        class="w-full rounded-2xl h-72 object-cover" 
        :class="{'border-4 border-orange-600': inCart}" 
      />
    </div>

    <!-- Button to add to cart or show quantity control -->
    <div v-if="!inCart" class="group w-[70%] justify-center text-sm z-10 py-3 px-3 shadow-md hover:border bg-white text-black font-bold rounded-full hover:border-orange-600 flex items-center self-center -mt-5">
      <img src="/images/icon-add-to-cart.svg" alt="Add to Cart" class="mr-3" />
      <span class="group-hover:text-orange-600 cursor-pointer" @click="handleAddToCart">Add to Cart</span>
    </div>

    <div v-else :class="{'border-2 border-orange-600': inCart}" class="flex items-center z-10 justify-between w-[70%] py-3 px-3 shadow-md bg-white text-black font-bold rounded-full self-center -mt-5">
      <button 
        @click="decreaseQuantity" 
        class="text-lg cursor-pointer border border-orange-600 bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        -
      </button>
      <span class="text-sm">{{ quantity }}</span>
      <button 
        @click="increaseQuantity" 
        class="text-lg cursor-pointer border border-orange-600 bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        +
      </button>
    </div>

    <!-- Content -->
    <div class="p-4 mt-5 text-left">
      <h2 class="text-xs text-gray-600 font-light mb-1">{{ dessert.name }}</h2>
      <p class="text-base font-semibold mb-1">{{ dessert.desc }}</p>
      <p class="text-orange-600 font-bold text-sm">${{ dessert.price }}.00</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import type { Dessert } from "../utils/types";

const props = defineProps<{
  dessert: Dessert;
}>();

const emit = defineEmits<{
  (e: 'add-to-cart', item: Dessert, quantity: number): void;
  (e: 'remove-from-cart', item: Dessert): void; 
}>();


const quantity = ref(1);


const inCart = ref(false);

const handleAddToCart = () => {
  inCart.value = true;
  emit('add-to-cart', props.dessert, quantity.value);
};

const increaseQuantity = () => {
  quantity.value++;
  emit('add-to-cart', props.dessert, quantity.value);
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
    emit('add-to-cart', props.dessert, quantity.value);
  } else {
    // If the quantity is 1 or less, remove from cart
    inCart.value = false;
    emit('remove-from-cart', props.dessert);
  }
};
</script>
