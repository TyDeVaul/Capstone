<template>
  <nav class="nav-sidebar">
    <ul class="nav">

      <!-- public -->
      <router-link tag="li" to="/" active-class="active" exact>
        <a>Trending</a>
      </router-link>
      <router-link tag="li" to="/popular" active-class="active" exact>
        <a>Popular</a>
      </router-link>
      <router-link tag="li" to="/newtoday" active-class="active" exact>
        <a>New Today</a>
      </router-link>
      <li @click="random()">
        <a>Random</a>
      </li>

      <!-- private -->
      <li v-show="$store.getters.loggedIn" class="nav-divider"></li>

      <router-link v-show="$store.getters.loggedIn" tag="li" to="/mychannel" active-class="active" exact>
        <a>My Channel</a>
      </router-link>
      <router-link v-show="$store.getters.loggedIn" tag="li" to="/subscriptions" active-class="active" exact>
        <a>Subscriptions</a>
      </router-link>
      <router-link v-show="$store.getters.loggedIn" tag="li" to="/history" active-class="active" exact>
        <a>History</a>
      </router-link>
      <router-link v-show="$store.getters.loggedIn" tag="li" to="/account" active-class="active" exact>
        <a>Account</a>
      </router-link>

      <li class="nav-divider"></li>

      <router-link v-show="!$store.getters.loggedIn" tag="li" to="/signin" active-class="active" exact>
        <a><i class="glyphicon glyphicon-off"></i> Sign In</a>
      </router-link>

      <li v-show="$store.getters.loggedIn" @click="logout()">
        <a><i class="glyphicon glyphicon-log-out"></i> Log Out</a>
      </li>

    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      random: function (vm = this) {
        alert('random video');
      },
      logout: function (vm = this) {
        return vm.$store.dispatch('clearAll').then(function (data) {
          //redirect to home
          router.replace('/');
        });
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
  //sidebar
  .nav-sidebar {
    background-color: #ffffff;
    width: 100%;
    padding: 8px 0;
    border-right: 1px solid #ddd;
    a {
      color: #333;
      -webkit-transition: all 0.08s linear;
      -moz-transition: all 0.08s linear;
      -o-transition: all 0.08s linear;
      transition: all 0.08s linear;
      -webkit-border-radius: 4px 0 0 4px;
      -moz-border-radius: 4px 0 0 4px;
      border-radius: 4px 0 0 4px;
    }
    .active {
      a {
        cursor: default;
        background-color: #428bca;
        color: #fff;
        text-shadow: 1px 1px 1px #666;
      }
      a:hover {
        background-color: #428bca;
      }
      a:focus {
        background-color: #428bca;
      }
    }
    .text-overflow {
      a, .media-body {
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }
    }
  }
</style>