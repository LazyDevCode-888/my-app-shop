<template>
  <div class="max-w-3xl mx-auto p-6 bg-gray-900 min-h-screen text-white rounded-lg shadow-lg">
    <h1 class="text-4xl font-bold text-green-400 mb-8 text-center">ข้อมูลโปรไฟล์ผู้ใช้</h1>

    <div class="bg-gray-800 rounded-lg p-6 space-y-6">
      <!-- ข้อมูลส่วนตัว -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">ข้อมูลส่วนตัว</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
          <div>
            <label class="font-semibold">ชื่อผู้ใช้</label>
            <p class="mt-1 text-white">{{ user.username }}</p>
          </div>
          <div>
            <label class="font-semibold">อีเมล</label>
            <p class="mt-1 text-white">{{ user.email }}</p>
          </div>
          <div>
            <label class="font-semibold">วันที่สมัคร</label>
            <p class="mt-1 text-white">{{ formattedDate(user.createdAt) }}</p>
          </div>
        </div>
      </div>

      <!-- ยอดเงิน -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">สถานะทางการเงิน</h2>
        <div class="space-y-2">
          <p class="text-green-400 text-2xl font-bold">
            ยอดเงินคงเหลือ: ฿{{ user.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </p>
          <p class="text-red-400 text-xl font-semibold">
            ยอดเงินที่ใช้ไปแล้ว: ฿{{ user.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </p>
        </div>
      </div>

      <!-- ปุ่ม -->
      <div class="flex gap-4 justify-center mt-6">
        <button
          @click="editProfile"
          class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-semibold transition"
        >
          แก้ไขข้อมูล
        </button>
        <button
          @click="logout"
          class="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold transition"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const router = useRouter();
const notyf = new Notyf();

// ตัวอย่างข้อมูลผู้ใช้
const user = reactive({
  username: "user123",
  email: "user123@example.com",
  createdAt: "2023-07-01T10:30:00Z",
  balance: 1250.75,
  totalSpent: 3499.25, // เพิ่มยอดที่ใช้ไปแล้ว
});

// แปลงวันที่ให้อ่านง่าย
const formattedDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const editProfile = () => {
  router.push("/profile/edit");
};

const logout = () => {
  notyf.success("ออกจากระบบเรียบร้อย");
  router.push("/login");
};
</script>

<style scoped>
/* ใช้ Tailwind CSS อยู่แล้ว ไม่ต้องเพิ่มอะไร */
</style>
