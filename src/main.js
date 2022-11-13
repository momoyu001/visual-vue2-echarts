import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册组件 -- 遍历components文件夹，动态注册
const context = require.context('@/components', false, /\.vue$/);
if (context && context.keys()) {
    context.keys().map(item => {
        // const component = context(item) || context(item).default;
        const component = context(item).default;
        Vue.component(component.name, component);
    })
}

// 引入echarts，注册位全局的对象
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
}).$mount('#app')
