<script setup lang="ts">
import { ItemSidebar } from "@/interfaces/sidebar.interface";
import { ArrowDownCircleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

defineProps<{
  item: ItemSidebar;
}>();

const openDropdown = ref(false);
</script>
<template>
  <li v-if="item.subMenu">
    <button @click="openDropdown = !openDropdown"
      class="w-full flex items-center p-2 rounded-md text-gray-500 hover:bg-sky-800/10 hover:text-sky-800 active:text-sky-800 ">
      <component v-if="item.icon" :is="item.icon" class="h-6 w-6"></component>
      <span :class="{ 'ml-5': item.icon, 'ml-11': !item.icon }">{{ item.title }}</span>
      <ArrowDownCircleIcon class="h-6 w-6 ml-auto"></ArrowDownCircleIcon>
    </button>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <ul class="px-2 py-3 border rounded-md bg-gray-50" v-show="openDropdown">
        <li v-for="itemSubMenu in item.subMenu" class="mb-1">
          <router-link :to="itemSubMenu.link" v-slot="{ isExactActive }">
            <div
              class="flex items-center p-2 rounded-md text-gray-500 hover:bg-sky-800/10 hover:text-sky-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              :class="{ 'bg-sky-800/10 text-sky-800 dark:text-white dark:bg-gray-800': isExactActive }">
              <span class="ml-9">{{ itemSubMenu.title }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </transition>
  </li>
  <li v-else>
    <router-link :to="item.link" v-slot="{ isExactActive }">
      <div
        class="flex items-center p-2 rounded-md text-gray-500 hover:bg-sky-800/10 hover:text-sky-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
        :class="{ 'bg-sky-800/10 text-sky-800 dark:text-white dark:bg-gray-800': isExactActive }">
        <component v-if="item.icon" :is="item.icon" class="h-6 w-6"></component>
        <span :class="{ 'ml-5': item.icon, 'ml-11': !item.icon }">{{ item.title }}</span>
      </div>
    </router-link>
  </li>
</template>
