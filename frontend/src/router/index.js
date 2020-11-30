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
            path: "/demo-import",
            name: "demo-import",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "demo-import-detail",
                component: require("@/views/admin/import/index.vue").default
            }]
        },
        // {
        //     path: "/admin/home",
        //     name: "admin_home",
        //     component: require("@/views/admin/layout").default,
        //     children: [{
        //         path: '',
        //         name: "admin_home_detail",
        //         component: require("@/views/admin/home").default
        //     }]
        // },


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
            path: "/admin/login",
            name: "admin_login",
            component: require("@/views/admin/login/login-admin").default
        },
        {
            path: "/admin/home",
            name: "admin_home",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_home_detail",
                component: require("@/views/admin/home").default
            }]
        },
        {
            path: "/admin/exam",
            name: "admin_exam",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_exam_detail",
                component: require("@/views/admin/TaoKy/TaokyView").default
            }]
        },
        {
            path: "/admin/semester",
            name: "admin_semester",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_semester_detail",
                component: require("@/views/admin/TaoCa/TaoCa_ListCaView").default
            }]
        },
        {
            path: "/admin/listSubject",
            name: "admin_listSubject",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_listSubject_detail",
                component: require("@/views/admin/ListSubject/ListSubjectView").default
            }]
        },
        {
            path: "/admin/listUserAdmin",
            name: "admin_listUserAdmin",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_listUserAdmin_detail",
                component: require("@/views/admin/ListUserAdmin/ListUserAdminView").default
            }]
        },

        {
            path: "/admin/listUserStudent",
            name: "admin_listUserStudent",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_listUserStudent_detail",
                component: require("@/views/admin/ListUserStudent/ListUserSinhVienView").default
            }]
        },

        {
            path: "/admin/showWeb0",
            name: "admin_showWeb0",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showWeb0_detail",
                component: require("@/views/admin/ShowWeb/ShowWeb0View").default
            }]
        },

        {
            path: "/admin/showWeb1",
            name: "admin_showWeb1",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showWeb1_detail",
                component: require("@/views/admin/ShowWeb/ShowWeb1View").default
            }]
        },
        {
            path: "/admin/showHqt0",
            name: "admin_showHqt0",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showHqt0_detail",
                component: require("@/views/admin/ShowHqt/ShowHqt0View").default
            }]
        },
        {
            path: "/admin/showHqt1",
            name: "admin_showHqt1",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showHqt1_detail",
                component: require("@/views/admin/ShowHqt/ShowHqt1View").default
            }]
        },
        {
            path: "/admin/showAi0",
            name: "admin_showAi0",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showAi0_detail",
                component: require("@/views/admin/ShowAi/ShowAi0View").default
            }]
        },
        {
            path: "/admin/showAi1",
            name: "admin_showAi1",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showAi1_detail",
                component: require("@/views/admin/ShowAi/ShowAi1View").default
            }]
        },
        {
            path: "/admin/addUserStudent",
            name: "admin_adduserstudent",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_showAi1_detail",
                component: require("@/views/admin/Add/AddUserStudentView").default
            }]
        },
        {
            path: "/admin/addNotEligibleStudent",
            name: "admin_addNotEligibleStudent",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_addNotEligibleStudent_detail",
                component: require("@/views/admin/Add/AddNotEligibleStudentView").default
            }]
        },
        {
            path: "/admin/addEligibleStudent",
            name: "admin_addEligibleStudent",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_addEligibleStudent_detail",
                component: require("@/views/admin/Add/AddEligibleStudentView").default
            }]
        },
        {
            path: "/admin/printListExam",
            name: "admin_printListExam",
            component: require("@/views/admin/layout").default,
            children: [{
                path: '',
                name: "admin_printListExam_detail",
                component: require("@/views/admin/Print/PrintListExamView").default
            }]

        },
        {
            path: "/student/profile",
            name: "student_profile",
            component: require("@/views/user/layout").default,
            children:[
              {
                path:'',
                name:"student_profile_detail",
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
            path: "/student/regist-exam",
            name: "student_registExam",
            component: require("@/views/user/layout").default,
            children:[
              {
                path:'',
                name:"student_registExam_detail",
                component: require("@/views/user/registExam").default
              }
            ]
          },
          {
            path: "/student/print-exam-registration",
            name: "student_printExamRegistration",
            component: require("@/views/user/layout").default,
            children:[
              {
                path:'',
                name:"student_printExamRegistration_detail",
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
