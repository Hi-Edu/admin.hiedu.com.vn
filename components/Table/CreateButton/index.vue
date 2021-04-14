<template>
  <div class="text-right">
    <button
      class="transition-all inline-flex items-center py-2 px-3 text-sm bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm font-semibold rounded-lg"
      @click="$emit('click')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="ml-0.5"><slot /></span>
    </button>
  </div>
</template>