import Vue from "vue"; /*Importar libreria que descargamos con npm*/
import App from "./App.vue"; /*Importar componente App*/

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
