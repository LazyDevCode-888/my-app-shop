<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Banner Carousel -->
    <div class="relative w-full overflow-hidden rounded-lg shadow-lg">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(banner, index) in banners"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <img
            :src="banner.image"
            :alt="banner.alt"
            class="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
      <!-- Controls -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
      >
        ‹
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
      >
        ›
      </button>
    </div>

    <!-- Statistics -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div class="bg-green-800/20 rounded-lg p-6 shadow">
        <p class="text-3xl font-bold text-green-300">{{ stats.sold }}</p>
        <p class="text-gray-300 mt-2">สินค้าขายไปแล้ว</p>
      </div>
      <div class="bg-green-800/20 rounded-lg p-6 shadow">
        <p class="text-3xl font-bold text-green-300">{{ stats.totalProducts }}</p>
        <p class="text-gray-300 mt-2">สินค้าทั้งหมด</p>
      </div>
      <div class="bg-green-800/20 rounded-lg p-6 shadow">
        <p class="text-3xl font-bold text-green-300">{{ stats.visitors }}</p>
        <p class="text-gray-300 mt-2">ผู้เข้าชมเว็บ</p>
      </div>
    </div>

    <!-- Recommended Products -->
    <section class="mt-12">
      <h2 class="text-2xl font-extrabold text-white mb-6">สินค้าแนะนำ</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <router-link
          v-for="product in recommendedProducts"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="border border-gray-700 rounded-lg p-4 shadow hover:shadow-xl hover:border-green-400 transition block bg-gray-800/40"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-40 object-cover rounded-md"
          />
          <h3 class="mt-3 font-semibold text-gray-100">{{ product.name }}</h3>
          <p class="mt-1 text-green-300 font-bold">
            {{ formatPrice(product.price) }}
          </p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const banners = ref([
  {
    image: "https://source.unsplash.com/featured/?gaming",
    alt: "Gaming Banner",
  },
  {
    image: "https://source.unsplash.com/featured/?technology",
    alt: "Technology Banner",
  },
  {
    image: "https://source.unsplash.com/featured/?apps",
    alt: "Apps Banner",
  },
]);

const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + banners.value.length) % banners.value.length;
};

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000);
});
onUnmounted(() => {
  clearInterval(slideInterval);
});

const stats = ref({
  sold: 1500,
  totalProducts: 350,
  visitors: 12000,
});

const recommendedProducts = ref([
  {
    id: 1,
    name: "Game ID: Valorant Premium",
    price: 1200,
    image: "https://source.unsplash.com/featured/?game",
  },
  {
    id: 2,
    name: "Premium App Access",
    price: 900,
    image: "https://source.unsplash.com/featured/?app",
  },
  {
    id: 3,
    name: "Game ID: Apex Legends",
    price: 1500,
    image: "https://source.unsplash.com/featured/?gaming,controller",
  },
  {
    id: 4,
    name: "Game ID: Minecraft VIP",
    price: 800,
    image: "https://source.unsplash.com/featured/?minecraft",
  },
]);

const formatPrice = (price) => {
  return price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
};
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมได้ */
</style>
