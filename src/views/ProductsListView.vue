<template>
  <div class="min-h-[700px] p-4 flex gap-4">
    <CardComp
      class="h-fit border border-[#E6E6E6] w-[260px] cursor-pointer"
      v-for="products in fetchProducts"
      :key="products.id"
      @click="onProductClick(products.id)"
    >
      <div class="h-[200px] px-4 py-2">
        <img :src="products.img" class="h-full w-full object-contain" />
      </div>
      <div class="mt-3 text-left px-2">
        <div class="text-[#05A64A]">{{ products.name }}</div>
        <div class="text-[#959595] text-[12px] mt-1">{{ products.desc }}</div>
        <div class="mt-1 flex justify-between py-2 items-center px-2">
          <span class="text-[18px] font-semibold">${{ products.price }}</span>
          <!-- <button
            @click.stop="AddtoCart(products.id)"
            :disabled="isAddedInCart(products.id)"
          >
            Add to cart
          </button> -->
        </div>
      </div>
    </CardComp>
  </div>
</template>
<script>
import CardComp from "../components/CardComp.vue";

export default {
  components: {
    CardComp,
  },
  methods: {
    onProductClick(pid) {
      this.$router.push(`/productdetail/${pid}`);
    },
  },
  computed: {
    fetchProducts() {
      const subCategories = this.$store?.getters?.getSubCategories;

      const productsData = [...subCategories].find(
        (el) =>
          el.id.toString().trim() === this.$route.params.pid.toString().trim()
      );

      if (productsData.products && productsData.products.length > 0) {
        return productsData.products;
      }
    },
  },
};
</script>
<style></style>
