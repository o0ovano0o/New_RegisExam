<template>
    <div>
        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1><strong>CA THI</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="/admin/home">Trang Chủ</a></li>
                                    <li><a href="/admin/exam">Kì Thi</a></li>
                                    <li class="active">Ca Thi</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="animated fadeIn">
                <!-- Thêm ca thi -->
                <button type="button" class="btn btn-secondary mb-1" @click="addData()">
                    <i class="fa fa-plus-square"></i> Tạo ca thi mới
                </button>

                    <div class="modal-dialog modal-lg" v-if="opendialog" role="document">
                        <div class="modal-content" style="padding:15px">
                            <div class="modal-header">
                                <h5 class="modal-title" id="mediumModalLabel" style="text-align: center"><strong>{{dialog.title}}</strong></h5>
                                <button type="button" @click="closeDialog" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                    <!-- <div class="row form-group" class="autocomplete"> -->
                                    <div class="row form-group" >
                                        <div class="col col-md-3"><label for="text-input" class=" form-control-label"><strong>Mã
                                                    Học Phần</strong></label></div>
                                        <div class="col-12 col-md-9"><input type="text" id="mahocphan" v-model="classobj.subjectcode" name="mahocphan"
                                                placeholder="Mã Học Phần" class="form-control"><small
                                                class="form-text text-muted"></small></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="text-input"
                                                class=" form-control-label"><strong>Học Phần</strong></label></div>
                                        <div class="col-12 col-md-9">
                                            <input type="text" id="hocphan" v-model="classobj.subjectname"  name="hocphan" placeholder="Học Phần" class="form-control" disabled><small class="form-text text-muted"></small>

                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="text-input"
                                                class=" form-control-label"><strong>Ngày Thi</strong></label></div>
                                        <div class='col-12 col-md-9'>
                                            <div class="form-group">
                                                <div id="filterDate2">
                                                    <!-- Datepicker as text field -->
                                                    <div class="input-group date" data-date-format="dd/mm/yyyy">
                                                        <input type="date" id="date"  v-model="classobj.date"   name="date" class="form-control" placeholder="dd/mm/yyyy">
                                                        <div class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row form-group" >  <!--class="autocomplete"-->
                                        <div class="col col-md-3"><label for="text-input"
                                                class=" form-control-label"><strong>Phòng Thi</strong></label></div>
                                        <div class="col-12 col-md-9"><input  v-model="classobj.room"   type="text" id="phongmay" name="phongmay"
                                                placeholder="Phòng Thi" class="form-control"><small
                                                class="form-text text-muted"></small></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="text-input" class=" form-control-label"><strong>Số
                                                    lượng SV</strong></label></div>
                                        <div class="col-12 col-md-9"><input type="number" min=1 v-model="classobj.amount"  id="soluong" name="soluong"
                                                placeholder="Số lượng SV" class="form-control"><small
                                                class="form-text text-muted"></small></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="select" class=" form-control-label"><strong>Ca
                                                    Thi</strong></label></div>
                                        <div class="col-12 col-md-9">
                                            <select name="cathi" v-model="classobj.typeclasses" id="cathi" class="form-control">
                                                <option value="0">Chọn ca thi</option>
                                                <option value="1">Ca Thi 1</option>
                                                <option value="2">Ca Thi 2</option>
                                                <option value="3">Ca Thi 3</option>
                                                <option value="4">Ca Thi 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-2"><label for="text-input"
                                                class=" form-control-label"><strong>Giờ Bắt Đầu</strong></label></div>
                                        <div class='col-12 col-md-4'>
                                            <input type="text"  v-model="classobj.start"  id="hstart" name="hstart"
                                                placeholder="" class="form-control" readonly><small
                                                class="form-text text-muted"></small>
                                        </div>

                                        <div class="col col-md-2"><label for="text-input"
                                                class=" form-control-label"><strong>Giờ Kết Thúc</strong></label></div>
                                        <div class='col-12 col-md-4'>
                                            <input type="text"  v-model="classobj.end"  id="hstop" name="hstop"
                                                placeholder="" class="form-control" readonly><small
                                                class="form-text text-muted"></small>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"  @click="closeDialog"  data-dismiss="modal">Hủy bỏ</button>
                                        <button type="submit" class="btn btn-primary" @click="submitDialog">Xác nhận</button>
                                    </div>

                            </div>
                        </div>
                    </div>



            <div class="row" style="margin-top:15px;" >
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Danh sách ca thi </strong>
                        </div>
                        <div class="card-body">
                            <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã học phần</th>
                                        <th>Tên học phần</th>
                                        <th>Ngày thi</th>
                                        <th>Phòng thi</th>
                                        <th>Giờ bắt đầu</th>
                                        <th>Giờ kết thúc</th>
                                        <th>Số lượng sinh viên</th>
                                        <th>Mã ca thi</th>
                                        <th>Đã đăng ký</th>

                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody v-if="list!=null" >

                                    <tr v-for="(item,index) in list" :key="index">
                                        <td>{{index +1 }}</td>
                                        <td>{{item.subjectcode}}</td>
                                        <td>{{item.subjecname}}</td>
                                        <td>{{item.date}}</td>
                                        <td>{{item.room}}</td>
                                        <td>{{item.start}}</td>
                                        <td>{{item.end}}</td>
                                        <td>{{item.amount}}</td>
                                        <td>{{item.typeclasses}}</td>
                                        <td>{{item.studentregis}}</td>
                                       <td>
                                            <button type="button" class="btn btn-warning mb-1" @click="mapdata(item)">
                                            <i class="fa fa-pencil" aria-hidden="true"></i> Sửa</button>
                                        </td>
                                        <td><a  class="btn btn-danger" role="button" href="" @click="deleteclass(item)"><i class="fa fa-trash-o" aria-hidden="true"></i> Xóa</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div></div>

        </div>
        <!----->

    </div>
</template>
<script>
import API from "@/services/modules/import.services.js";
export default {
    data() {
        return {
            dialog:{
                title:'TẠO CA THI MỚI',
                isAdd:true,
                id:null
            },
            opendialog:false,
            id: this.$route.params.id,
            list: null,
            subjectname:null,
            classobj:{
                subjectcode:null,
                subjectname:null,
                date:null,
                room:null,
                amount:null,
                typeclasses:null,
                start:null,
                end:null,
            }
        }
    },
    watch: {
        "classobj.subjectcode":async function(val) {
            if(val)
            await this.getSubject(val);
        },
        "classobj.typeclasses": async function(val) {
            if(val=="1"){
                this.classobj.start = 7;
                this.classobj.end = 9;
            }
            if(val=="2"){
                this.classobj.start = 9;
                this.classobj.end = 11;
            }
            if(val=="3"){
                this.classobj.start = 1;
                this.classobj.end = 3;
            }
            if(val=="4"){
                this.classobj.start = 3;
                this.classobj.end = 5;
            }
        },
    },
    methods:{
        mapdata(item){
            this.classobj={
                 subjectcode:item.subjectcode,
                subjectname:item.subjecname,
                date:item.date,
                room:item.room,
                amount:item.amount,
                typeclasses:item.typeclasses,
                start:item.start,
                end:item.end,
            };
            this.dialog.id = item.id;
            this.dialog.isAdd= false;
            this.dialog.title='SỬA CA THI';
            this.openDialog();
        },
        async submitDialog(){
            if(this.dialog.isAdd){
                await this.postExam();
            }
            else {
                await this.putExam();
            }
        },
        async putExam(){
             try {
                const postobj = Object.assign({}, this.classobj);
                postobj.typeclasses = parseInt(postobj.typeclasses);
                await API.updateClass(this.dialog.id, postobj);
                this.closeDialog();
                await this.getClass();
            } catch (error) {
                console.log(error);
            }
        },
        addData(){
            this.dialog.title="TẠO CA THI MỚI";
            this.dialog.isAdd = true;
            this.openDialog();
        },
        async deleteclass(item){
            try {
                await API.deleteClass(item.id);
                this.$toasted.show('Đã xóa thành công', {
                    theme: "toasted-primary",
                    position: "top-right",
                    duration : 5000,
                    type: 'success'
                });
               await this.getClass();
            } catch (error) {
                 this.$toasted.show('Đã xóa thất bại', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
        },
        async postExam(){
            try {
                const postobj = Object.assign({}, this.classobj);
                postobj.typeclasses = parseInt(postobj.typeclasses);
                await API.postClass(this.id, postobj);
                this.closeDialog();
                 this.$toasted.show('Đã tạo thành công', {
                     theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
                await this.getClass();
            } catch (error) {
                 this.$toasted.show('Đã có lỗi xảy ra', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
        },
        async getSubject(subjectcode){
            try {
                const res = await API.getSubjectBysubjectcode(subjectcode);
                if(res.data.data)
                this.classobj.subjectname = res.data.data[0].subjecname;
            } catch (error) {
                console.log(error);
            }
        },
        async getListSemester(){
            const res = await API.getClassInExam(this.id);
            this.list = res.data.data;
       },

        openDialog(){
            this.opendialog = true;
        },
        closeDialog() {
            this.opendialog = false;
            this.classobj = {
                subjectcode:null,
                subjectname:null,
                date:null,
                room:null,
                amount:null,
                typeclasses:null,
                start:null,
                end:null,
            }
        },
        async getClass(){
            try {
                const res = await API.getClassInExam(this.id);
                this.list = res.data.data;
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
        await this.getClass();
    },
}
</script>
<style lang="scss" scoped>

.modal-dialog {
    position: absolute;
    top: 70px;
    z-index: 1;
    width: 600px;
    left: calc(50% - 204px);
}
@mixin fade-in {
  -webkit-animation-name: fade-in;
  animation-name: fade-in;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fade-in {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fade-in {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

$dialog-background: hsl(0, 0%, 96%);
$dialog-border: hsl(0, 0%, 94%);
$dialog-divisor: hsl(0, 0%, 78%);
$dialog-fade: hsla(100, 100%, 0%, 30%);

.dialog {
  .dialog-content {
    background-color: $dialog-background;
    border-radius: 10px;
    display: none;
    flex-direction: column !important;
    left: 50%;
    margin: 10vh auto;
    padding: 20px 20px;
    padding-right: 45px;
    position: fixed;
    transform: translate(-50%, 50%);
    width: 50%;
    z-index: 999;

    .dialog-close {
      position: absolute;
      right: 14px;
      top: 14px;
    }
  }

  .dialog-fade {
    background-color: $dialog-fade;
    content: "";
    display: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 998;
  }

  &.is-active {
    .dialog-content,
    .dialog-fade {
      @include fade-in();
      display: flex !important;
    }
  }
}

</style>