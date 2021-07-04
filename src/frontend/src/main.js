import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API || 'http://localhost:3000'

Vue.filter('formatDateFromUnixTimestamp', function (value) {
  if (!value) return ''
  return moment.unix(value).format('YYYY-MM-DD h:mm:ss A')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
