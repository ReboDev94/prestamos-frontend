<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import {
  BanknotesIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import Sidebar from "@/components/shared_components/sidebar/Sidebar.vue";
import { useSidebar } from "@/stores/sidebar.store";
const useSidebarStore = useSidebar();

const collapse = computed(() => useSidebarStore.isCollapseSidebar);

const menu = ref([
  {
    link: "/home",
    title: "Inicio",
    icon: HomeIcon,
  },
  {
    link: "/prestatarios",
    title: "Prestatarios",
    icon: UserIcon,
  },
  {
    link: "/grupos",
    title: "Grupos",
    icon: UserGroupIcon,
  },
  {
    link: "/prestamos-personales",
    title: "Prestamos personales",
    icon: BanknotesIcon,
  },
  {
    link: "/compras",
    title: "Compras",
    icon: ShoppingCartIcon,
  },
]);
</script>
<template>
  <sidebar :collapse="collapse" :menu="menu">
    <template #content>
      <slot></slot>
    </template>
  </sidebar>
</template>
