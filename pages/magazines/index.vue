<template>
  <div>
    <page-header title="Magazines" />

    <main>
      <div class="text-right">
        <button
          class="transition-all inline-flex items-center py-2 px-3 text-sm bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm font-semibold rounded-lg"
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
          <span class="ml-0.5">새 매거진</span>
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
            <table
              v-else
              class="mt-4 w-full table-fixed border border-gray-50 shadow-sm"
            >
              <thead class="bg-gray-200 text-xs text-gray-500">
                <th class="py-2 px-3 text-left w-80">제목</th>
                <th class="py-2 px-3 text-left">카테고리</th>
                <th class="py-2 px-3 text-center">공개</th>
                <th class="py-2 px-3 text-right">생성일</th>
                <th class="py-2 px-3 text-right">마지막 수정일</th>
                <th class="py-2 px-3 text-right"></th>
              </thead>
              <tbody>
                <tr
                  v-for="magazine in magazines.rows"
                  :key="magazine.uuid"
                  class="transition-colors border-b border-gray-200 text-sm hover:bg-gray-100"
                >
                  <td class="py-3 px-3 text-left font-semibold w-80">
                    {{ magazine.title }}
                  </td>
                  <td class="py-3 px-3 text-left">{{ magazine.category }}</td>
                  <td class="py-3 px-3 text-center">
                    <svg
                      v-if="magazine.is_published"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline-block h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline-block h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </td>
                  <td class="py-3 px-3 text-xs text-gray-500 text-right">
                    {{
                      $dayjs(magazine.created_at).format(
                        "YYYY년 MM월 DD일 hh시 mm분 ss초"
                      )
                    }}
                  </td>
                  <td class="py-3 px-3 text-xs text-gray-500 text-right">
                    {{
                      $dayjs(magazine.updated_at).format(
                        "YYYY년 MM월 DD일 hh시 mm분 ss초"
                      )
                    }}
                  </td>
                  <td class="py-3 px-3 text-right">
                    <button
                      class="transition-colors py-0.5 px-1.5 text-sm rounded-lg shadow-sm text-gray-800 border border-gray-400 bg-gray-50 hover:bg-gray-100"
                      @click="OnEdit(magazine.uuid)"
                    >
                      수정
                    </button>
                    <button
                      class="transition-colors py-0.5 px-1.5 text-sm rounded-lg shadow-sm border border-red-400 text-red-500 hover:bg-red-200"
                      @click="OnRemove(magazine.uuid)"
                    >
                      삭제
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
        if (!confirm("정말 삭제하시겠습니까? 이 행동은 되돌릴 수 없습니다.")) {
          return;
        }

        await this.$store.dispatch("magazines/DeleteByUuid", uuid);
        this.$fetch();
      } catch (err) {}
    }
  }
};
</script>