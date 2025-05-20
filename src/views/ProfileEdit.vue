<template>
  <div class="max-w-2xl mx-auto p-6 bg-gray-900 min-h-screen text-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-green-400 mb-6 text-center">แก้ไขข้อมูลผู้ใช้</h1>

    <form @submit.prevent="saveChanges" class="space-y-6">
      <!-- ชื่อผู้ใช้ -->
      <div>
        <label class="block font-semibold mb-1">ชื่อผู้ใช้</label>
        <input
          v-model="form.username"
          type="text"
          class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <!-- อีเมล -->
      <div>
        <label class="block font-semibold mb-1">อีเมล</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <!-- รหัสผ่านใหม่ -->
      <div>
        <label class="block font-semibold mb-1">รหัสผ่านใหม่ (ถ้าต้องการเปลี่ยน)</label>
        <input
          v-model="form.password"
          type="password"
          class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <!-- ปุ่ม -->
      <div class="flex justify-between gap-4 pt-4">
        <button
          type="submit"
          class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold transition"
        >
          บันทึก
        </button>
        <button
          type="button"
          @click="goBack"
          class="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded font-semibold transition"
        >
          ย้อนกลับ
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const router = useRouter();
const notyf = new Notyf();

const form = reactive({
  username: "user123",
  email: "user123@example.com",
  password: "",
});

const saveChanges = () => {
  // TODO: ส่งข้อมูลไป backend เพื่ออัปเดตจริง
  notyf.success("บันทึกข้อมูลเรียบร้อยแล้ว");
  router.push("/userprofile");
};

const goBack = () => {
  router.push("/userprofile");
};
</script>

<style scoped>
/* Tailwind CSS ครบแล้ว ไม่ต้องเพิ่มสไตล์ */
</style>
