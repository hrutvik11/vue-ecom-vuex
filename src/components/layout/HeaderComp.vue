<template>
  <!-- <CartDrawerComp :isDrawerOpen="iscartOpen" :closeDrawer="closeDrawer" /> -->

  <header
    class="bg-[#515150] text-white h-[80px] flex items-center justify-center"
  >
    <div class="flex items-center justify-evenly w-[50%]">
      <img
        src="https://eptummers.nl/7e8e89a030b10f539cffe444ef646945.svg"
        alt="Logo"
        width="210"
        height="28"
      />
      <input class="w-[500px]" placeholder="search" />
    </div>
    <div class="flex justify-between items-center gap-6">
      <img
        data-v-36e20054=""
        src="https://eptummers.nl/media/wagentje_wit.svg"
        alt="Winkelmand"
        width="35"
        height="35"
        class="cursor-pointer"
        @click="toggleCart"
      />
      <div>
        <div
          v-if="isUserLogged"
          class="flex items-center justify-between flex-row gap-4"
        >
          <div>
            <img
              :src="getUserLoggedInDetails('image')"
              class="border border-primary-color rounded-full w-12 h-12"
            />
          </div>
          <span>{{ getUserLoggedInDetails("name") }}</span>
        </div>
        <div v-else>
          <RouterLink to="/login">
            <img
              src="https://eptummers.nl/media/icoon_account_wit.svg"
              width="35"
              height="35"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
// import CartDrawerComp from "./CartDrawerComp.vue";
import { RouterLink } from "vue-router";
import { isUserLoggedIn } from "../../utils/helpers";

export default {
  //   components: {
  //     CartDrawerComp,
  //   },
  data() {
    return {
      iscartOpen: false,
      userData: null,
    };
  },
  methods: {
    toggleCart() {
      this.iscartOpen = !this.iscartOpen;
    },
    closeDrawer() {
      this.iscartOpen = false;
    },
    getUserLoggedInDetails(key) {
      if (this.$store?.getters?.getUserData) {
        return this.$store?.getters?.getUserData[key];
      } else {
        return "";
      }
    },
  },
  computed: {
    isUserLogged() {
      return isUserLoggedIn();
    },
  },
};
</script>
<style scoped>
input {
  border-radius: 25px;
  height: 40px;
  background-color: #8a8a8a;
  color: black;
  padding: 10px;
}

input:focus {
  outline: none;
}
</style>
