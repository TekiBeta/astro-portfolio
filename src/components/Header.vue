<script setup lang="ts">
import { PhHouseSimple, PhImages, PhInfo, PhList, PhNewspaper } from '@phosphor-icons/vue'
</script>

<template>
  <header>
    <div class="flex bg-dark h-16 px-4 [&>*:first-child]:mr-auto text-[#fff]">
      <div class="logo flex items-center text-xl">
        <img src="../../public/astro-icon-light-gradient.svg" class="h-12 px-4" />
        <div class="">Website</div>
      </div>

      <!-- PC用 -->
      <nav class="hidden md:flex">
        <div class="flex justify-center items-center px-2 w-32">
          <PhHouseSimple :size="20" />
          <span class="">HOME</span>
        </div>
        <div class="flex justify-center items-center px-2 w-32">
          <PhImages :size="20" />
          <span>GALLERY</span>
        </div>
        <div class="flex justify-center items-center px-2 w-32">
          <PhNewspaper :size="20" />
          <span>BLOG</span>
        </div>
        <div class="flex justify-center items-center px-2 w-32">
          <PhInfo :size="20" />
          <span>ABOUT</span>
        </div>
      </nav>

      <!-- スマホ用 -->
      <div class="flex md:hidden items-center">
        <div class="px-4">
          <PhList :size="32" />
        </div>
      </div>
      <nav class="fixed w-full h-full" />
    </div>
  </header>
</template>

<style scoped></style>
