<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-20">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-green-700 text-center mb-8">
        เข้าสู่ระบบ
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-gray-700 font-semibold mb-2">ชื่อผู้ใช้</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="กรอกชื่อผู้ใช้"
            class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            autocomplete="username"
          />
          <p v-if="errors.username" class="text-red-600 text-sm mt-1">{{ errors.username }}</p>
        </div>

        <div>
          <label for="password" class="block text-gray-700 font-semibold mb-2">รหัสผ่าน</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="กรอกรหัสผ่าน"
            class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            autocomplete="current-password"
          />
          <p v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password }}</p>
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition disabled:opacity-60"
          :disabled="loading"
        >
          {{ loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
        </button>
      </form>

      <div class="my-8 text-center text-gray-400 font-semibold">หรือ</div>

      <button
        @click="handleGoogleLogin"
        class="w-full flex items-center justify-center gap-4 border border-gray-300 hover:border-green-600 rounded-md py-3 transition disabled:opacity-60"
        :disabled="loading"
      >
        <svg class="w-6 h-6" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37.3-4.8-55.2H272v104.6h147.4c-6.4 34.6-26.1 63.9-55.6 83.5v69.2h89.8c52.7-48.5 83-120 83-202.1z"/>
          <path fill="#34a853" d="M272 544.3c73.7 0 135.6-24.4 180.8-66.4l-89.8-69.2c-25 17-56.8 27.1-91 27.1-69.8 0-129-47-150.2-110.2h-92v69.5c45.3 89.4 137.9 149.2 242.2 149.2z"/>
          <path fill="#fbbc04" d="M121.8 324.8c-10.7-31.8-10.7-66.5 0-98.3v-69.5h-92c-38.4 75.9-38.4 166.4 0 242.3l92-74.5z"/>
          <path fill="#ea4335" d="M272 107.7c39.9 0 75.8 13.7 104.1 40.6l78-78C408.6 24.1 346.7 0 272 0 167.6 0 75 59.8 29.8 149.2l92 74.5c21.3-63.2 80.5-110.2 150.2-110.2z"/>
        </svg>
        <span class="font-semibold text-gray-700">เข้าสู่ระบบด้วย Google</span>
      </button>

      <p class="mt-8 text-center text-sm text-gray-600">
        ยังไม่มีบัญชี? 
        <router-link to="/register" class="text-green-600 hover:underline font-semibold">สมัครสมาชิก</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const errors = ref({})

const notyf = new Notyf({
  duration: 3000,
  position: { x: 'right', y: 'top' },
  dismissible: true,
})

const validate = () => {
  errors.value = {}

  if (!username.value.trim()) {
    errors.value.username = 'กรุณากรอกชื่อผู้ใช้'
  }

  if (!password.value) {
    errors.value.password = 'กรุณากรอกรหัสผ่าน'
  }

  return Object.keys(errors.value).length === 0
}

const handleLogin = () => {
  if (!validate()) return

  loading.value = true

  // ตัวอย่างจำลองการล็อกอิน (เชื่อม API จริงได้ที่นี่)
  setTimeout(() => {
    loading.value = false
    notyf.success(`ล็อกอินสำเร็จ! ชื่อผู้ใช้: ${username.value}`)
    // หลังล็อกอินเสร็จให้ไปหน้าโฮม
    router.push('/')
  }, 1500)
}

const handleGoogleLogin = () => {
  loading.value = true
  // ตัวอย่างจำลองล็อกอิน Google
  setTimeout(() => {
    loading.value = false
    notyf.success('ล็อกอินด้วย Google สำเร็จ!')
    router.push('/')
  }, 1500)
}
</script>

<style scoped>
/* ถ้าต้องการเพิ่มสไตล์เฉพาะ */
</style>
