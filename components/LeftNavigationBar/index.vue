<template>
  <nav class="fixed left-0 w-60 p-4 bg-gray-100 h-screen">
    <section>
      <brand-logo class="w-28" />
    </section>

    <ul class="my-10">
      <li>
        <n-link
          to="/"
          exact
          class="flex items-center transition font-semibold w-full my-1.5 py-2 px-2.5 hover:text-gray-800 hover:bg-gray-300 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <span class="ml-1.5">홈</span>
        </n-link>
      </li>
      <li>
        <n-link
          to="/users"
          class="flex items-center transition font-semibold w-full my-1.5 py-2 px-2.5 hover:text-gray-800 hover:bg-gray-300 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="ml-1.5">유저</span>
        </n-link>
      </li>
      <li>
        <n-link
          to="/academies"
          class="flex items-center transition font-semibold w-full my-1.5 py-2 px-2.5 hover:text-gray-800 hover:bg-gray-300 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
            />
          </svg>
          <span class="ml-1.5">학원</span>
        </n-link>
      </li>
      <li>
        <n-link
          to="/magazines"
          class="flex items-center transition font-semibold w-full my-1.5 py-2 px-2.5 hover:text-gray-800 hover:bg-gray-300 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clip-rule="evenodd"
            />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
          <span class="ml-1.5">매거진</span>
        </n-link>
      </li>
    </ul>

    <section>
      <button
        @click="Logout"
        class="text-xs px-3 py-1.5 border border-gray-300 shadow-sm rounded-lg shadow-sm font-semibold"
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
  @apply text-gray-400;
}
ul a.nuxt-link-active {
  @apply text-gray-900;
  @apply bg-gray-300;
  @apply shadow-sm;
}
</style>