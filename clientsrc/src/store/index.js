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
      state[payload.resource] = state[payload.resource].filter(
        (p) => p.id != payload.id
      );
    },
    setTasks(state, payload) {
      Vue.set(state.tasks, payload.listId, payload.data);
    },
    setComments(state, payload) {
      Vue.set(state.comments, payload.taskId, payload.data);
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

    async getTasks({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        commit("setTasks", { data: res.data, listId: payload.listId });
      } catch (error) {
        console.error(error);
      }
    },

    async getComments({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        commit("setComments", { data: res.data, taskId: payload.taskId });
      } catch (error) {
        console.error(error);
      }
    },

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
        await api.delete(payload.path);
        let resource = payload.resource;
        commit("delete", { resource: resource, id: payload.id });
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
