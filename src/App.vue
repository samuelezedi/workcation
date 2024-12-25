<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue'
import SearchFilter from '@/components/SearchFilters.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-200 antialiased">

    <SiteHeader />
    <SearchFilter />
  
    <main class="px-4 py-6">
      <h3 class="text-gray-900 text-xl">Los Angeles</h3>
      <p class="mt-2 text-gray-600 leading-tight">Live like the star in this luxurious Southern California estates.</p>
      <div class="mt-6 sm:mt-0 sm:flex sm:-mx-2 sm:overflow-x-auto">
        <div v-for="i in 4" class="mt-10 sm:mt-6 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 sm:pb-8">
          <div class="relative pb-5/6 ">
            <img class="absolute inset-0 h-full object-cover rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="">
          </div>
          <div class="relative px-4 -mt-16 ">
            <div class="bg-white rounded-lg px-4 py-4">
              <div class="flex">
                <span
                  class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs">Plus</span>
                <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  3 beds &bull; 2 baths
                </div>
              </div>
              <h4 class="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
              <div class="mt-1">
                <span class="text-gray-900">
                  $1,400
                </span>
                <span class="ml-1 text-sm text-gray-600">
                  / wk
                </span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <!-- <i class="pi pi-star fill-current text-teal-700"></i> -->
                <VsxIcon v-for="i in [1, 2, 3, 4, 5]" iconName="Star1" size="24" class="h-3 w-3 text-teal-500" type="bold" />
                <span class="ml-2">43 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
