<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-20">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-green-700 mb-8 text-center">สมัครสมาชิก</h2>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label for="username" class="block mb-2 font-semibold text-gray-700">ชื่อผู้ใช้</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            placeholder="กรอกชื่อผู้ใช้"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label for="email" class="block mb-2 font-semibold text-gray-700">อีเมล</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="กรอกอีเมล"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label for="password" class="block mb-2 font-semibold text-gray-700">รหัสผ่าน</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="กรอกรหัสผ่าน"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition disabled:opacity-60"
        >
          สมัครสมาชิก
        </button>
      </form>

      <p class="mt-8 text-center text-gray-600 text-sm">
        มีบัญชีแล้ว? 
        <button
          @click="$router.push('/login')"
          class="text-green-600 hover:underline font-semibold"
        >
          เข้าสู่ระบบ
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const router = useRouter();
const notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "top" },
  dismissible: true,
});

const form = reactive({
  username: "",
  email: "",
  password: "",
});

const handleRegister = () => {
  if (!form.username || !form.email || !form.password) {
    notyf.error("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    return;
  }

  // TODO: ส่งข้อมูลไป backend
  notyf.success(`สมัครสมาชิกเรียบร้อย: ${form.username}`);
  router.push("/login"); // ไปหน้า login หลังสมัครสำเร็จ
};
</script>

<style scoped>
/* สามารถเพิ่มสไตล์เฉพาะได้ */
</style>
