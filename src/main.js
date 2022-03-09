import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./index.css";
import router from "./router"; // <---
import "tw-elements";
import { createPinia, PiniaVuePlugin } from "pinia";

loadFonts();

const pinia = createPinia();

createApp(App).use(vuetify).use(router).use(PiniaVuePlugin).use(pinia).mount("#app");
