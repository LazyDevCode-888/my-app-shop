<template>
  <div class="max-w-4xl mx-auto p-10 space-y-10">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-10 text-center">
      ติดต่อเรา
    </h1>

    <div class="space-y-8">
      <!-- Facebook -->
      <div
        class="flex items-center gap-5 bg-gray-900 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 shadow-lg"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            class="w-8 h-8 invert"
          />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">Facebook</h2>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            class="text-blue-400 hover:underline text-lg"
            >facebook.com/yourpage</a
          >
        </div>
      </div>

      <!-- Discord -->
      <div
        class="flex items-center gap-5 bg-gray-900 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-700 shadow-lg"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
            alt="Discord"
            class="w-8 h-8 invert"
          />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">Discord</h2>
          <p class="text-indigo-300 text-lg mb-1">YourDiscord#1234</p>
          <a
            href="https://discord.gg/yourinvite"
            target="_blank"
            class="text-indigo-400 hover:underline text-lg"
            >เข้าร่วม Discord Server</a
          >
        </div>
      </div>

      <!-- Line -->
      <div
        class="flex items-center gap-5 bg-gray-900 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 shadow-lg"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Line"
            class="w-8 h-8 invert"
          />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">Line</h2>
          <p class="text-green-300 text-lg">@yourlineid</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* ให้รูปไอคอนเป็นสีขาวด้วย invert */
img.invert {
  filter: invert(1);
}
</style>
