// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

//使用轮播图插件
Vue.use(VueAwesomeSwiper)

//图片懒加载
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529157293742&di=8eccd93cb7c6900de36eb27b00fd895a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fc0%253Dbaike80%252C5%252C5%252C80%252C26%253Bt%253Dgif%2Fsign%3D4d5468bbdb33c895b2739029b07a1895%2F96dda144ad345982f0c7fabe0ef431adcbef8448.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
});

//在进入路由之前，每一次都会执行此方法，全局钩子，有拦截功能
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  if (to.path === '/list') {
    //next({path: '/add'});
    next();
  }
  else {
    next();
  }
});
import store from './store';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
