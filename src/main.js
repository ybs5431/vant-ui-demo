import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.js'
import { Button,Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
