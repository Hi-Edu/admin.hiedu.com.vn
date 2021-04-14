<template>
  <button
    class="transition-colors py-0.5 px-1.5 text-sm rounded-lg shadow-sm border border-red-400 text-red-500 hover:bg-red-200"
    @click="$emit('click')"
  >
    삭제
  </button>
</template>