<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">

    <button
      @click="goBack"
      class="mb-6 text-green-600 hover:text-green-700 transition-colors cursor-pointer font-semibold"
    >
      ← กลับ
    </button>

    <h1 class="text-3xl font-bold mb-4 text-green-800">{{ product.name }}</h1>
    <p class="mb-3 text-green-700 font-semibold text-xl">{{ formatPrice(product.price) }}</p>
    <p class="mb-8 text-gray-700 leading-relaxed">{{ product.description }}</p>

    <div class="flex space-x-4 mb-8">
      <img
        v-for="(img, index) in product.images"
        :key="index"
        :src="img"
        alt="product image"
        class="w-24 h-24 object-cover cursor-pointer border-2 rounded-md"
        :class="selectedImage === img ? 'border-green-600' : 'border-gray-300'"
        @click="selectedImage = img"
      />
    </div>

    <div>
      <img
        v-if="selectedImage"
        :src="selectedImage"
        alt="selected product image"
        class="w-full max-h-72 object-contain rounded-md shadow-md"
      />
    </div>

    <button
      @click="showModal = true"
      class="mt-8 w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
    >
      ซื้อสินค้า
    </button>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <p class="mb-6 text-lg font-medium text-gray-800">ยืนยันการซื้อสินค้านี้?</p>
        <div class="flex justify-end space-x-4">
          <button
            @click="showModal = false"
            class="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            ยกเลิก
          </button>
          <button
            @click="confirmPurchase"
            class="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            ยืนยันซื้อ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const route = useRoute();
const router = useRouter();

const notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "top" },
  dismissible: true,
});

const productId = route.params.id;

const products = [
  {
    id: "1",
    name: "Game ID: Valorant Premium",
    price: 1200,
    description: "บัญชี Valorant Premium พร้อมสกินหลากหลายและไอเท็มพิเศษ",
    images: [
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "2",
    name: "Premium App Access",
    price: 900,
    description: "สิทธิ์ใช้งานแอปพรีเมี่ยม พร้อมฟีเจอร์พิเศษมากมาย",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const product = ref(
  products.find((p) => p.id === productId) || {
    id: "",
    name: "ไม่พบสินค้า",
    price: 0,
    description: "ไม่มีรายละเอียดสินค้า",
    images: [],
  }
);

const selectedImage = ref(product.value.images[0] || "");

const formatPrice = (price) =>
  price.toLocaleString("th-TH", { style: "currency", currency: "THB" });

const showModal = ref(false);

const confirmPurchase = () => {
  showModal.value = false;
  notyf.success("สั่งซื้อสินค้าเรียบร้อยแล้ว 🎉");
};

const goBack = () => {
  router.back();
};
</script>
