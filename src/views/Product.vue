<template>
  <div class="p-6 max-w-6xl mx-auto bg-gray-900 min-h-screen">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-green-400 mb-6">ร้านค้า</h1>

    <!-- Category Filter -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        class="px-4 py-2 rounded-full border text-sm font-medium transition"
        :class="selectedCategory === 'ทั้งหมด' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-green-700'"
        @click="selectCategory('ทั้งหมด')"
      >
        ทั้งหมด
      </button>
      <button
        v-for="category in categories"
        :key="category"
        class="px-4 py-2 rounded-full border text-sm font-medium transition"
        :class="selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-green-700'"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- Item Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <router-link
        v-for="item in filteredItems"
        :key="item.id"
        :to="`/product/${item.id}`"
        class="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-lg transition block"
      >
        <img :src="item.image" :alt="item.name" class="w-full h-40 object-cover rounded-md mb-3" />
        <h2 class="text-lg font-semibold text-white">{{ item.name }}</h2>
        <p class="text-sm text-gray-400 mb-2">หมวดหมู่: {{ item.category }}</p>
        <p class="text-green-400 font-bold">฿{{ item.price.toLocaleString() }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedCategory = ref("ทั้งหมด");

const categories = ["เกมมือถือ", "เกม PC", "บัตรเติมเงิน", "ไอเทมโค้ด"];

const items = ref([
  { id: 1, name: "ROV ID แรงค์สูง", category: "เกมมือถือ", price: 399, image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Steam Wallet 100 บาท", category: "บัตรเติมเงิน", price: 100, image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "PUBG ID พร้อมสกิน", category: "เกม PC", price: 799, image: "https://via.placeholder.com/300x200" },
  { id: 4, name: "โค้ดไอเทม Ragnarok", category: "ไอเทมโค้ด", price: 199, image: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Free Fire ID แรงค์แดง", category: "เกมมือถือ", price: 259, image: "https://via.placeholder.com/300x200" },
]);

const selectCategory = (cat) => {
  selectedCategory.value = cat;
};

const filteredItems = computed(() => {
  if (selectedCategory.value === "ทั้งหมด") return items.value;
  return items.value.filter((item) => item.category === selectedCategory.value);
});
</script>

<style scoped>
button {
  border-color: #4b5563; /* เทาเข้ม */
}
</style>
