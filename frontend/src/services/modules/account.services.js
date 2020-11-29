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
    updateExam(id, data){
        return Api().put(`/api/admin/exam/${id}`, data);
    },
    getListPrint(data) {
        return Api().post("/api/admin/print_room", data);
    }, 
    getProfileStudent(){
        return Api().get(`/api/admin/student/getme`);
    },
    repass(data){
        return Api.put("/api/student/password", data);
    }
};