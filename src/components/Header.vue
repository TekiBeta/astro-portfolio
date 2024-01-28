<script setup lang="ts">
import { PhHouseSimple, PhImages, PhInfo, PhList, PhNewspaper, PhX } from '@phosphor-icons/vue'
import { ref } from 'vue'

const isOpen = ref(false)
const handleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header>
    <div class="flex h-16 bg-dark px-4 text-[#fff] [&>*:first-child]:mr-auto">
      <div class="logo flex items-center text-xl">
        <img src="../../public/astro-icon-light-gradient.svg" class="h-12 px-4" />
        <div class="">Website</div>
      </div>

      <!-- PC用 -->
      <nav class="hidden md:flex">
        <div class="flex w-32 items-center justify-center px-2">
          <PhHouseSimple :size="20" />
          <span class="ml-2">HOME</span>
        </div>
        <div class="flex w-32 items-center justify-center px-2">
          <PhImages :size="20" />
          <span class="ml-2">GALLERY</span>
        </div>
        <div class="flex w-32 items-center justify-center px-2">
          <PhNewspaper :size="20" />
          <span class="ml-2">BLOG</span>
        </div>
        <div class="flex w-32 items-center justify-center px-2">
          <PhInfo :size="20" />
          <span class="ml-2">ABOUT</span>
        </div>
      </nav>

      <!-- スマホ用 -->
      <div class="flex items-center md:hidden">
        <div class="px-4">
          <button class="focus:outline-none" @click="handleOpen">
            <PhList v-show="!isOpen" :size="32" />
            <PhX v-show="isOpen" :size="32" />
          </button>
        </div>
      </div>
    </div>
    <!-- スマホ用項目 -->
    <nav v-show="isOpen" class="absolute z-10 flex w-full flex-col bg-dark text-[#fff] md:hidden">
      <div class="border-ash mx-auto flex w-10/12 items-center border-t py-4">
        <PhHouseSimple :size="20" />
        <span class="ml-2">HOME</span>
      </div>
      <div class="border-ash mx-auto flex w-10/12 items-center border-t py-4">
        <PhImages :size="20" />
        <span class="ml-2">GALLERY</span>
      </div>
      <div class="border-ash mx-auto flex w-10/12 items-center border-t py-4">
        <PhNewspaper :size="20" />
        <span class="ml-2">BLOG</span>
      </div>
      <div class="border-ash mx-auto flex w-10/12 items-center border-t py-4">
        <PhInfo :size="20" />
        <span class="ml-2">ABOUT</span>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
