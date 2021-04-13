<template>
  <div>
    <header>
      <h1 class="font-bold text-white text-3xl">Edit Magazines</h1>
    </header>

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