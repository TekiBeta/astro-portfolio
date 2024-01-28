<script setup lang="ts">
const year = new Date().getFullYear()
let outputYear: string
if (year == 2024) {
  outputYear = '2024'
} else {
  outputYear = `2024 - ${year}`
}
</script>

<template>
  <footer class="mt-auto">
    <div class="bg-dark text-[#fff]">
      <div class="text-center">
        <span>&copy; {{ outputYear }}, Teki.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
