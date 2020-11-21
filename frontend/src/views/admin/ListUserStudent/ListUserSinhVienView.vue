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
                                            <!-- <th>Mật khẩu</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- <?php $i=1; ?>
                                        <?php foreach ($data as $item) : ?> -->
                                        <tr id="<?php echo $item->id; ?>">                                            
                                            <td>1</td>
                                            <td>17020568</td>
                                            <td>Đỗ Minh Anh </td>
                                            <td>09/02/1999</td>
                                            <td>Nữ</td>
                                            <td>Thái Bình</td>
                                            <td>K62-CK</td>
                                        </tr>
                                        <tr id="<?php echo $item->id; ?>">                                            
                                            <td>2</td>
                                            <td>17020568</td>
                                            <td>Đỗ Minh Anh </td>
                                            <td>09/02/1999</td>
                                            <td>Nữ</td>
                                            <td>Thái Bình</td>
                                            <td>K62-CK</td>
                                        </tr>
                                        <tr id="<?php echo $item->id; ?>">                                            
                                            <td>3</td>
                                            <td>17020568</td>
                                            <td>Đỗ Minh Anh </td>
                                            <td>09/02/1999</td>
                                            <td>Nữ</td>
                                            <td>Thái Bình</td>
                                            <td>K62-CK</td>
                                        </tr>
                                        <!-- <?php $i++; ?>
                                        <?php endforeach; ?> -->
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