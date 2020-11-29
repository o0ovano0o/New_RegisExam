<template>
    <div>
        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1><strong>DANH SÁCH MÔN THI KÌ HIỆN TẠI</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="/admin/home">Trang chủ</a></li>
                                    <li><a href="#">Môn Thi</a></li>
                                    <li class="active">Danh sách môn thi</li>
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
                            <div class="card-header">

                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã môn thi</th>
                                            <th>Môn thi</th>
                                            <th>Xem chi tiết</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listsubject" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{item.subjectcode}}</td>
                                            <td>{{item.subjecname}}</td>
                                            <td><a class="btn btn-success" @click="redirect(item)" role="button"><i class="fa fa-pencil" aria-hidden="true"></i>    Xem chi tiết</a></td>
                                            <td><a class="btn btn-danger"   role="button"  @click="deleteSubject(item)"><i class="fa fa-trash-o" aria-hidden="true"></i> Xóa</a></td>
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
            listsubject:null,
        }
    },
    methods:{
        redirect(item){
            this.$router.push(`/admin/showdetailsubject/${item.id}`);
        },
        async getdata(){
            try {
                const res = await API.getSubject();
                this.listsubject = res.data.data;
            } catch (error) {
                   this.$toasted.show('Đã có lỗi xảy ra', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
        },
        async deleteSubject(item){
            try {
                await API.deleteSubject(item.id);
                await this.getdata();
                this.$toasted.show('Xóa thành công', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
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
    created(){
        this.getdata();
    }
}
</script>