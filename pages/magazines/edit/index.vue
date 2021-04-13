<template>
  <div>
    <page-header title="Edit Magazine" />

    <main class="py-20">
      <div v-if="magazine">
        {{ magazine }}
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      magazine: null
    };
  },
  async fetch() {
    const { uuid } = this.$route.query;
    const { magazine } = await this.$store.dispatch(
      "magazines/FetchByUuid",
      uuid
    );

    this.magazine = magazine;
  }
};
</script>