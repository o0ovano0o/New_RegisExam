/* eslint-disable new-cap */
import Api from "@/services";
export default {
  logInUser(user) {
    return Api().post("/admin/login", user);
  },
  registerUser(user) {
    return Api().post("/customer/register", user);
  },
  getMe(){
    return Api().get("/entry");
  },
  logOut(){
    return Api().get("/logout");
  },
  changepass(old_password, new_password){
    return Api().patch("/change-password",{ old_password, new_password });
  },
  changeProfile(userInfo){
    return Api().patch("/entry",{...userInfo });
  },
  getUserList(){
    return Api().get("/admin/customers");
  },
  getAdminList(){
    return Api().get("/admin/employees");
  },
  deleteAdmin(id){
    return Api().delete(`/employees/${id}`);
  },
  createAdmin(info){
    return Api().post('/admin/employee', {...info});
  },
  deleteUser(id){
    return Api().delete(`/employees/${id}`);
  }
};
