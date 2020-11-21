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
    <div class="content">
        <!-- Animated -->
        <div class="animated fadeIn">
            <!-- Thêm kì thi -->
            <button type="button" class="btn btn-secondary mb-1" data-toggle="modal" data-target="#mediumModal">
                <i class="fa fa-plus-square"></i> Tạo Kì Thi Mới
            </button>
            <div class="modal fade" id="mediumModal" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="mediumModalLabel" style="text-align: center"><strong>Tạo Kì Thi
                                    Mới</strong></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" action="<?php echo $formAction ?>">
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Tên Kì Thi</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="tenkithi" name="tenkithi"
                                            placeholder="Tên Kì Thi" class="form-control"><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="text-input"
                                            class=" form-control-label"><strong>Năm Tổ Chức</strong></label></div>
                                    <div class="col-12 col-md-9"><input type="text" id="namtochuc" name="namtochuc"
                                            placeholder="yyyy" class="form-control"><small
                                            class="form-text text-muted"></small>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3"><label for="select" class=" form-control-label"><strong>Học
                                                Kì</strong></label></div>
                                    <div class="col-12 col-md-9">
                                        <select name="hocki" id="hocki" class="form-control">
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
                                    <div class="col-12 col-md-9"><input type="text" id="ghichu" name="ghichu"
                                            placeholder="Ghi Chú" class="form-control"><small
                                            class="form-text text-muted"></small></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
                                    <button type="submit" class="btn btn-primary">Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="flip" style="width: 388px;">
            <div class="front bground" style="opacity:0.4;">
                <h1 class="text-shadow">Học kỳ I - 2019</h1>
            </div>
            <div class="back">
                <h2>Học kỳ I - 2020</h2>
                <p>Năm I</p>
                <p style="margin-left:5px;">Active</p>
                <a class="btn btn-success"  role="button"  href="">Xem chi tiết</a>
                <a class="btn btn-danger"  style="margin-left:5px;" role="button" href="" >Xóa</a>
                <a class="btn btn-success"  style="margin-left:5px" role="button" href="">Chọn kỳ hiện tại</a>
            </div>
        </div>
        <div class="flip" style="width: 388px;">
            <div class="front bground" style="opacity:0.4;">
                <h1 class="text-shadow">Học kỳ II - 2019</h1>
            </div>
            <div class="back">
                <h2>Học kỳ I - 2020</h2>
                <p>Năm I</p>
                <p style="margin-left:5px;">Active</p>
                <a class="btn btn-success"  role="button"  href="">Xem chi tiết</a>
                <a class="btn btn-danger"  style="margin-left:5px" role="button" href="" >Xóa</a>
                <a class="btn btn-success"  style="margin-left:5px" role="button" href="">Chọn kỳ hiện tại</a>
            </div>
        </div>
        <div class="flip" style="width: 388px;">
            <div class="front bground" style="opacity:0.4;">
                <h1 class="text-shadow">Học kỳ I - 2020</h1>
            </div>
            <div class="back">
                <h2>Học kỳ I - 2020</h2>
                <p>Năm I</p>
                <p style="margin-left:5px;">Active</p>
                <a class="btn btn-success"  role="button"  href="">Xem chi tiết</a>
                <a class="btn btn-danger"  style="margin-left:5px" role="button" href="" >Xóa</a>
                <a class="btn btn-success"  style="margin-left:5px" role="button" href="">Chọn kỳ hiện tại</a>
            </div>
        </div>
    </div>


</div>

</template>
<style lang="scss" scoped>
  .bground {
   background-image: url("https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb") !important
  }

</style>