import Vue from "vue";
import {
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Container,
  Header,
  Aside,
  Main,
  Tree,
  Input
} from "element-ui";

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Tree);
Vue.use(Input);
