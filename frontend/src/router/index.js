import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)





export default new vueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "user_login",
      component: require("@/views/_general/logIn/logIn").default
    },
    // {
    //   path: "/catalog",
    //   name: "catalog",
    //   component: require("@/views/admin/catalog/index").default,
    //   children: [
    //     {
    //       path: ':id',
    //       name:'product',
    //       component: require("@/views/admin/catalog/page/product.vue").default
    //     },
    //     {
    //       path: "/admin-products/:id",
    //       name: "admin-products",
    //       component: require("@/views/admin/catalog/components/product").default
    //     }
    //   ]
    // }
  ]
});
