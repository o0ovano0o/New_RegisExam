import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)





export default new vueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/login",
    //   name: "user_login",
    //   component: require("@/views/_general/logIn/logIn").default
    // },
    {
      path: "/student/login",
      name: "student_login",
      component: require("@/views/user/login/login-student").default
    },
    {
      path: "/demo-import",
      name: "demo-import",
      component: require("@/views/admin/layout").default,
      children:[
        {
          path:'',
          name:"demo-import-detail",
          component: require("@/views/admin/import/index.vue").default
        }
      ]
    },
    {
      path: "/admin/home",
      name:"admin_home",
      component: require("@/views/admin/layout").default,
      children:[
        {
          path:'',
          name:"admin_home_detail",
          component: require("@/views/admin/home").default
        }
      ]
    }
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
