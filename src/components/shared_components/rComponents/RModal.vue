<script setup lang="ts">
import RBtn from "@/components/shared_components/rComponents/RBtn.vue";
import RBackdrop from "@/components/shared_components/rComponents/RBackdrop.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

withDefaults(
  defineProps<{
    modelValue: boolean;
    wrapperClass?: string;
    size?: string;
    title?: string;
    hiddenHeader?: boolean;
    hiddenFooter?: boolean;
    loading?: boolean;
    centerModal?: boolean
  }>(),
  {
    size: "sm",
    hiddenHeader: false,
    hiddenFooter: false,
    loading: false,
    centerModal: false,
    title: "",
    wrapperClass: ""
  }
);
const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>

<template>
  <Teleport to="body">
    <div class="modal" v-if="modelValue">
      <r-backdrop></r-backdrop>
      <div class="fixed inset-0 z-[70] overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out"
        :class="[wrapperClass]">

        <div class="flex justify-center  px-4 pb-10" :class="{
          'items-center min-h-screen pt-4': !centerModal,
          'pt-10': centerModal
        }">
          <!-- modal -->
          <div class="relative bg-white rounded-md w-full dark:bg-gray-700 dark:border dark:border-gray-400" :class="{
            'md:w-2/6': size == 'sm',
            'md:w-2/4': size == 'md',
            'md:w-3/4': size == 'lg',
            'md:w-full': size == 'xl',
          }">
            <!-- modal header -->
            <div v-if="!hiddenHeader"
              class="modal-header h-14 flex items-center justify-between px-4 rounded-t-md border dark:border-gray-400">
              <h1 class="text-black font-bold text-xl dark:text-white">{{ title }}</h1>
              <r-btn variant="outline-light"
                class="focus:ring-black hover:bg-gray-900 dark:focus:ring-gray-400 dark:hover:bg-gray-400 w-8 grid place-content-center"
                @click="emits('update:modelValue', false)" :disabled="loading">
                <XMarkIcon class="h-4 w-4 text-gray-600 dark:text-white"></XMarkIcon>
              </r-btn>
            </div>
            <!-- modal content -->
            <div class="modal-content p-4">
              <slot name="content"></slot>
            </div>
            <!-- modal footer -->
            <div class="modal-footer h-14 border flex items-center px-4" v-if="!hiddenFooter">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
