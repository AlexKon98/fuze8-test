import { createStore } from 'vuex';
import axios from 'axios';
import { API_BASE_URL } from '@/config.js';

export default createStore({
  state: {
    jokes: [],
    error: '',
  },
  getters: {
    getJokes: s => s.jokes,
    getError: s => s.error,
  },
  mutations: {
    setJokes(state, jokes) {
      state.jokes = jokes;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchJokes({commit}, search) {
      try {
        const req = await axios.get(API_BASE_URL + '/search?query=' + search);
        if (req.status === 200 && req.data.result.length > 0) {
          commit('setJokes', req.data.result);
        } else {
          commit('setError' ,'Jokes not found :(');
        }
      } catch(e) {
        commit('setError' ,'Jokes not found :(');
      }
    },
    async fetchJokeInfo({commit}, id) {
      try {
        const req = await axios.get(API_BASE_URL + '/' + id);
        if (req.status === 200 && req.data) {
          return req.data;
        } else {
          return { error: "Seems like joke doesn't exist!", }
        }
      } catch (e) {
        commit('setError' ,"Seems like joke doesn't exist!");
      }
    }
  }
});
