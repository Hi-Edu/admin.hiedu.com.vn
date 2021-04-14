<template>
  <TableD class="text-xs">{{ Text }}</TableD>
</template>

<script>
export default {
  computed: {
    Text() {
      if (!this.$slots.default) {
        return "";
      }

      return this.$dayjs(this.$slots.default[0].text).format(
        "YYYY년 MM월 DD일 hh시 mm분 ss초"
      );
    }
  }
};
</script>