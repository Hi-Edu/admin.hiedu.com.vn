<template>
  <div>
    <page-header title="Users" />
    <main>
      <!-- <TableCreateButton @click="Create">새 학원</TableCreateButton> -->
      <div v-if="!users.count">
        No result
      </div>
      <div v-else>
        <Table :count="users.count">
          <TableHead>
            <TableRow>
              <TableH class="text-left">이메일</TableH>
              <TableH class="text-right">생성일</TableH>
              <TableH class="text-right">마지막 수정일</TableH>
              <TableH class="text-right"></TableH>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableBodyRow v-for="user in users.rows" :key="user.uuid">
              <TableD class="text-left font-semibold">{{ user.email }}</TableD>
              <TableDDate class="text-right">{{ user.updated_at }}</TableDDate>
              <TableDDate class="text-right">{{ user.updated_at }}</TableDDate>
              <!-- <TableD class="text-right">
                <TableEditButton @click="OnEdit(academy.uuid)" />
                <TableDeleteButton @click="OnRemove(academy.uuid)" />
              </TableD> -->
            </TableBodyRow>
          </TableBody>
        </Table>

        <div class="text-center mt-6">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="users.count"
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
      users: {
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
    const { users } = await this.$axios({
      method: "GET",
      url: `/v0/users`,
      params: this.$route.query
    });

    this.users.count = users.count;
    this.users.rows = users.rows;
  },
  methods: {
    OnPagination(page) {
      this.$router.push({ query: { ...this.$route.query, page } });
    }
  }
};
</script>