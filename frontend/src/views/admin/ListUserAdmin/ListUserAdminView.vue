<template>
    <div>
        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1><strong>ADMIN</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="/admin/home">Trang Chủ</a></li>
                                    <li class="active">Tài khoản Admin</li>
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
                <button type="button" class="btn btn-secondary mb-1" @click="openDialog">
                    <i class="fa fa-plus-square"></i> Tạo Tài Khoản Admin Mới
                </button>
                <br>
                    <div v-if="opendialog" class="modal-dialog modal-lg" role="document">
                        <div class="modal-content" style="padding:15px;">
                            <div class="modal-header">
                                <h5 class="modal-title" id="mediumModalLabel" style="text-align: center"><strong>Tạo Tài Khoản Admin Mới</strong></h5>
                                <button type="button" @click="closeDialog" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="post" action="<?php echo $formAction; ?>">
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="text-input" class=" form-control-label"><strong>Họ và Tên</strong></label></div>
                                        <div class="col-12 col-md-9"><input type="text" id="name" name="name"
                                                placeholder="Họ và Tên" class="form-control"><small
                                                class="form-text text-muted"></small></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="text-input" class=" form-control-label"><strong>User Name</strong></label></div>
                                        <div class="col-12 col-md-9"><input type="text" id="user" name="user"
                                                placeholder="User Name" class="form-control"><small
                                                class="form-text text-muted"></small></div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col col-md-3"><label for="text-input"
                                                class=" form-control-label"><strong>Password</strong></label></div>
                                        <div class="col-12 col-md-9"><input type="password" id="password" name="password"
                                                placeholder="Password" class="form-control"><small
                                                class="form-text text-muted"></small></div>
                                    </div>


                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeDialog">Hủy bỏ</button>
                                        <button type="submit" class="btn btn-primary">Xác nhận</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                <br>
                <!-- !Thêm ca thi -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Danh sách tài khoản Admin </strong>
                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Họ và tên</th>
                                            <th>Username</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="<?php echo $item->id; ?>">
                                            <td>1</td>
                                            <td>Nguyễn Thị Vân Anh</td>
                                            <td>vvan</td>
                                            <td><a class="btn btn-danger" role="button" href="index.php?area=Admin&controller=UserAdmin&action=deleteUserAdmin&id=<?php echo $item->id; ?>"><i class="fa fa-trash-o" aria-hidden="true"></i> Xóa</a></td>
                                        </tr>
                                        <tr id="<?php echo $item->id; ?>">
                                            <td>2</td>
                                            <td>Nguyễn Thị Vân Anh</td>
                                            <td>vvan</td>
                                            <td><a class="btn btn-danger" role="button" href="index.php?area=Admin&controller=UserAdmin&action=deleteUserAdmin&id=<?php echo $item->id; ?>"><i class="fa fa-trash-o" aria-hidden="true"></i> Xóa</a></td>
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
export default {
    data() {
        return {
            opendialog:false,
        }
    },
    methods:{
        openDialog(){
            this.opendialog = true;
        },
        closeDialog() {
            this.opendialog = false;
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