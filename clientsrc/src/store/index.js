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
    tasks: {},
    comments: {},
    activeBoard: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    addResource(state, payload) {
      let resource = state[payload.resource];
      if (Array.isArray(resource)) {
        resource.push(payload.data);
      } else {
        console.error(
          "Cannot add to ${payload.resource} as it is not an array"
        );
      }
    },
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    addDictionary(state, payload) {
      let resource = state[payload.resource][payload.id];
      resource.push(payload.data);
    },
    delete(state, payload) {
      let resource = state[payload.resource];
      if (Array.isArray(resource)) {
        resource = resource.filter((p) => p.id != payload.id);
      } else {
        console.error(
          "Cannot remove from ${payload.resource} as it is not an array"
        );
      }
    },
    deleteDictionary(state, payload) {
      let resource = state[payload.resource][payload.parentId];
      if (Array.isArray(resource)) {
        resource = resource.filter((p) => p.id != payload.id);
      } else {
        console.error(
          "Cannot remove from ${payload.resource} as it is not an array"
        );
      }
    },
    setDictionary(state, payload) {
      Vue.set(state[payload.resource], payload.parentId, payload.data);
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
    async getDictionaries({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        commit("setDictionary", {
          resource: payload.resource,
          data: res.data,
          parentId: payload.parentId,
        });
      } catch (error) {
        console.error(error);
      }
    },

    async getResource({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        commit("setResource", { data: res.data, resource: payload.resource });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteById({ dispatch }, payload) {
      try {
        await api.delete(payload.deletePath);
        dispatch("getResource", {
          path: payload.path,
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteDictionary({ commit, dispatch }, payload) {
      try {
        await api.delete(payload.deletePath);
        commit("deleteDictionary", {
          resource: payload.resource,
          id: payload.id,
          parentId: payload.parentId,
        });
        dispatch("getComments", {
          resource: payload.resource,
          path: payload.path,
          parentId: payload.parentId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async create({ dispatch }, payload) {
      try {
        let res = await api.post(payload.path, payload.data);
        dispatch("getResource", {
          path: payload.getPath,
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async createDictionary({ dispatch }, payload) {
      try {
        let res = await api.post(payload.path, payload.data);
        dispatch("getDictionaries", {
          path: payload.getPath,
          resource: payload.resource,
          data: res.data,
          parentId: payload.parentId
        });
      } catch (error) {
        console.error(error);
      }
    },
    async edit({ dispatch }, payload) {
      try {
        let res = await api.put(payload.path, payload.data);
        dispatch("getResource", {
          path: payload.resource + "/",
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async editComment({ commit, dispatch }, payload) {
      try {
        let res = await api.put(payload.path, payload.data);
        commit("addDictionary", {
          data: res.data,
          resource: payload.resource,
          id: payload.id,
        });
        dispatch("getComments", {
          path: "tasks/" + payload.id + "/comments",
          taskId: payload.id,
        });
      } catch (error) {}
    },
    async editTask({ commit, dispatch }, payload) {
      try {
        let res = await api.put(payload.path, payload.data);
        commit("addDictionary", {
          data: res.data,
          resource: payload.resource,
          id: payload.id,
        });
        dispatch("getTasks", {
          path: "lists/" + payload.id + "/tasks",
          listId: payload.id,
        });
      } catch (error) {}
    },
  },
});
