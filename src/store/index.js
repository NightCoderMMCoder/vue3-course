import { createStore } from "vuex";

export default createStore({
  state: {
    games: [],
    game: {},
    error: null,
    loading: false,
    lastFetch: null,
  },
  mutations: {
    setGames(state, payload) {
      state.games = payload;
    },
    setGame(state, payload) {
      state.game = payload;
    },
    setError(state, payload) {
      console.log(payload);
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setLastFetch(state, payload) {
      state.lastFetch = payload;
    },
  },
  actions: {
    async fetchGames({ commit, getters }) {
      if (!getters.shouldUpdate) return;
      commit("setLoading", true);
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.VUE_APP_API_KEY}`
        );

        const data = await res.json();
        commit("setGames", data.results);
        commit("setLastFetch", new Date().getTime());
      } catch (error) {
        commit("setError", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchGame({ commit }, payload) {
      commit("setLoading", true);
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${payload}?key=${process.env.VUE_APP_API_KEY}`
        );
        const data = await res.json();
        if (data.detail) {
          throw new Error("The data not found");
        }
        commit("setGame", data);
      } catch (error) {
        commit("setError", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async searchGames({ commit }, payload) {
      commit("setLoading", true);
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.VUE_APP_API_KEY}&search=${payload}`
        );
        const data = await res.json();
        if (data.count === 0) {
          throw new Error("The datas not found");
        }
        commit("setGames", data.results);
      } catch (error) {
        commit("setError", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    games(state) {
      return state.games;
    },
    game(state) {
      return state.game;
    },
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    },
    shouldUpdate(state) {
      if (!state.lastFetch) return true;
      let currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - state.lastFetch) / 1000 > 60;
    },
  },
  modules: {},
});
