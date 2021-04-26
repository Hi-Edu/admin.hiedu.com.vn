<template>
  <div>
    <page-header title="Academies" />
    <main>
      <TableCreateButton @click="Create">새 학원</TableCreateButton>
      <div v-if="!academies.count">
        No result
      </div>
      <div v-else>
        <Table :count="academies.count">
          <TableHead>
            <TableRow>
              <TableH class="text-left">국가</TableH>
              <TableH class="text-left">이름</TableH>
              <TableH class="text-right">생성일</TableH>
              <TableH class="text-right">마지막 수정일</TableH>
              <TableH class="text-right"></TableH>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableBodyRow v-for="academy in academies.rows" :key="academy.uuid">
              <TableD class="">{{ academy.country }}</TableD>
              <TableD class="text-left font-semibold">{{
                academy.title
              }}</TableD>
              <TableDDate class="text-right">{{
                academy.updated_at
              }}</TableDDate>
              <TableDDate class="text-right">{{
                academy.updated_at
              }}</TableDDate>
              <TableD class="text-right">
                <TableEditButton @click="OnEdit(academy.uuid)" />
                <TableDeleteButton @click="OnRemove(academy.uuid)" />
              </TableD>
            </TableBodyRow>
          </TableBody>
        </Table>

        <div class="text-center mt-6">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="academies.count"
            :page-size="10"
            :current-page="Number($route.query.page || 0)"
            @current-change="OnPagination"
          >
          </el-pagination>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      academies: {
        count: 0,
        rows: []
      }
    };
  },
  watch: {
    "$route.query"() {
      this.$fetch();
    }
  },
  async fetch() {
    const { academies } = await this.$axios({
      method: "GET",
      url: `/v0/academies`,
      params: this.$route.query
    });

    this.academies.count = academies.count;
    this.academies.rows = academies.rows;
  },
  methods: {
    async Create() {
      try {
        const { academy } = await this.$store.dispatch("academies/Create");

        this.$router.push({
          name: "academies-edit",
          query: { uuid: academy.uuid }
        });
      } catch (err) {}
    },
    OnEdit(uuid) {
      this.$router.push({
        name: "academies-edit",
        query: { uuid }
      });
    },
    async OnRemove(uuid) {
      try {
        if (!confirm("정말 삭제하시겠습니까? 이 행동은 되돌릴 수 없습니다.")) {
          return;
        }

        await this.$store.dispatch("academies/DeleteByUuid", uuid);
        this.$fetch();
      } catch (err) {}
    },
    OnPagination(page) {
      this.$router.push({ query: { ...this.$route.query, page } });
    }
  }
};
</script>