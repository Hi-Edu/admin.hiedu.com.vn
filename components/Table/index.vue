<template>
  <div>
    <p v-if="count" class="text-gray-400 text-xs">
      총 {{ count }}개의 레코드를 찾았습니다.
    </p>
    <div class="mt-4 rounded-lg overflow-hidden shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <slot />
      </table>
    </div>
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