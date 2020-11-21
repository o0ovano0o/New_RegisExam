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
    },
    {
      path: "/student/profile",
      name: "student_profile",
      component: require("@/views/user/layout").default,
      children:[
        {
          path:'',
          name:"admin_profile_detail",
          component: require("@/views/user/profile/profile-student").default
        }
      ]
    },
    {
      path: "/student/home",
      name: "student_home",
      component: require("@/views/user/layout").default,
      children:[
        {
          path:'',
          name:"student_home_detail",
          component: require("@/views/user/home").default
        }
      ]
    },
    {
      path: "/student/exam-registration",
      name: "student_exam_registration",
      component: require("@/views/user/layout").default,
      children:[
        {
          path:'',
          name:"student_exam_registration_detail",
          component: require("@/views/user/examRegistration").default
        }
      ]
    },
    {
      path: "/student/print-exam-registration",
      name: "student_print_exam_registration",
      component: require("@/views/user/layout").default,
      children:[
        {
          path:'',
          name:"student_print_exam_registration_detail",
          component: require("@/views/user/printExamRegistration").default
        }
      ]
    },
    {
      path: "/student/repass",
      name: "student_repass",
      component: require("@/views/user/layout").default,
      children:[
        {
          path:'',
          name:"student_repass_detail",
          component: require("@/views/user/rePass").default
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
