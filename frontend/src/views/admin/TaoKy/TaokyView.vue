<template>
<div class="breadcrumbs">
    <div class="breadcrumbs-inner">
        <div class="row m-0">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1><strong>KÌ THI</strong></h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="/admin/home">Trang chủ</a></li>
                            <li class="active">Kì Thi</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="">
          <div v-if="opendialog" class="modal-dialog modal-lg" role="document" style="    position: absolute;
    top: 175px;
    z-index: 1;
    width: 600px;
    left: calc(50% - 204px);">
                    <div class="modal-content" style="padding: 15px;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="mediumModalLabel" style="text-align: center"><strong>Tạo Kì Thi
                                    Mới</strong></h5>
                            <button type="button" @click="closeDialog" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- <form method="post"> -->
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Tên Kì Thi</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="tenkithi" name="tenkithi" v-model="exam.examname"
                                            placeholder="Tên Kì Thi" class="form-control"><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Năm Tổ Chức</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="namtochuc" name="namtochuc" v-model="exam.examyear"
                                            placeholder="yyyy" class="form-control"><small
                                            class="form-text text-muted"></small>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="select" class=" form-control-label"><strong>Học
                                                Kì</strong></label></div>
                                    <div class="col-12 col-md-9">
                                        <select name="hocki" id="hocki" class="form-control" v-model="exam.semester">
                                            <option value="0">Chọn học kì</option>
                                            <option value="Học kì I">Học kì I</option>
                                            <option value="Học kì II">Học kì II</option>
                                            <option value="Học kì phụ">Học kì phụ</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Ghi Chú</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="ghichu" name="ghichu" v-model="exam.note"
                                            placeholder="Ghi Chú" class="form-control"><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeDialog">Hủy bỏ</button>
                                    <button type="submit" class="btn btn-primary" @click="submit">Xác nhận</button>
                                </div>
                            <!-- </form> -->
                        </div>
                    </div>
                </div>

        <!-- Animated -->
        <div class="animated fadeIn">
            <!-- Thêm kì thi -->
            <button type="button" class="btn btn-secondary mb-1" style="margin-top:15px;" @click="openDialog" data-toggle="modal" data-target="#mediumModal">
                <i class="fa fa-plus-square"></i> Tạo Kì Thi Mới
            </button>
        </div>
    </div>
    <div class="row content" style="margin-left:-15px; margin-right:-20px; width:1220px" >
        <div class="flip"  style="width: 380px;" v-for="(item, index) in listexam" :key="index">
            <div class="front bground" style="opacity:0.4;">
                <h1 class="text-shadow">{{item.semester}}</h1>
            </div>
            <div class="back">
                <p v-if="item.status==1">Kỳ hiện tại</p>
                <h2>{{item.examname}}</h2>
                <span>{{item.examyear}}</span>
                <p style="margin-left:5px;">{{item.note}}</p>
                <a class="btn btn-success"  role="button"  @click="redirect(item)">Xem chi tiết</a>
                <a class="btn btn-danger"  style="margin-left:5px; " role="button" href="" @click="deleteExam(item)">Xóa</a>
                <a class="btn btn-success"  style="margin-left:5px; " v-if="item.status!=1" role="button" @click="activeExam(item)">Chọn kỳ hiện tại</a>
            </div>
        </div>
    </div>


</div>

</template>
<script>
import API from "@/services/modules/account.services.js";

export default {
    data() {
        return {
            opendialog:false,
            listexam:null,
            exam:{
                examname:'',
                examyear:'',
                semester:'',
                note:''
            }
        }
    },
    methods:{
        async deleteExam(item){
            try {
                await API.deleteExam(item.id);
                await this.getListExam();
                  this.$toasted.show('Xóa kỳ thi thành công', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
            } catch (error) {
                this.$toasted.show('Xóa kỳ thi thất bại', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
        },
        async activeExam(item){
            const data = Object.assign({}, item);
            delete data.id;
            data.status = 1;
            try {
                await API.updateExam(item.id, data);
                await this.getListExam();
                  this.$toasted.show('Cập nhật thành công', {
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
        },
        redirect(item){
            this.$router.push(`/admin/semester/${item.id}`);
        },
        async getListExam(){
            try {
                const res = await API.getListExam();
                this.listexam = res.data.data;
            } catch (error) {
                   this.$toasted.show('Đã có lỗi xảy ra', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
            }
       },
       async submit(){
            try {
                const res = await API.importExam(this.exam);
                if(res.data.success){
                    await this.getListExam();
                    this.closeDialog();
                    this.$toasted.show('Thêm mới thành công', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'success'
                    });
                }
            } catch (error) {
                await this.getListExam();
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
        }
    },
    watch: {
        },
    async created() {
      console.log(123);
         await this.getListExam();
  },
}
</script>
<style lang="scss" scoped>
  .bground {
   background-image: url("https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb") !important
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