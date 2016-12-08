var q = require('q');
var jwt = require('jsonwebtoken');

//===== GETTERS =====
var getters = {
  remembered(state, getters){
    return localStorage.getItem('authToken') != null;
  },
  loggedIn(state, getters){
    return state.authToken != '';
  },
  authTokenInfo(state, getters){
    return jwt.decode(state.authToken);
  },
  refreshTokenInfo(state, getters){
    return jwt.decode(state.refreshToken);
  },
  authTokenExpired(state, getters){
    return Math.floor(Date.now()/1000)+10 >= getters.authTokenInfo.exp;
  },
  refreshTokenExpired(state, getters){
    return Math.floor(Date.now()/1000)+10 >= getters.refreshTokenInfo.exp;
  }
};

module.exports = getters;