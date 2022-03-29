import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./index.css";
import router from "./router"; // <---
import "tw-elements";
import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPersist from "pinia-plugin-persist";

loadFonts();

const pinia = createPinia();
pinia.use(piniaPersist)

createApp(App).use(vuetify).use(router).use(PiniaVuePlugin).use(pinia).mount("#app");
