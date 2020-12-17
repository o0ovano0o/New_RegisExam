<template>
    <div>
        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                    <div class="page-header float-left">
                            <div class="page-title">
                                <h1><strong>SINH VIÊN</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="/admin/home">Trang Chủ</a></li>
                                    <li class="active">Sinh viên</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="animated fadeIn">
                <!-- <div class="card">
                            <div class="row form-group" style="margin-left: 0px;margin-right: 0px;margin-bottom: 5px;margin-top: 5px;">
                                <div class="col col-md-3"><label for="file-input" class=" form-control-label">Thêm danh sách sinh viên</label></div>
                                <div class="col-12 col-md-8"><input type="file" id="file-input" name="file-input" class="form-control-file"></div>
                                <button type="submit" class="btn btn-primary btn-sm ">
                                    <i class="fa fa-dot-circle-o"></i> Submit
                                </button>
                            </div>
                        </div> -->
                <!-- Thêm kì thi -->
                <!-- !Thêm kì thi -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Danh sách tài khoản sinh viên</strong>
                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã Sinh Viên</th>
                                            <th>Họ và tên</th>
                                            <th>Ngày sinh</th>
                                            <th>Giới tính</th>
                                            <th>Quê quán</th>
                                            <th>Lớp khóa học</th>
                                            <th>Khóa tài khoản</th>
                                            <!-- <th>Mật khẩu</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in liststudent" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{item.studentcode}}</td>
                                            <td>{{item.fullname}} </td>
                                            <td>{{item.datebirth}}</td>
                                            <td>{{item.gender}}</td>
                                            <td>{{item.hometown}}</td>
                                            <td>{{item.class}}</td>
                                            <td><a class="btn btn-danger"   role="button"  @click="deleteStudent(item)"><i class="fa fa-trash-o" aria-hidden="true"></i> Khóa</a></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- .animated -->
        </div><!-- .content -->
        <div class="clearfix"></div>
    </div>
</template>

<script>
import API from "@/services/modules/account.services.js";
// import layout from '@/views/layout/index'
export default {
  data() {
      return {
            liststudent:null,
      }
  },
  methods:{
        async getListStudent(){
            try {
                const res = await API.getListStudent();
                this.liststudent = res.data.data;
            } catch (error) {
                   this.$toasted.show('Đã có lỗi xảy ra', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
       },
       async deleteStudent(item){
            try {
                await API.deleteStudent(item.id);
                this.$toasted.show('Xóa thành công', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
                await API.getListStudent();

            } catch (error) {
                this.$toasted.show('Đã có lỗi xảy ra', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
        }
  },
  async created() {
      console.log(123);
         await this.getListStudent();
  },

}
</script>
