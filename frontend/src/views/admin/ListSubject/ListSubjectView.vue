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
                                        <tr id="<?php echo $item->id; ?>">
                                            <td>1</td>
                                            <td>INT2020 01</td>
                                            <td>Toán cao cấp</td>
                                            <td><a class="btn btn-success"  role="button"   href=""><i class="fa fa-pencil" aria-hidden="true"></i>    Xem chi tiết</a></td>
                                            <td><a class="btn btn-danger"   role="button"   href=""><i class="fa fa-trash-o" aria-hidden="true"></i> Xóa</a></td>     
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
