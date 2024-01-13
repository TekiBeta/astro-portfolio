<script setup lang="ts">
import { PhHouseSimple, PhImages, PhInfo, PhList, PhNewspaper } from '@phosphor-icons/vue'
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
          <span class="">HOME</span>
        </div>
        <div class="flex w-32 items-center justify-center px-2">
          <PhImages :size="20" />
          <span>GALLERY</span>
        </div>
        <div class="flex w-32 items-center justify-center px-2">
          <PhNewspaper :size="20" />
          <span>BLOG</span>
        </div>
        <div class="flex w-32 items-center justify-center px-2">
          <PhInfo :size="20" />
          <span>ABOUT</span>
        </div>
      </nav>

      <!-- スマホ用 -->
      <div class="flex items-center md:hidden">
        <div class="px-4">
          <PhList :size="32" />
        </div>
      </div>
      <nav class="fixed h-full w-full" />
    </div>
  </header>
</template>

<style scoped></style>
