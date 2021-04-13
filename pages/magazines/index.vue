<template>
  <div>
    <header>
      <h1 class="font-bold text-white text-3xl">Magazines</h1>
    </header>

    <main class="py-10">
      <div class="text-right">
        <button
          class="transition-all inline-flex items-center py-2.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg"
          @click="Create"
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
          <span class="ml-1">Create new</span>
        </button>
      </div>

      <table v-if="magazines.count" class="mt-4 w-full table-auto">
        <thead class="bg-gray-700 bg-opacity-50 text-sm text-gray-400">
          <th class="py-2 px-3 text-left">Title</th>
          <th class="py-2 px-3 text-left">Category</th>
          <th class="py-2 px-3 text-left">Published</th>
          <th class="py-2 px-3 text-right">Created</th>
          <th class="py-2 px-3 text-right">Updated</th>
        </thead>
        <tbody>
          <tr
            v-for="magazine in magazines.rows"
            :key="magazine.uuid"
            class="border-b border-gray-700 text-sm text-gray-100"
          >
            <td class="py-3 px-3 text-left">{{ magazine.title }}</td>
            <td class="py-3 px-3 text-left">{{ magazine.category }}</td>
            <td class="py-3 px-3 text-left">{{ magazine.is_published }}</td>
            <td class="py-3 px-3 text-right">
              {{
                $dayjs(magazine.created_at).format(
                  "YYYY년 MM월 DD일 hh시 mm분 ss초"
                )
              }}
            </td>
            <td class="py-3 px-3 text-right">
              {{
                $dayjs(magazine.updated_at).format(
                  "YYYY년 MM월 DD일 hh시 mm분 ss초"
                )
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      magazines: {
        count: 0,
        rows: []
      }
    };
  },
  async fetch() {
    const { magazines } = await this.$store.dispatch("magazines/Fetch");
    this.magazines.count = magazines.count;
    this.magazines.rows = magazines.rows;
  },
  methods: {
    async Create() {
      try {
        const { magazine } = await this.$store.dispatch("magazines/Create");

        this.$router.push({
          name: "magazines-edit",
          query: { uuid: magazine.uuid }
        });
      } catch (err) {}
    }
  }
};
</script>