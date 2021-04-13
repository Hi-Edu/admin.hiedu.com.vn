<template>
  <div>
    <page-header title="Magazines" />

    <main>
      <div class="text-right">
        <button
          class="transition-all inline-flex items-center py-2 px-3 text-sm bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg"
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
          <span class="ml-0.5">Create new</span>
        </button>
      </div>

      <div>
        <div v-if="$fetchState.pending">
          Loading..
        </div>
        <div v-else>
          <div v-if="$fetchState.error">
            Error
          </div>
          <div v-else>
            <div v-if="!magazines.count">
              No result.
            </div>
            <table v-else class="mt-4 w-full table-auto">
              <thead class="bg-gray-700 bg-opacity-50 text-sm text-gray-400">
                <th class="py-2 px-3 text-left">Title</th>
                <th class="py-2 px-3 text-left">Category</th>
                <th class="py-2 px-3 text-left">Published</th>
                <th class="py-2 px-3 text-right">Created</th>
                <th class="py-2 px-3 text-right">Updated</th>
                <th class="py-2 px-3 text-right"></th>
              </thead>
              <tbody>
                <tr
                  v-for="magazine in magazines.rows"
                  :key="magazine.uuid"
                  class="transition-colors border-b border-gray-700 text-sm text-gray-100 hover:bg-gray-900"
                >
                  <td class="py-3 px-3 text-left">{{ magazine.title }}</td>
                  <td class="py-3 px-3 text-left">{{ magazine.category }}</td>
                  <td class="py-3 px-3 text-left">
                    {{ magazine.is_published }}
                  </td>
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
                  <td class="py-3 px-3 text-right">
                    <button
                      class="transition-colors py-0.5 px-2 text-sm rounded-lg border border-gray-700 bg-gray-700 hover:bg-gray-500"
                      @click="OnEdit(magazine.uuid)"
                    >
                      Edit
                    </button>
                    <button
                      class="transition-colors py-0.5 px-2 text-sm rounded-lg border border-gray-700 bg-transparent hover:bg-gray-500"
                      @click="OnRemove(magazine.uuid)"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    },
    OnEdit(uuid) {
      this.$router.push({
        name: "magazines-edit",
        query: { uuid }
      });
    },
    async OnRemove(uuid) {
      try {
        await this.$store.dispatch("magazines/DeleteByUuid", uuid);
        this.$fetch();
      } catch (err) {}
    }
  }
};
</script>