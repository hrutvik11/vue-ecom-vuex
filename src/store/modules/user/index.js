import { db } from "../../../firebase";
import { ref, onValue } from "@firebase/database";

export const user = {
  // namespaced: true,

  state() {
    return {
      userData: null,
    };
  },

  getters: {
    getUserData(state) {
      return state.userData;
    },
  },
  mutations: {
    SET_USER_DATA(state, user_data) {
      state.userData = user_data;
    },
  },
  actions: {
    async fetchUserDetails({ commit }, uid) {
      const userRef = ref(db, "chatApp/users/" + uid);

      onValue(
        userRef,
        async (snap) => {
          if (snap.exists()) {
            const val = await snap.val();
            commit("SET_USER_DATA", val);
          }
        },
        { onlyOnce: true }
      );
    },
  },
  //   getters: {
  //     getUserLogedIn(state) {
  //       return state.userLogedIn;
  //     },
  //   },
  //   mutations: {
  //     SET_USER_LOGED_IN(state, isLogedIn) {
  //       state.userLogedIn = isLogedIn;
  //     },
  //   },
  //   actions: {
  //     changeUserLogedIn({ commit, getters }) {
  //       commit("SET_USER_LOGED_IN", !getters.getUserLogedIn);
  //     },
  //   },
};
