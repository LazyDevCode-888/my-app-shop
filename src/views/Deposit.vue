<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold text-green-400 mb-6">เติมเงิน</h1>

    <!-- ธนาคาร -->
    <div class="bg-gray-800 rounded-lg shadow p-5 flex flex-col">
      <h2 class="text-xl font-semibold text-white mb-2">โอนผ่านบัญชีธนาคาร</h2>
      <p class="text-gray-400 mb-2">ธนาคารกสิกรไทย</p>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-green-400 font-bold text-lg">012-345-6789</span>
        <button
          @click="copyText('012-345-6789')"
          class="text-xs text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
        >
          คัดลอก
        </button>
      </div>

      <div class="flex items-center gap-3">
        <input
          type="file"
          ref="bankFileInput"
          @change="handleSlipUpload('bank', $event)"
          class="flex-1 bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 text-sm"
        />
        <button
          @click="confirmPayment('bank')"
          class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm"
          :disabled="!bankSlip"
        >
          ยืนยันการโอน
        </button>
      </div>
    </div>

    <!-- วอลเล็ต -->
    <div class="bg-gray-800 rounded-lg shadow p-5 flex flex-col">
      <h2 class="text-xl font-semibold text-white mb-2">TrueMoney Wallet</h2>
      <p class="text-gray-400 mb-2">เบอร์วอลเล็ต</p>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-yellow-400 font-bold text-lg">091-234-5678</span>
        <button
          @click="copyText('091-234-5678')"
          class="text-xs text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
        >
          คัดลอก
        </button>
      </div>

      <div class="flex items-center gap-3">
        <input
          type="file"
          ref="walletFileInput"
          @change="handleSlipUpload('wallet', $event)"
          class="flex-1 bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 text-sm"
        />
        <button
          @click="confirmPayment('wallet')"
          class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 text-sm"
          :disabled="!walletSlip"
        >
          ยืนยันการโอน
        </button>
      </div>
    </div>

    <!-- ซองอั่งเปา -->
    <div class="bg-gray-800 rounded-lg shadow p-5 flex flex-col">
      <h2 class="text-xl font-semibold text-white mb-2">ซองอั่งเปา</h2>
      <p class="text-sm text-gray-400 mb-3">
        วางลิงก์ซองอั่งเปา TrueMoney แล้วกดส่ง
      </p>

      <div class="flex flex-col sm:flex-row gap-3">
        <input
          v-model="angpaoLink"
          type="text"
          placeholder="https://gift.truemoney.com/campaign/?v=..."
          class="flex-1 border border-gray-600 text-sm rounded px-3 py-2 bg-gray-700 text-white"
        />
        <button
          @click="submitAngpao"
          class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 text-sm whitespace-nowrap"
        >
          ส่งลิงก์ซองอั่งเปา
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

const bankSlip = ref(null);
const walletSlip = ref(null);
const angpaoLink = ref("");

const bankFileInput = ref(null);
const walletFileInput = ref(null);

const copyText = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    notyf.success("คัดลอกแล้ว!");
  });
};

const handleSlipUpload = (type, event) => {
  const file = event.target.files[0];
  if (type === "bank") {
    bankSlip.value = file;
    walletSlip.value = null;
  } else if (type === "wallet") {
    walletSlip.value = file;
    bankSlip.value = null;
  }
  notyf.success("อัปโหลดสลิปเรียบร้อย");
};

const confirmPayment = (type) => {
  const slip = type === "bank" ? bankSlip.value : walletSlip.value;
  if (!slip) {
    notyf.error("กรุณาแนบสลิปก่อนยืนยัน");
    return;
  }
  // TODO: ส่ง slip ไป backend
  notyf.success(
    `ส่งข้อมูลสำเร็จ (${type === "bank" ? "บัญชีธนาคาร" : "วอลเล็ต"})`
  );

  if (type === "bank") {
    bankSlip.value = null;
    if (bankFileInput.value) bankFileInput.value.value = "";
  } else {
    walletSlip.value = null;
    if (walletFileInput.value) walletFileInput.value.value = "";
  }
};

const submitAngpao = () => {
  const link = angpaoLink.value.trim();
  if (!link) return notyf.error("กรุณาวางลิงก์ซองอั่งเปา");
  if (!link.startsWith("https://gift.truemoney.com/campaign/?v=")) {
    return notyf.error("ลิงก์ไม่ถูกต้อง");
  }
  // TODO: ส่ง link ไป backend
  notyf.success("ส่งลิงก์ซองอั่งเปาสำเร็จ");
  angpaoLink.value = "";
};
</script>

<style scoped>
input[type="file"] {
  font-size: 0.875rem;
  color: #e5e7eb;
}
</style>
