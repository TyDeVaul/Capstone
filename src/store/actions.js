var q = require('q');
var _ = require('lodash');
var axios = require('axios');

var config = require('../../config');

//===== ACTIONS =====
var actions = {
  //CHECK: request <url> <query>
  request({ state, commit, getters, dispatch }, data){
    return q.fcall(function () {
      //check if route requires authentication
      if(_.includes(config.AUTH_SCOPE, data.url)){
        //check if logged in
        if(getters.loggedIn){
          //check if token has expired
          if(getters.authTokenExpired){

            //get new token
            return dispatch('request', {
              url: 'newAuthToken',
              query: {
                refreshToken: state.refreshToken
              }
            }).then(function (response) {

              //set new tokens
              return dispatch('setTokens', {
                authToken: response.authToken,
                refreshToken: response.refreshToken
              }).then(function (data) {
                //retry authenticated request
                return dispatch('request', data);
              });

            }).catch(function (error) {
              //ERROR: authentication failed
              throw new Error('authentication failed');
            });

          }else{
            //make authenticated request
            return axios.post('/api/' + data.url, data.query, {
              Authorization: 'Bearer ' + state.authToken
            }).then(function (data) {
              if(data.data.success == true){
                //request succeeded
                return data.data.response;
              }else{
                //ERROR: request failed
                throw new Error('request failed');
              }
            });
          }

        }else{
          //ERROR: authentication failed
          throw new Error('authentication failed');
        }
      }else{
        //make request
        return axios.post('/api/' + data.url, data.query).then(function (data) {
          if(data.data.success == true){
            //request succeeded
            return data.data.response;
          }else{
            //ERROR: request failed
            throw new Error('request failed');
          }
        });

      }

    }).catch(function (error) {
      if(error.message == 'authentication failed'){
        //clearAll and throw error
        dispatch('clearAll');
        throw new Error('authentication failed');
      }else{
        //throw error
        throw new Error('request failed');
      }
    });
  },

  //CHECK: setTokens <authToken> <refreshToken> -remember-
  setTokens({ state, commit, getters, dispatch }, data){
    return q.fcall(function () {
      //if remember user, store in localstorage
      if(data.remember || localStorage.getItem('authToken')){
        localStorage.setItem('authToken', data.authToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('viewedVideos', JSON.stringify([]));
      }

      //set state
      commit('setState', {
        authToken: data.authToken,
        refreshToken: data.refreshToken,
        viewedVideos: []
      });
    });
  },

  //CHECK: clearAll
  clearAll({ state, commit, getters, dispatch }, data){
    return q.fcall(function () {
      //delete stored data and state
      localStorage.clear();
      commit('resetState');
    });
  },

  //CHECK: addViewedVideos <v_id>
  addViewedVideos({ state, commit, getters, dispatch }, data){
    return q.fcall(function () {
      //add video to viewedVideos
      var viewedVideos = _.uniq([...data.v_id, ...state.viewedVideos]);
      
      //if remembered, set localStorage
      if(getters.remembered){
        localStorage.setItem('viewedVideos', JSON.stringify(viewedVideos));
      }
      
      //set state
      commit('setState', {
        viewedVideos: viewedVideos
      });
    });
  },

  //CHECK: checkViewedVideos <[v_id]>
  checkViewedVideos({ state, commit, getters, dispatch }, data){
    return q.fcall(function () {
      //check if videos have been viewed
      return _.intersection(state.viewedVideos, data.v_id);
    });
  },
  
  //CHECK: clearViewedVideos
  clearViewedVideos({ state, commit, getters, dispatch }, data){
    return q.fcall(function () {
      //if remembered, reset localStorage viewedVideos
      if(getters.remembered){
        localStorage.setItem('viewedVideos', JSON.stringify([]));
      }
      
      //set state
      commit('setState', {
        viewedVideos: []
      });
    });
  }
  
  //TODO: sortCommentsNew <comments>
  //TODO: sortCommentsBest <comments>
  //TODO: sortCommentsHot <comments>
};

module.exports = actions;