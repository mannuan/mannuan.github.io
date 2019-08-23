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
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Backtop
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
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Backtop);
