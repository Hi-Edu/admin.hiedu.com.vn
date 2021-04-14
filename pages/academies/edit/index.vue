<template>
  <div>
    <page-header title="Edit Academy" />

    <main>
      {{ academy }}
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      academy: null
    };
  },
  async fetch() {
    const { uuid } = this.$route.query;

    const { academy } = await this.$store.dispatch(
      "academies/FetchByUuid",
      uuid
    );

    this.academy = academy;
  },
  methods: {
    async OnSave() {
      try {
        await this.$store.dispatch("academies/UpdateByUuid", {
          uuid: this.$route.query.uuid,
          data: this.academy
        });

        alert("저장되었습니다.");
      } catch (err) {}
    },
    async OnRemove() {
      try {
        if (!confirm("정말 삭제하시겠습니까? 이 행동은 되돌릴 수 없습니다.")) {
          return;
        }

        await this.$store.dispatch(
          "academies/DeleteByUuid",
          this.$route.query.uuid
        );
        this.$router.push({ name: "academies" });
      } catch (err) {}
    }
  }
};
</script>

<style lang="postcss" scoped>
::v-deep .ProseMirror {
  @apply outline-none !important;
  @apply rounded-lg;
  @apply py-2 px-3;
  @apply cursor-text;
  @apply overflow-y-scroll;
  @apply resize-y;
  @apply leading-8;
  @apply h-[40rem];
  @apply focus:ring-2 focus:ring-blue-600;
}

::v-deep .ProseMirror a {
  @apply underline;
  @apply text-blue-500;
  @apply cursor-pointer;
}
</style>