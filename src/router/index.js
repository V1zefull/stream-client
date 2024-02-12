import VueRouter from "vue-router";
import home from "../page/home/homePage";
import ProfilePage from "../page/profile/profile";
import stream from "../page/stream/stream"

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/stream",
    name: "Stream",
    component: stream,
  },
  
  {
    // will match everything
    path: "*",
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
