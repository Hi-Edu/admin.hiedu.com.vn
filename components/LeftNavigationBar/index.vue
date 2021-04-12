<template>
  <nav class="w-60 p-4">
    <section>
      <brand-logo class="w-28" />
    </section>

    <ul class="my-10">
      <li>
        <n-link
          to="/"
          exact
          class="block transition font-semibold w-full my-1.5 py-2 px-4 hover:text-gray-300 hover:bg-gray-700 rounded-lg"
          >홈</n-link
        >
      </li>
      <li>
        <n-link
          to="/users"
          class="block transition font-semibold w-full my-1.5 py-2 px-4 hover:text-gray-300 hover:bg-gray-700 rounded-lg"
          >유저</n-link
        >
      </li>
      <li>
        <n-link
          to="/academies"
          class="block transition font-semibold w-full my-1.5 py-2 px-4 hover:text-gray-300 hover:bg-gray-700 rounded-lg"
          >학원</n-link
        >
      </li>
    </ul>

    <section>
      <button
        @click="Logout"
        class="text-xs px-3 py-1.5 border border-gray-600 rounded-lg shadow-sm font-semibold"
      >
        Logout
      </button>
    </section>
  </nav>
</template>

<script>
export default {
  methods: {
    async Logout() {
      try {
        await this.$store.dispatch("auth/Logout");
        this.$router.push({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
ul a {
  @apply text-gray-500;
  @apply bg-transparent;
}
ul a.nuxt-link-active {
  @apply text-gray-50;
  @apply bg-gray-700;
}
</style>