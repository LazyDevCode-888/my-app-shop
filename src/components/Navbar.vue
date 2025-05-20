<template>
  <nav class="bg-white shadow-md px-6 py-3 flex items-center justify-between relative font-sans">
    <!-- Logo -->
    <router-link to="/" class="flex items-center text-2xl font-extrabold text-green-700 hover:text-green-800 transition tracking-wide px-4 py-1 rounded-md">
      My Vue App
    </router-link>

    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-4 ml-4">
      <router-link to="/" :class="linkClass('/')" class="font-medium transition">Home</router-link>
      <router-link to="/about" :class="linkClass('/about')" class="font-medium transition">About</router-link>
      <router-link to="/product" :class="linkClass('/product')" class="font-medium transition">ร้านค้า</router-link>
      <router-link to="/deposit" :class="linkClass('/deposit')" class="font-medium transition">เติมเงิน</router-link>
      <router-link to="/history" :class="linkClass('/history')" class="font-medium transition">รายการ</router-link>
      <router-link to="/contact" :class="linkClass('/contact')" class="font-medium transition">ติดต่อ</router-link>
    </div>

    <!-- Profile + Mobile Menu -->
    <div class="relative flex items-center gap-4" ref="profileMenuWrapper">
      <template v-if="userLoggedIn">
        <div @click="toggleProfileMenu" class="hidden md:flex items-center gap-3 cursor-pointer relative select-none">
          <img :src="user.avatar" alt="Profile" class="w-8 h-8 rounded-full" />
          <div class="flex flex-col text-right leading-tight">
            <span class="text-gray-800 font-semibold text-sm">{{ user.name }}</span>
            <span class="text-green-600 text-xs font-medium">฿{{ user.balance.toLocaleString() }}</span>
          </div>
          <svg
            class="ml-1 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>

          <!-- Dropdown เมนู -->
          <div
            v-if="showProfileMenu"
            ref="dropdownRef"
            @click.stop
            class="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg w-40 py-2 z-50"
          >
            <button
              @click="goToProfile"
              class="block w-full text-left text-gray-600 px-4 py-2 hover:bg-gray-100"
            >
              ดูโปรไฟล์
            </button>
            <button
              @click="logout"
              class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              ออกจากระบบ
            </button>
          </div>
        </div>
      </template>

      <template v-else>
        <router-link to="/login" class="text-green-600 font-semibold hover:text-green-800 transition px-4 py-2 border border-green-600 rounded-md hidden md:inline-block">
          เข้าสู่ระบบ
        </router-link>
        <router-link to="/register" class="text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md hidden md:inline-block">
          สมัครสมาชิก
        </router-link>
      </template>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isOpen" class="absolute top-16 left-4 bg-white rounded-lg shadow-md p-4 w-44 md:hidden z-50">
      <router-link to="/" :class="linkClass('/') + ' block px-2 py-2 font-medium transition'" @click="closeMenu">Home</router-link>
      <router-link to="/about" :class="linkClass('/about') + ' block px-2 py-2 font-medium transition'" @click="closeMenu">About</router-link>
      <router-link to="/product" :class="linkClass('/product') + ' block px-2 py-2 font-medium transition'" @click="closeMenu">ร้านค้า</router-link>
      <router-link to="/deposit" :class="linkClass('/deposit') + ' block px-2 py-2 font-medium transition'" @click="closeMenu">เติมเงิน</router-link>
      <router-link to="/history" :class="linkClass('/history') + ' block px-2 py-2 font-medium transition'" @click="closeMenu">รายการ</router-link>
      <router-link to="/contact" :class="linkClass('/contact') + ' block px-2 py-2 font-medium transition'" @click="closeMenu">ติดต่อ</router-link>

      <hr class="my-2" />

      <template v-if="userLoggedIn">
        <button @click="goToProfile" class="block w-full text-left px-2 py-2 text-gray-600 hover:bg-gray-100">
          ดูโปรไฟล์
        </button>
      </template>
      <template v-if="userLoggedIn">
        <button @click="logout" class="block w-full text-left px-2 py-2 text-red-600 hover:bg-gray-100">
          ออกจากระบบ
        </button>
      </template>

      <template v-else>
        <router-link to="/login" class="block px-2 py-2 font-medium text-green-600 hover:bg-green-100 rounded" @click="closeMenu">เข้าสู่ระบบ</router-link>
        <router-link to="/register" class="block px-2 py-2 font-medium text-white bg-green-600 hover:bg-green-700 rounded" @click="closeMenu">สมัครสมาชิก</router-link>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isOpen = ref(false);
const showProfileMenu = ref(false);

const userLoggedIn = ref(true);

const user = {
  name: "นายทดสอบ",
  avatar: "https://i.pravatar.cc/40",
  balance: 123456,
};

const dropdownRef = ref(null);
const profileMenuWrapper = ref(null);

const linkClass = (path) =>
  route.path === path
    ? "text-green-600 font-semibold"
    : "text-gray-800 hover:text-green-600";

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  showProfileMenu.value = false;
};

const closeMenu = () => {
  isOpen.value = false;
};

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
  isOpen.value = false;
};

const logout = () => {
  alert("ออกจากระบบแล้ว!");
  userLoggedIn.value = false;
  showProfileMenu.value = false;
  router.push("/login");
};

const goToProfile = () => {
  // showProfileMenu.value = false;
router.push({ name: 'UserProfile' });

};

const handleClickOutside = (event) => {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target) &&
    profileMenuWrapper.value &&
    !profileMenuWrapper.value.contains(event.target)
  ) {
    showProfileMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* cursor pointer ให้ทั้งบล็อกโปรไฟล์ */
</style>
