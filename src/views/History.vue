<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 px-6 py-10">
    <div class="max-w-6xl mx-auto">

      <!--  รายการไอดีที่ซื้อ -->
      <h2 class="text-2xl font-bold text-green-400 mb-4">🎮 รายการไอดีที่ซื้อ</h2>
      <div class="bg-gray-800 rounded-lg overflow-x-auto shadow mb-4">
        <table class="w-full text-sm md:text-base">
          <thead class="bg-green-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">เกม</th>
              <th class="px-4 py-3 text-left">ชื่อผู้ใช้</th>
              <th class="px-4 py-3 text-left">รหัสผ่าน</th>
              <th class="px-4 py-3 text-left">วันที่ซื้อ</th>
              <th class="px-4 py-3 text-left">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in paginatedPurchased"
              :key="'acc-' + index"
              class="border-b border-gray-700 hover:bg-gray-700 transition"
            >
              <td class="px-4 py-3">{{ item.game }}</td>
              <td class="px-4 py-3">{{ item.username }}</td>
              <td class="px-4 py-3">{{ item.password }}</td>
              <td class="px-4 py-3">{{ item.date }}</td>
              <td class="px-4 py-3 text-green-400">{{ item.status }}</td>
            </tr>
            <tr v-if="purchasedAccounts.length === 0">
              <td colspan="5" class="text-center px-4 py-6 text-gray-400">ยังไม่มีการสั่งซื้อ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center gap-2 mb-10">
        <button
          @click="prevPagePurchased"
          :disabled="currentPagePurchased === 1"
          class="px-3 py-1 bg-gray-700 text-white rounded hover:bg-green-600 disabled:opacity-30"
        >
          ย้อนกลับ
        </button>
        <button
          v-for="page in totalPagesPurchased"
          :key="page"
          @click="currentPagePurchased = page"
          :class="[
            'px-3 py-1 rounded',
            currentPagePurchased === page ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-green-600',
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPagePurchased"
          :disabled="currentPagePurchased === totalPagesPurchased"
          class="px-3 py-1 bg-gray-700 text-white rounded hover:bg-green-600 disabled:opacity-30"
        >
          ถัดไป
        </button>
      </div>

      <!--  ประวัติการเติมเงิน -->
      <h2 class="text-2xl font-bold text-green-400 mb-4">💰 ประวัติการเติมเงิน</h2>
      <div class="bg-gray-800 rounded-lg overflow-x-auto shadow mb-4">
        <table class="w-full text-sm md:text-base">
          <thead class="bg-green-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">วันที่</th>
              <th class="px-4 py-3 text-left">จำนวนเงิน</th>
              <th class="px-4 py-3 text-left">ช่องทาง</th>
              <th class="px-4 py-3 text-left">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in paginatedTopup"
              :key="'topup-' + index"
              class="border-b border-gray-700 hover:bg-gray-700 transition"
            >
              <td class="px-4 py-3">{{ item.date }}</td>
              <td class="px-4 py-3 text-green-400">฿{{ item.amount }}</td>
              <td class="px-4 py-3">{{ item.method }}</td>
              <td class="px-4 py-3 text-green-400">{{ item.status }}</td>
            </tr>
            <tr v-if="topupHistory.length === 0">
              <td colspan="4" class="text-center px-4 py-6 text-gray-400">ยังไม่มีการเติมเงิน</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center gap-2">
        <button
          @click="prevPageTopup"
          :disabled="currentPageTopup === 1"
          class="px-3 py-1 bg-gray-700 text-white rounded hover:bg-green-600 disabled:opacity-30"
        >
          ย้อนกลับ
        </button>
        <button
          v-for="page in totalPagesTopup"
          :key="page"
          @click="currentPageTopup = page"
          :class="[
            'px-3 py-1 rounded',
            currentPageTopup === page ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-green-600',
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPageTopup"
          :disabled="currentPageTopup === totalPagesTopup"
          class="px-3 py-1 bg-gray-700 text-white rounded hover:bg-green-600 disabled:opacity-30"
        >
          ถัดไป
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ข้อมูลตัวอย่าง
const purchasedAccounts = ref([
  { game: 'Valorant', username: 'valo01', password: 'pass01', date: '2025-05-18', status: 'รับแล้ว' },
  { game: 'Genshin', username: 'gen02', password: 'pass02', date: '2025-05-17', status: 'รับแล้ว' },
  { game: 'Free Fire', username: 'ff03', password: 'pass03', date: '2025-05-16', status: 'รับแล้ว' },
  { game: 'Rov', username: 'rov04', password: 'pass04', date: '2025-05-15', status: 'รับแล้ว' },
  { game: 'PUBG', username: 'pubg05', password: 'pass05', date: '2025-05-14', status: 'รับแล้ว' },
  { game: 'CODM', username: 'cod06', password: 'pass06', date: '2025-05-13', status: 'รับแล้ว' },
])

const topupHistory = ref([
  { date: '2025-05-18', amount: 100, method: 'TrueMoney', status: 'สำเร็จ' },
  { date: '2025-05-17', amount: 200, method: 'PromptPay', status: 'สำเร็จ' },
  { date: '2025-05-16', amount: 300, method: 'Wallet', status: 'สำเร็จ' },
  { date: '2025-05-15', amount: 400, method: 'SCB', status: 'สำเร็จ' },
  { date: '2025-05-14', amount: 500, method: 'Krungthai', status: 'สำเร็จ' },
  { date: '2025-05-13', amount: 600, method: 'TrueMoney', status: 'สำเร็จ' },
])

const perPage = 5

// สำหรับรายการไอดี
const currentPagePurchased = ref(1)
const totalPagesPurchased = computed(() =>
  Math.ceil(purchasedAccounts.value.length / perPage)
)
const paginatedPurchased = computed(() => {
  const start = (currentPagePurchased.value - 1) * perPage
  return purchasedAccounts.value.slice(start, start + perPage)
})
const nextPagePurchased = () => {
  if (currentPagePurchased.value < totalPagesPurchased.value) currentPagePurchased.value++
}
const prevPagePurchased = () => {
  if (currentPagePurchased.value > 1) currentPagePurchased.value--
}

// สำหรับประวัติเติมเงิน
const currentPageTopup = ref(1)
const totalPagesTopup = computed(() =>
  Math.ceil(topupHistory.value.length / perPage)
)
const paginatedTopup = computed(() => {
  const start = (currentPageTopup.value - 1) * perPage
  return topupHistory.value.slice(start, start + perPage)
})
const nextPageTopup = () => {
  if (currentPageTopup.value < totalPagesTopup.value) currentPageTopup.value++
}
const prevPageTopup = () => {
  if (currentPageTopup.value > 1) currentPageTopup.value--
}
</script>
