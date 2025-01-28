<template>
  <div class="rounded-2xl overflow-hidden relative flex flex-col">

    <div class="relative flex-grow">
      <img :src="dessert?.image" :alt="dessert.name" class="w-full rounded-2xl h-72 object-cover" />
    </div>


    <button
      @click="handleAddToCart"
      class="group w-[70%] text-sm z-10 py-3 px-3 shadow-md hover:border bg-white text-black font-bold rounded-full hover:border-orange-600 flex items-center self-center -mt-5"
    >
      <img src="/images/icon-add-to-cart.svg" alt="Add to Cart" class="mr-3" />
      <span class="group-hover:text-orange-600">Add to Cart</span>
    </button>

    <!-- Content -->
    <div class="p-4 mt-5 text-left">
      <h2 class="text-xs text-gray-600 font-light mb-1">{{ dessert.name }}</h2>
      <p class="text-base font-semibold mb-1">{{ dessert.desc }}</p>
      <p class="text-orange-600 font-bold text-sm">${{ dessert.price }}.00</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Dessert } from "@/utils/types";

const props = defineProps<{
  dessert: Dessert;
}>();

const emit = defineEmits<{
  (e: 'add-to-cart', item: Dessert): void;
}>();


const handleAddToCart = () => {
  emit('add-to-cart', props.dessert);
};
</script>
