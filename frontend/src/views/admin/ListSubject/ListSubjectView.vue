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
                                            <!-- <td><?php echo $i;?></td>
                                            <td><?php echo $item->StudentID ?></td>
                                            <td><?php echo $item->StudentName ?></td>
                                            <td><?php echo $item->DateOfBirth ?></td>
                                            <td><?php echo $item->Gender ?></td>
                                            <td><?php echo $item->HomeTown ?></td>
                                            <td><?php echo $item->Class ?></td> -->
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr id="">     
                                            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
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