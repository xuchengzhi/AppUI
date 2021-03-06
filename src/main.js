// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import './assets/iconfont/iconfont.css'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex'
import i18n from './i18n/i18n'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});



Vue.use(ElementUI);

Vue.config.productionTip = false

//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
  // console.log(store.getters.token)
  // debugger

  if (store.getters.token) {
    store.dispatch('setToken', store.getters.token)
    // store.dispatch('nickname', store.getters.nickname)
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (!store.getters.info.role) {
        // const role = ['/markdown', '/erji', '/erji2', '/siji', '/wuji']
        !async function getAddRouters () {
          await store.dispatch('getInfo', store.getters.token)
          await store.dispatch('newRoutes', store.getters.info.role)
          console.log(store.getters.addRouters)
          await router.addRoutes(store.getters.addRouters)
          next({path: '/index'})
          // next({path: '/autopay'})
        }()
      } else {
        let is404 = to.matched.some(record => {
          if(record.meta.role){
            return record.meta.role.indexOf(store.getters.info.role) === -1
          }
        })
        if(is404){
          next({path: '/404'})
          return false
        }
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({path: '/login'})

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: '<App/>'
})
