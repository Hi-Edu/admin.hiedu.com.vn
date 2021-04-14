<template>
  <div>
    <page-header title="Magazines" />

    <main>
      <TableCreateButton @click="Create">새 매거진</TableCreateButton>

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
            <Table v-else :count="magazines.count">
              <TableHead>
                <TableH class="text-left">제목</TableH>
                <TableH class="text-left">카테고리</TableH>
                <TableH class="text-center">공개</TableH>
                <TableH class="text-right">생성일</TableH>
                <TableH class="text-right">마지막 수정일</TableH>
                <TableH class="text-right"></TableH>
              </TableHead>
              <TableBody>
                <TableBodyRow
                  v-for="magazine in magazines.rows"
                  :key="magazine.uuid"
                >
                  <TableD class="text-left font-semibold">
                    {{ magazine.title }}
                  </TableD>
                  <TableD class="text-left">{{ magazine.category }}</TableD>
                  <TableD class="text-center">
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
                  </TableD>
                  <TableDDate class="text-right">{{
                    magazine.created_at
                  }}</TableDDate>
                  <TableDDate class="text-right">{{
                    magazine.updated_at
                  }}</TableDDate>
                  <TableD class="text-right">
                    <TableEditButton @click="OnEdit(magazine.uuid)" />
                    <TableDeleteButton @click="OnRemove(magazine.uuid)" />
                  </TableD>
                </TableBodyRow>
              </TableBody>
            </Table>
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