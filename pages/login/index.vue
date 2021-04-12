<template>
  <div id="login">
    <form @submit.prevent="Login">
      <input type="email" placeholder="email" v-model="input.email" />
      <input type="password" placeholder="password" v-model="input.password" />
      <button type="submit">Login</button>
    </form>
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