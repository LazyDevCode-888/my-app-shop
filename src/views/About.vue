<template>
  <div class="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6 py-16 flex flex-col items-center">
    <div class="max-w-4xl text-center">
      <h1 class="text-4xl font-extrabold mb-6 tracking-wide text-green-400">
        เกี่ยวกับเรา
      </h1>
      <p class="text-lg leading-relaxed mb-8">
        ยินดีต้อนรับสู่ <span class="font-semibold text-green-400">PremiumGameID</span> แพลตฟอร์มชั้นนำสำหรับการซื้อขายไอดีเกมที่ดีที่สุด
        เรามุ่งมั่นที่จะมอบประสบการณ์การซื้อขายที่ปลอดภัย รวดเร็ว และน่าเชื่อถือสำหรับนักเล่นเกมทุกคน
      </p>

      <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 class="text-2xl font-semibold mb-4 text-green-400">ทำไมต้องเลือกเรา?</h2>
        <ul class="space-y-4 text-left list-disc list-inside">
          <li>✔️ ไอดีเกมคุณภาพสูง คัดสรรโดยทีมงานมืออาชีพ</li>
          <li>✔️ ระบบการชำระเงินปลอดภัย ด้วยหลายช่องทาง</li>
          <li>✔️ บริการลูกค้าตลอด 24 ชั่วโมง พร้อมช่วยเหลือคุณ</li>
          <li>✔️ รับประกันความพึงพอใจ และคืนเงินหากไม่ตรงตามสัญญา</li>
          <li>✔️ อัปเดตสินค้าใหม่ทุกสัปดาห์ พร้อมโปรโมชั่นพิเศษ</li>
        </ul>
      </div>

      <div class="mt-12 space-y-6">
        <h2 class="text-2xl font-semibold text-green-400">ทีมงานของเรา</h2>
        <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          ทีมงาน PremiumGameID เป็นกลุ่มผู้เชี่ยวชาญในวงการเกมและเทคโนโลยี เรามีประสบการณ์ด้านเกมออนไลน์และการบริการลูกค้าอย่างมืออาชีพ เพื่อให้คุณมั่นใจว่าได้รับบริการที่ดีที่สุดจากเรา
        </p>
      </div>

      <div class="mt-12">
        <button
          @click="$router.push('/contact')"
          class="bg-green-500 hover:bg-green-600 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
        >
          ติดต่อเรา
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// ไม่มี logic ซับซ้อนสำหรับหน้านี้
</script>

<style scoped>
/* เน้นความหรูด้วยพื้นหลัง gradient และสีเขียว */
</style>
