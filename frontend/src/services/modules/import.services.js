/* eslint-disable new-cap */
import Api from "@/services";
export default {
  importStudent(data) {
    return Api().post("/api/admin/student/import", { datarow: data });
  },
  importStudentSubject(data, status) {
    return Api().post(`/api/admin/listsubject/import/${status}`, { datarow: data });
  },
  getSubject(){
    return Api().get('/api/admin/subjects');
  },
  deleteSubject(id){
    return Api().delete(`/api/admin/subject/${id}`);
  },
  getDetailSubject(id){
    return Api().get(`/api/admin/listsubject/${id}`);
  },
  addSubjectStudent(data, status) {
    return Api().post(`/api/admin/listsubject/${status}`,data );
  },
  getClassInExam(id){
    return Api().get(`/api/admin/classess/${id}`);
  },
  updateStatusListSubject(id, status){
    return Api().put(`/api/admin/listsubject/${id}/${status}`);
  },

};
