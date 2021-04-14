<template>
  <div>
    <p v-if="count" class="text-gray-400 text-xs">
      총 {{ count }}개의 레코드를 찾았습니다.
    </p>
    <table
      class="mt-4 w-full table-auto shadow-sm border-l border-r border-gray-200 rounded-lg"
    >
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>