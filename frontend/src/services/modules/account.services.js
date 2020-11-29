/* eslint-disable new-cap */
import Api from "@/services";
export default {
    logInUser(user) {
        return Api().post("/api/student/login", user);
    },
    logInAdmin(user) {
        return Api().post("/api/admin/login", user);
    },
    getHome() {
        return Api().get("/api/admin/home");
    },
    getListStudent() {
        return Api().get("/api/admin/students");
    },
    getListAdmin() {
        return Api().get("/api/admin/admins");
    },
    getListExam() {
        return Api().get("/api/admin/exams");
    },
    importExam(data) {
        return Api().post("/api/admin/exam", data);
    },
    deleteExam(id) {
        return Api().delete(`/api/admin/exam/${id}`);
    },
    deleteStudent(id) {
        return Api().delete(`/api/admin/student/${id}`);
    },
    getListSemester(id) {
        return Api().get(`/api/admin/classess/${id}`);
    },
    deleteSemester(id, item) {
        return Api().delete(`/api/admin/classes/${id}/${item}`);
    },
    importAdmin(data) {
        return Api().post("/api/admin/register", data);
    },
    deleteAdmin(id) {
        return Api().delete(`/api/admin/admin/${id}`);
    },
    getListPrint(data) {
        return Api().post("/api/admin/print_room", data);
    }
    // registerUser(user) {
    //   return Api().post("/customer/register", user);
    // },
    // getMe(){
    //   return Api().get("/entry");
    // },
    // logOut(){
    //   return Api().get("/logout");
    // },
    // changepass(old_password, new_password){
    //   return Api().patch("/change-password",{ old_password, new_password });
    // },
    // changeProfile(userInfo){
    //   return Api().patch("/entry",{...userInfo });
    // },
    // getUserList(){
    //   return Api().get("/admin/customers");
    // },
    // getAdminList(){
    //   return Api().get("/admin/employees");
    // },
    // deleteAdmin(id){
    //   return Api().delete(`/employees/${id}`);
    // },
    // createAdmin(info){
    //   return Api().post('/admin/employee', {...info});
    // },
    // deleteUser(id){
    //   return Api().delete(`/employees/${id}`);
    // }
};