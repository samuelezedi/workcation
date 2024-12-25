<script setup>
import { reactive } from 'vue';

const state = reactive({
    isOpen: false
});

const toggle = () => {
    state.isOpen = !state.isOpen;
}

</script>

<template>
    <header class="bg-gray-900">
      <div class="flex items-center justify-between px-4 py-3">
        <div>
            <img src="@/assets/logo-inverted.svg" class="h-8 w-auto" alt="">
        </div>
        <div >
            <button @click="toggle" type="button" class="h-6 w-6">
              <VsxIcon v-if="!state.isOpen" iconName="HambergerMenu" size="24" class="text-gray-500 hover:text-white focus:outline-none focus:text-white" type="linear" />
              <i v-else class="pi pi-times text-gray-500 hover:text-white focus:outline-none focus:text-white"></i>
            </button>
        </div>
      </div>
      <nav v-show="state.isOpen">
        <div class="flex flex-col px-4 pt-5 pb-3 font-semibold text-white border-b border-gray-800">
          <a href="#" class="hover:bg-gray-800">List your property</a>
          <a href="#" class="mt-2 hover:bg-gray-800">Trips</a>
          <a href="#" class="mt-2 hover:bg-gray-800">Messages</a>
        </div>
        <div class="px-5 py-5">
          <div class="flex items-center">
            <img class="w-10 h-10 object-coverr rounded-full border-2 border-gray-600"src="@/assets/user.png" alt="">
            <span class="ml-4 font-semibold text-gray-200">Samuel Ezedi</span>
          </div>
          <div class="mt-5 flex flex-col text-gray-400">
            <a href="#" class="hover:text-white">Account settings</a>
            <a href="#" class="mt-3 hover:text-white">Support </a>
            <a href="#" class="mt-3 hover:text-white">Sign out</a>
          </div>
        </div>
      </nav>
    </header>
</template>