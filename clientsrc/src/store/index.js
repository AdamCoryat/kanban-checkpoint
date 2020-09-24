import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import { api } from "./AxiosService.js";
import ns from "./NotificationService.js";
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
    // Auth0 Mutations
    setUser(state, user) {
      state.user = user;
    },
    // Array Mutations
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    // Dictionary Mutations
    setDictionary(state, payload) {
      Vue.set(state[payload.resource], payload.parentId, payload.data);
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
    addDictionary(state, payload) {
      let resource = state[payload.resource][payload.id];
      resource.push(payload.data);
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
    // Array Actions
    async getResource({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        commit("setResource", { data: res.data, resource: payload.resource });
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
    async edit({ dispatch }, payload) {
      try {
        let res = await api.put(payload.path, payload.data);
        dispatch("getResource", {
          path: payload.getPath,
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteById({ dispatch }, payload) {
      try {
        if (await ns.confirmAction()) await api.delete(payload.deletePath);
        dispatch("getResource", {
          path: payload.path,
          resource: payload.resource,
        });
        ns.toast("Deleted!", 2000, "success");
      } catch (error) {
        console.error(error);
      }
    },
    // Dictionary Actions
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
    async createDictionary({ dispatch }, payload) {
      try {
        let res = await api.post(payload.path, payload.data);
        dispatch("getDictionaries", {
          path: payload.getPath,
          resource: payload.resource,
          data: res.data,
          parentId: payload.parentId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async editDictionaries({ dispatch }, payload) {
      try {
        let res = await api.put(payload.path, payload.data);
        dispatch("getDictionaries", {
          path: payload.getPath,
          parentId: payload.parentId,
          resource: payload.resource,
        });
      } catch (error) {}
    },
    async deleteDictionary({ dispatch }, payload) {
      try {
        if (await ns.confirmAction("do you want to delete?"))
          await api.delete(payload.deletePath);
        dispatch("getDictionaries", {
          resource: payload.resource,
          path: payload.path,
          parentId: payload.parentId,
        });
        ns.toast("Deleted!", 2000, "success");
      } catch (error) {
        console.error(error);
      }
    },
    // Edge Case Actions
    async moveTask({ dispatch }, payload) {
      try {
        await api.put(payload.path, payload.data);
        dispatch("getLists", {
          id: payload.id,
          resource: "tasks",
          parentId: payload.parentId,
        });
        dispatch("getLists", {
          id: payload.id,
          resource: "tasks",
          parentId: payload.oldParentId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async getLists({ commit, dispatch }, payload) {
      try {
        // debugger;
        let res = await api.get("boards/" + payload.id + "/lists");
        console.log(res);
        commit("setResource", { data: res.data, resource: "lists" });
        dispatch("getDictionaries", {
          resource: "tasks",
          path: "lists/" + payload.parentId + "/tasks",
          parentId: payload.parentId,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
