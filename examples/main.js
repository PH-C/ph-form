// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import phUI from '../packages'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册组件库
Vue.use(ElementUI);
Vue.use(phUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
