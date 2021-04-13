<template>
  <div id="login">
    <div class="py-20">
      <div class="text-center">
        <brand-logo class="block" />
      </div>

      <form @submit.prevent="Login" class="mt-6">
        <label for="email-input" class="block">
          <div class="text-gray-600 font-semibold text-sm">Email</div>
          <input
            id="email-input"
            type="email"
            v-model="input.email"
            class="transition-all shadow-sm outline-none mt-1 block rounded-lg w-full bg-gray-100 border-gray-300"
          />
        </label>

        <label for="password-input" class="block mt-4">
          <div class="text-gray-600 font-semibold text-sm">Password</div>
          <input
            id="password-input"
            type="password"
            v-model="input.password"
            class="transition-all shadow-sm outline-none mt-1 block rounded-lg w-full bg-gray-100 border-gray-300"
          />
        </label>

        <div class="mt-6">
          <button
            type="submit"
            class="transition-all shadow-sm w-full bg-gray-700 text-white py-2.5 rounded-lg font-semibold hover:bg-gray-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "center",
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async Login() {
      try {
        await this.$store.dispatch("auth/Login", this.input);
        this.$router.replace("/");
      } catch (err) {
        this.$log(err);
      }
    }
  }
};
</script>