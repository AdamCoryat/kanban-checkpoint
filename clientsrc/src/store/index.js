import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import { api } from "./AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    lists: [],
    tasks: [],
    comments: [],
    activeBoard: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    delete(state, payload) {
      state[payload.resource] = state[payload.resource].filter(
        (p) => p.id != payload.id
      );
    },
  },

  actions: {
    //#region -- AUTH STUFF --
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile");
        commit("setUser", res.data);
      } catch (err) {
        console.error(err);
      }
    },
    //#endregion

    //#region -- BOARDS --
    async getResource({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        let resource = payload.resource;
        console.log(res);
        commit("setResource", { data: res.data, resource });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteById({ commit }, payload) {
      try {
        await api.delete(payload.resource + payload.id);
        let resource = payload.path;
        commit("setResource", { data: {}, resource });
        router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
    async create({ commit }, payload) {
      try {
        let res = await api.post(payload.path, payload.data);
        let resource = payload.path;
        commit("setResource", { data: res.data, resource });
        router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
    async edit({ commit }, payload) {
      try {
        let res = await api.put(
          payload.resource + "/" + payload.id,
          payload.data
        );
        let resource = payload.resource;
        router.push({ name: "Home" });
        commit("setResource", { data: res.data, resource });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
