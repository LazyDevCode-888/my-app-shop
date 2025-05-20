import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import Deposit from "../views/Deposit.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import History from "../views/History.vue";
import UserProfile from "../views/UserProfile.vue";
import ProfileEdit from "../views/ProfileEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product",
    name: "Product",
    component: Product, 
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import("../views/ProductDetail.vue"), 
  },
  {
    path: "/deposit",
    name: "Deposit",
    component: Deposit, 
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact, 
  },
  {
    path: "/login",
    name: "Login",
    component: Login, 
  },
  {
    path: "/register",
    name: "Register",
    component: Register, 
  },
  {
    path: "/history",
    name: "History",
    component: History, 
  },
  {
    path: "/userprofile",
    name: "UserProfile",
    component: UserProfile, 
  },
  {
    path: "/profile/edit",
    name: "ProfileEdit",
    component: ProfileEdit, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
