<template>
  <div>
    <page-header title="Edit Academy" />

    <main v-if="academy" class="space-y-20">
      <div class="flex border rounded-lg p-8">
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
              @click="OnSave"
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

      <div>
        <div class="flex justify-between">
          <h2 class="text-3xl">수업</h2>
          <button 
            class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="OnNewClass">
            새 수업 추가하기
          </button>
        </div>
        <div class="mt-6">
          <ul v-if="academy.classes" class="space-y-10">
            <li v-for="(c, index) in academy.classes" :key="c.uuid" class="border rounded-lg divide-y">
              <div class="flex p-8">
                <div class="w-60">
                  <h2>수업 {{ index + 1 }}</h2>
                </div>
                <div class="ml-10 flex-1 space-y-4">
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

                  <div class="mt-6">
                    <button
                      class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @click="OnSaveClass(c)"
                    >
                      저장
                    </button>
                    <button 
                      class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="OnRemoveClass(c)">삭제</button>
                  </div>
                </div>
              </div>

              <div class="flex p-8">
                <div class="w-60">
                  <h2>학년</h2>
                </div>
                <div class="ml-10 flex-1">
                  <el-select v-model="c.ages" multiple placeholder="Select">
                    <el-option-group
                      v-for="group in $store.state.categories.ages"
                      :key="group.id"
                      :label="group.title"
                    >
                      <el-option
                        v-for="item in group.children"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id"
                      >
                      </el-option>
                    </el-option-group>
                    </el-option>
                  </el-select>
                  <button
                    class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="OnSaveClassAges(c)"
                  >
                    저장
                  </button>
                </div>
              </div>

              <div class="flex p-8">
                <div class="w-60">
                  <h2>과목</h2>
                </div>
                <div class="ml-10 flex-1">
                  <el-select v-model="c.subjects" multiple collapse-tags placeholder="Select">
                    <el-option
                      v-for="item in $store.state.categories.subjects"
                      :key="item.id"
                      :label="item.title"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                  <button
                    class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="OnSaveClassSubjects(c)"
                  >
                    저장
                  </button>
                </div>
              </div>

              <div class="flex p-8">
                <div class="w-60">
                  <h2>선생님</h2>
                </div>
                <div class="ml-10 flex-1">
                  <el-select
                    v-model="c.teachers"
                    multiple
                    filterable
                    allow-create
                    placeholder="입력해주세요"/>
                  <button
                    class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="OnSaveClassTeachers(c)"
                  >
                    저장
                  </button>
                </div>
              </div>

              <div class="flex p-8">
                <div class="w-60">
                  <h2>시간</h2>
                </div>
                <div class="ml-10 flex-1">
                  <ul v-if="c.times">
                    <li v-for="time in c.times" :key="c.uuid" class="flex justify-between">
                      <div>
                        <el-select v-model="time.day" class="w-24">
                          <el-option v-for="day in ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']" :key="day" :value="day"/>
                        </el-select>

                        <el-time-select
                          placeholder="Start time"
                          v-model="time.start_at"
                          :picker-options="{
                            start: '00:00',
                            step: '00:15',
                            end: '24:00'
                          }"
                          class="!w-28">
                        </el-time-select>
                        <el-time-select
                          placeholder="End time"
                          v-model="time.end_at"
                          :picker-options="{
                            start: '00:00',
                            step: '00:15',
                            end: '24:00',
                            minTime: time.start_at
                          }"
                          class="!w-28">
                        </el-time-select>
                      </div>
                      <button
                        class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="OnSaveClassTimes(c, time)"
                      >
                        저장
                      </button>
                    </li>
                  </ul>

                  <div class="mt-4">
                    <button
                      class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @click="OnCreateClassTimes(c)"
                    >
                      추가
                    </button>
                  </div>
                </div>
              </div>
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
      academy_class_ages: [],
      academy_class_subjects: [],
      input: {
        time: {
          day: "",
          start_at: "",
          end_at: ""
        }
      }
    };
  },
  async fetch() {
    const { uuid } = this.$route.query;

    const { academy } = await this.$store.dispatch(
      "academies/FetchByUuid",
      uuid
    );

    this.academy = academy;
    this.academy.classes = this.academy.classes.map(c => {
      c.ages = c.ages.map(age => age.age.id);
      c.subjects = c.subjects.map(subject => subject.subject.id);
      c.teachers = c.teachers.map(teacher => teacher.name);
      // c.times = c.times.map(time => time.name);

      return c;
    });
  },
  methods: {
    async OnSave() {
      try {
        await this.$store.dispatch("academies/UpdateByUuid", {
          uuid: this.$route.query.uuid,
          data: this.academy
        });

        this.$message({
          message: "성공적으로 저장되었습니다.",
          type: "success"
        });
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
    },
    async OnNewClass() {
      await this.$axios({
        method: "POST",
        url: `/v0/academies/${this.academy.uuid}/classes`
      });

      this.$fetch();
    },
    async OnSaveClass(academy_class) {
      await this.$axios({
        method: "PUT",
        url: `/v0/academy_classes/${academy_class.uuid}`,
        data: academy_class
      });

      this.$message({
        message: "성공적으로 저장되었습니다.",
        type: "success"
      });
      this.$fetch();
    },
    async OnRemoveClass(academy_class) {
      await this.$axios({
        method: "DELETE",
        url: `/v0/academy_classes/${academy_class.uuid}`
      });

      this.$fetch();
    },
    async OnSaveClassAges(academy_class) {
      await this.$axios({
        method: "POST",
        url: `/v0/academy_classes/${academy_class.uuid}/ages`,
        data: {
          ages: academy_class.ages
        }
      });

      this.$message({
        message: "성공적으로 저장되었습니다.",
        type: "success"
      });
    },
    async OnSaveClassSubjects(academy_class) {
      await this.$axios({
        method: "POST",
        url: `/v0/academy_classes/${academy_class.uuid}/subjects`,
        data: {
          subjects: academy_class.subjects
        }
      });

      this.$message({
        message: "성공적으로 저장되었습니다.",
        type: "success"
      });
    },
    async OnSaveClassTeachers(academy_class) {
      await this.$axios({
        method: "POST",
        url: `/v0/academy_classes/${academy_class.uuid}/teachers`,
        data: {
          teachers: academy_class.teachers
        }
      });

      this.$message({
        message: "성공적으로 저장되었습니다.",
        type: "success"
      });
    },
    async OnCreateClassTimes(academy_class) {
      await this.$axios({
        method: "POST",
        url: `/v0/academy_classes/${academy_class.uuid}/times`
      });

      this.$fetch();
    },
    async OnSaveClassTimes(academy_class, time) {
      await this.$axios({
        method: "PUT",
        url: `/v0/academy_classes/${academy_class.uuid}/times/${time.uuid}`,
        data: time
      });

      this.$message({
        message: "성공적으로 저장되었습니다.",
        type: "success"
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
input {
}
</style>