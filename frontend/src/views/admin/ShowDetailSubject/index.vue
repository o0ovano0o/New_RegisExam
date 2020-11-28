<template>
    <div>
        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1><strong>{{list[0].subjecname}}</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="/admin/home">Trang chủ</a></li>
                                    <li><a href="#">Môn Thi</a></li>
                                    <li><a href="#">{{list[0].subjecname}}</a></li>
                                    <li class="active">{{list[0].subjectcode}}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="animated fadeIn">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">


                            <div class="card-body">
                                <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã SV</th>
                                            <th>Họ và tên</th>
                                            <th>Ngày sinh</th>
                                            <th>Lớp khóa học</th>
                                            <th>Trạng thái</th>
                                            <th>Sửa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr  v-for="(item, index) in list" :key="index">
                                            <td>{{index +1}}</td>
                                            <td>{{item.studentcode}}</td>
                                            <td>{{item.fullname}}</td>
                                            <td>{{item.datebirth}}</td>
                                            <td>{{item.class}}</td>
                                            <td>{{item.status==1 ? 'Được thi' : 'Cấm thi'}}</td>
                                            <td><button @click="updateStatus(item)" class="btn btn-primary">Chuyển trạng thái</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- .animated -->
        </div><!-- .content -->
    </div>
</template>
<script>
import API from '@/services/modules/import.services.js';
export default {
    data() {
        return {
            id:null,
            list:[

            ]
        }
    },
    methods:{
        async getdata(){
            try {
                const res = await API.getDetailSubject(this.id);
                this.list = await res.data.list;
            } catch (error) {
                 this.$toasted.show('Đã có lỗi xảy ra', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
        },
        async updateStatus(item){
            try {
                let status = item.status == 1 ? 0 : 1;
                const res = await API.addSubjectStudent({
                    studentcode:item.studentcode,
                    subjectcode: item.subjectcode,
                    subjectname:item.subjecname
                },status);
                 this.$toasted.show('Cập nhật thành công', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
                this.getdata();
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
        this.id = this.$route.params.id;
        await this.getdata();
    },
}
</script>