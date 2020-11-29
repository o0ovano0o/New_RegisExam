<template>
    <div>
        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1><strong>SINH VIÊN BỊ CẤM THI</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="/admin/home">Trang chủ</a></li>
                                    <li><a href="#">Nhập liệu</a></li>
                                    <li class="active">Thêm tài khoản sinh viên bị cấm thi</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- Animated -->
            <div class="animated fadeIn">

                <div class="card">
                    <div class="card-header" style="text-align: center">
                        <strong class="card-title">Nhập danh sách sinh viên bị cấm thi</strong>
                    </div>
                    <div class="card-body">

                            <div class="custom-file">
                                <input name="file" type="file" class="custom-file-input" id="validatedCustomFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" required>
                                <label class="custom-file-label" for="validatedCustomFile">Chọn file excel</label>
                                <div class="invalid-feedback">Tệp không hợp lệ</div>
                            </div>
                             <button style="margin-top:10px;" @click="getData()" name="btnGui" class="btn btn-primary">Nhập danh sách
                            </button>

                    </div>
                </div>
            </div>
            <!-- .animated -->
            <button type="button" class="btn btn-secondary mb-1" @click="openDialog">
                    <i class="fa fa-plus-square"></i> Thêm sinh viên cấm thi
                </button>

                <div class="modal-dialog modal-lg" v-if="opendialog" role="document">
                    <div class="modal-content" style="padding:15px;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="mediumModalLabel" style="text-align: center"><strong>Thêm sinh viên</strong></h5>
                            <button type="button" class="close" @click="closeDialog" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Mã sinh viên</strong></label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="hocphan" name="msv" placeholder="Mã sinh viên" class="form-control" v-model="student.studentcode" required><small class="form-text text-muted"></small>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Tên sinh viên</strong></label></div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="hocphan" name="fullname" placeholder="Họ và tên sinh viên" class="form-control" required><small class="form-text text-muted"></small>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Ngày sinh</strong></label></div>
                                    <div class='col-12 col-md-9'>
                                        <div class="form-group">
                                            <div id="filterDate2">

                                                <!-- Datepicker as text field -->
                                                <div class="input-group date" data-date-format="dd/mm/yyyy">
                                                    <input type="date" id="date" name="date" class="form-control" placeholder="dd/mm/yyyy">
                                                    <div class="input-group-addon">
                                                        <span class="fa fa-calendar"></span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Lớp học</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="phongmay" name="classes"
                                            placeholder="Lớp học" class="form-control" required><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label"><strong>Mã môn học</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="soluong" name="SubjectCode" v-model="student.subjectcode"
                                            placeholder="Mã môn học" class="form-control" required><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input" class=" form-control-label"><strong>Tên môn học</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="soluong" name="SubjectName" v-model="student.subjectname"
                                            placeholder="Tên môn học" class="form-control" required><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" @click="closeDialog" data-dismiss="modal">Hủy bỏ</button>
                                    <button type="submit" class="btn btn-primary" @click="submit">Xác nhận</button>
                                </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</template>
<script>
import readXlsxFile from 'read-excel-file';
import API from '@/services/modules/import.services.js';
export default {
    data() {
        return {
            opendialog:false,
            student:{
                studentcode:"",
                subjectcode:"",
                subjectname:""
            }
        }
    },
    methods:{
        async submit(){
            try {
                const res = await API.importNotEligibleStudent(this.student);
                if(res.data.success){                    
                    this.closeDialog();
                    this.$toasted.show('Thêm mới thành công', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
                }
            } catch (error) {
                this.$toasted.show('Thêm mới thất bại', {
                    theme: "toasted-primary",
                    position: "top-right",
                    duration : 5000,
                    type: 'error'
                });
            }
        },
        openDialog(){
            this.opendialog = true;
        },
        closeDialog() {
            this.opendialog = false;
        },
         getData(){
      var input = document.getElementById('validatedCustomFile');
      readXlsxFile(input.files[0]).then(async (rows) => {
        rows = await rows.map(element =>
            element.map(item=>{
              if(typeof item.getMonth == 'function' || typeof item.getMonth == 'function'){
               return item.toISOString()
               .split('T')[0].split('-').reverse().join('-');
              }
              return item;
              })

          );
        console.log(rows);
        try {
            const res = await API.importStudentSubject(rows, 0);
            if(res.data.success){
                this.$toasted.show('Nhập liệu thành công', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'success'
                        });
            }
        } catch (error) {
            this.$toasted.show('Nhập liệu thất bại', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
        }
      });
    }
    }
}
</script>
<style lang="scss" scoped>

.modal-dialog {
    position: absolute;
    top: 90px;
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