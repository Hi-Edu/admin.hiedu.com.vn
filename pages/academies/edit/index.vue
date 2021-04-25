<template>
  <div>
    <page-header title="Edit Academy" />

    <main v-if="academy" class="space-y-20">
      <div class="flex">
        <div class="w-60">
          <h2>기본 정보</h2>
        </div>
        <div class="ml-10 flex-1">
          <div class="space-y-4">
            <label for="" class="block">
              <p>학원명</p>
              <input type="text" v-model="academy.title" />
            </label>

            <label for="" class="block">
              <p>짧은 설명</p>
              <input type="text" v-model="academy.short_description" />
            </label>

            <label for="" class="block">
              <p>긴 설명</p>
              <textarea v-model="academy.description"></textarea>
            </label>

            <label for="" class="block">
              <p>웹사이트</p>
              <input type="text" v-model="academy.website" />
            </label>

            <label for="" class="block">
              <p>이메일</p>
              <input type="text" v-model="academy.email" />
            </label>

            <label for="" class="block">
              <p>연락처</p>
              <input type="text" v-model="academy.phone" />
            </label>

            <label for="" class="block">
              <p>국가</p>
              <input type="text" v-model="academy.country" />
            </label>

            <label for="" class="block">
              <p>Zip code</p>
              <input type="text" v-model="academy.zip" />
            </label>

            <label for="" class="block">
              <p>State</p>
              <input type="text" v-model="academy.state" />
            </label>

            <label for="" class="block">
              <p>City</p>
              <input type="text" v-model="academy.city" />
            </label>

            <label for="" class="block">
              <p>Street address 1</p>
              <input type="text" v-model="academy.street_address_1" />
            </label>

            <label for="" class="block">
              <p>Street address 2</p>
              <input type="text" v-model="academy.street_address_2" />
            </label>
          </div>
          <div class="mt-6">
            <button
              class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              저장
            </button>
            <button
              class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              삭제
            </button>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="w-60">
          <h2>수업</h2>
        </div>
        <div class="ml-10 flex-1">
          <ul v-if="academy.classes" class="space-y-10">
            <li v-for="c in academy.classes" :key="c.uuid">
              <label for="" class="block">
                <p>수업명</p>
                <input type="text" v-model="c.title" />
              </label>

              <label for="" class="block">
                <p>Price</p>
                <input type="text" v-model="c.price" />
              </label>

              <label for="" class="block">
                <p>Career</p>
                <input type="text" v-model="c.career" />
              </label>

              <label for="" class="block">
                <p>학년</p>
                <div>{{ value1 }}</div>
                <el-select v-model="value1" multiple placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <div>
                  {{ c.ages }}
                </div>
              </label>

              <label for="" class="block">
                <p>과목</p>
                <div>
                  {{ c.subjects }}
                </div>
              </label>

              <label for="" class="block">
                <p>선생님</p>
                <div>
                  {{ c.teachers }}
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      academy: null,
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value1: []
    };
  },
  async fetch() {
    const { uuid } = this.$route.query;

    const { academy } = await this.$store.dispatch(
      "academies/FetchByUuid",
      uuid
    );

    this.academy = academy;
  },
  methods: {
    async OnSave() {
      try {
        await this.$store.dispatch("academies/UpdateByUuid", {
          uuid: this.$route.query.uuid,
          data: this.academy
        });

        alert("저장되었습니다.");
      } catch (err) {}
    },
    async OnRemove() {
      try {
        if (!confirm("정말 삭제하시겠습니까? 이 행동은 되돌릴 수 없습니다.")) {
          return;
        }

        await this.$store.dispatch(
          "academies/DeleteByUuid",
          this.$route.query.uuid
        );
        this.$router.push({ name: "academies" });
      } catch (err) {}
    }
  }
};
</script>

<style lang="postcss" scoped>
input {
}
</style>