import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/foods",
    name: "Foods",
    component: () => import("../views/Foods.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../views/Movies.vue"),
  },
  {
    path: "/moviedetail/:id",
    name: "Movie Detail",
    component: () => import("../views/MovieDetail.vue"),
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () => import("../views/Shopping.vue"),
  },
  {
    path: "/repair",
    name: "Repair",
    component: () => import("../views/Repair.vue"),
  },
  {
    path: "/latestmovie",
    name: "LatestMovie",
    component: () => import("../components/LatestMovie.vue"),
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component:()=>import('../components/Movie.vue')
  },
  {
    path: '/members',
    name: 'Members',
    component:()=>import('../views/Members.vue')
  },
  {
    path: '/editmember/:id',
    name: 'EditMember',
    component: () => import('../views/EditMember.vue')
  },
  {
    path: '/viewmember/:id',
    name: 'ViewMember',
    component:()=>import('../views/ViewMember.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
