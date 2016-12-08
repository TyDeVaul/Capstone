var vue = require('vue');
var vuex = require('vuex');
var _ = require('lodash');

var getters = require('./getters.js');
var actions = require('./actions.js');

vue.use(vuex);

//===== STATE =====
var state = {
  authToken: localStorage.getItem('authToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
  viewedVideos: localStorage.getItem('viewedVideos') || []
};

//===== MUTATIONS =====
var mutations = {
  setState(state, data){
    state = Object.assign(state, data);
  },
  resetState(state, data){
    state = Object.assign(state, {
        authToken: '',
        refreshToken: '',
        viewedVideos: []
    });
  }
};


module.exports = new vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});