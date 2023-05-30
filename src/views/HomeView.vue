<template>
  <div class="p-4 flex flex-col gap-2">
    <div class="flex gap-6 justify-center">
      <div class="flex flex-col gap-2">
        <RouterLink
          class="p-6 bg-[#E6E6E6] rounded-md cursor-pointer hover:text-[#05A64A] text-[17px] text-gray-600"
          v-for="category in fetchCategories"
          :key="category.id"
          :to="`/category/${category.id}`"
        >
          {{ category.title }}
        </RouterLink>
      </div>

      <img
        src="https://eptummers.nl/media/tailoredslider_media/1/Homebanner_1.png"
      />
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {};
  },
  computed: {
    fetchCategories() {
      return this.$store?.getters?.getCategories;
    },
  },
};
</script>
<style></style>
