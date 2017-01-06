// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import andyou from './components/andyou.vue'
import about from './components/about.vue'
import experience from './components/experience.vue'
import future from './components/future.vue'
import Hello from './components/Hello.vue'
import skill from './components/skill.vue'
Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Hello},
    {path: '/about', component: about},
    {path: '/experience', component: experience},
    {path: '/skill', component: skill},
    {path: '/future', component: future}


  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
      <div id="app">
        <router-link to="/about">about</router-link>
        <router-view></router-view>
      </div>
    `
}).$mount('#app')
