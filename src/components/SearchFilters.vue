<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <section class="bg-gray-800">
      <div class="flex justify-between  px-4 py-3">
        <div class="flex items-center justify-start bg-gray-900 text-white rounded-lg px-3 py-2">
        <i class="pi pi-search text-gray-500 mr-2"></i>
        <input type="text" placeholder="Search by keywords" class="bg-gray-900 text-white focus:outline-none">
      </div>
      <button @click="toggle"
        class="flex items-center justify-between bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-ouline rounded-lg shadow pl-3 pr-4">
        <i class="pi pi-filter text-gray-500 mr-2"></i>
        <span class="text-white font-medium">
          Filter
        </span>
      </button>
      </div>
      <form v-show="isOpen">
        <!-- top section  -->
        <fieldset class="px-4 py-4 border-t border-gray-900">
            <!-- Bedroom / bathroom  -->
            <div class="flex -mx-2">
                <label for="" class="block w-1/2 px-2 ">
                    <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
                    <div class="mt-1 relative w-full rounded-md bg-gray-600 py-1.5 px-2 text-base">
                        <select name="" id="" class="appearance-none w-full focus:outline-none bg-gray-600 text-white">
                            <option value="">4</option>
                        </select>
                    
                         <VsxIcon iconName="ArrowDown2"  class="m-0 p-0 pr-3 h-6 w-6 absolute right-0 top-2 text-white" type="linear" />
                        
                    </div>
                </label>
                <label for="" class="block w-1/2 px-2">
                    <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
                    <div class="mt-1 relative w-full rounded-md bg-gray-600 py-1.5 px-2 text-base  ">
                        <select name="" id="" class="appearance-none w-full focus:outline-none bg-gray-600 text-white">
                            <option value="">4</option>
                        </select>
                    
                         <VsxIcon iconName="ArrowDown2"  class="m-0 p-0 pr-3 h-6 w-6 absolute right-0 top-2 text-white" type="linear" />
                    </div>
                </label>
            </div>
            <!-- Price Range  -->
            <div class="mt-4">
                <label for="">
                    <span class="text-sm font-semibold text-gray-500">Price range</span>
                    <div class="mt-1 relative w-full rounded-md bg-gray-600 py-1.5 px-2 text-base ">
                        <select name="" id="" class="appearance-none w-full focus:outline-none bg-gray-600 text-white">
                            <option value="">Up to $2,000 /wk</option>
                        </select>
                         <VsxIcon iconName="ArrowDown2"  class="m-0 p-0 pr-3 h-6 w-6 absolute right-0 top-2 text-white" type="linear" />
                    </div>
                </label>
            </div>
        </fieldset>
        <!-- Property type  -->
        <fieldset class="px-4 py-4 border-t border-gray-900 text-white space-y-3">
            <span class="block text-sm font-semibold text-gray-500">Property type</span>
            <label class="flex items-center"  for="">
                <input type="radio" name="propertyType" value="house" class="relative size-4 appearance-none rounded-full bg-gray-900 border border-gray-900  before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
                <span class="ml-2">
                    House
                </span>
            </label>
            <label class="flex items-center" for="">
                <input type="radio" name="propertyType" value="apartment" class="relative size-4 appearance-none rounded-full bg-gray-900 border border-gray-900 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
                <span class="ml-2">
                    Apartment
                </span>
            </label>
            <label class="flex items-center"for="">
                <input type="radio" name="propertyType" value="loft" class="relative size-4 appearance-none rounded-full bg-gray-900 border border-gray-900  before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
                <span class="ml-2">
                    Loft
                </span>
            </label>
            <label class="flex items-center"for="">
                <input type="radio" name="propertyType" value="townhouse" class="relative size-4 appearance-none rounded-full bg-gray-900 border border-gray-900 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
                <span class="ml-2">Townhouse</span>
            </label>
        </fieldset>
        <!-- Amenities  -->
        <fieldset class="px-4 py-4 border-t border-gray-900 text-white space-y-3">
            <span class="block text-sm font-semibold text-gray-500">Amenities</span>
            <label for="" class="flex items-center">
                <input type="checkbox" name="balcony" class="bg-gray-900">
                <span class="ml-3 text-white">Balcony</span>
            </label>
            <label for="" class="flex items-center">
                <input type="checkbox" name="airConditioning" class="bg-gray-900">
                <span class="ml-3 text-white">Air conditionion</span>
            </label>
            <label for="" class="flex items-center">
                <input type="checkbox" name="pool" class="bg-gray-900 ">
                <span class="ml-3 text-white">Poll</span> 
            </label>
            <label for="" class="flex items-center">
                <input type="checkbox" name="beach" class="bg-gray-900">
                <span class="ml-3 text-white">Beach</span>
            </label>
            <label for="" class="flex items-center">
                <input type="checkbox" name="petFriendly" class="bg-gray-900">
                <span class="ml-3 text-white">Pet friendly</span>
            </label>
            <label for="" class="flex items-center">
                <input type="checkbox" name="kidFriendly" class="bg-gray-900">
                <span class="ml-3 text-white">Kid friendly</span>
            </label>
            <label for="" class="flex items-center">
                <input type="checkbox" name="parking" class="bg-gray-900" >
                <span class="ml-3 text-white">Parking</span>
            </label>
        </fieldset>
        <div class="bg-gray-900 px-4 py-4">
            <button class="block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
        </div>
    </form>
    </section>
</template>