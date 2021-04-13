<template>
  <header class="mb-12">
    <h1 class="font-bold text-white text-3xl">{{ title }}</h1>
    <slot />
  </header>
</template>

<script>
export default {
  props: ["title"]
};
</script>