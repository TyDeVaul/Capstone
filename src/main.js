global.jQuery = require('jquery');
global.toastr = require('toastr');
global.nprogress = require('nprogress');
global._ = require('lodash');
require('bootstrap');

var Vue = require('vue');
var store = require('./store/index.js');
var App = Vue.extend(require('./app.vue'));
var VueRouter = require('vue-router');

//init toastr
global.toastr.options = {
  positionClass: 'toast-top-center'
};

//init vue
Vue.use(VueRouter);

//global components
Vue.component('v_topbar', require('./views/components/v_topbar.vue'));
Vue.component('v_sidebar', require('./views/components/v_sidebar.vue'));

//routes
var routes = [
  {
    path: '/',
    component: require('./views/home.vue')
  },
  {
    path: '/signin',
    component: require('./views/signin.vue')
  },
  {
    path: '/register',
    component: require('./views/register.vue')
  },
  {
    path: '/recover',
    component: require('./views/recover.vue')
  },
  {
    path: '/about',
    component: require('./views/about.vue')
  },
  {
    path: '/contact',
    component: require('./views/contact.vue')
  },
  {
    path: '/error',
    component: require('./views/error.vue')
  },
  {
    path: '*',
    redirect: '/error'
  }
];

//init router
global.router = new VueRouter({
  routes: routes
});

//before each route change
router.beforeEach(function(to, from, next) {
  //check if user is authenticated
  if(to.meta.auth && !store.getters.loggedIn) {
    // if user isn't authenticated, redirect
    next('/signin');
  }else{
    //start loading bar
    nprogress.start();

    //continue
    next();
  }
});

//after each route change
router.afterEach(function(to, from) {
  //stop loading bar
  nprogress.done();
});


//start app
new App({
  store: store,
  router: router
}).$mount('#app');