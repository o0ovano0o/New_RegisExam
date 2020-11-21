<template>
<div class="content">
    <div class="animated fadeIn " style="padding-top:0px;">
        <section class="intro-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-1 col-lg-2">

                    </div>
                    <div class="col-md-10 col-lg-8">
                        <div class="intro">
                            <div class="profile-img"><a href="04-elements.html"><img
                                        src="profile/images/profile-1-250x250.jpg" alt=""></a></div>
                            <h4><b><a href="ho-so-sinh-vien">Thông tin cá nhân</a></b></h4>
                            <ul class="information margin-tb-30 nav justify-content-center" style="margin-top: 30px;">
                                <form class="form" role="form" style="width: 500px;" >
                                    <div class="form-group row col">
                                        <div class="col-lg-6 text-right">Họ và tên</div>
                                        <!-- <label class="col-lg-6 text-center form-control-label">Họ và tên</label> -->
                                        <div class="col-lg-6 text-left">
                                        <!--    <?php if (isset($_SESSION["name_sv"])) {echo $_SESSION["name_sv"];} ?> -->
                                        </div>
                                    </div>
                                            
                                    <div class="form-group row">
                                        <div class="col-lg-6 text-right">Mã sinh viên</div>
                                        <!-- <label class="col-lg-6 text-center form-control-label">Mã sinh viên</label> -->
                                        <div class="col-lg-6 text-left">
                                        <!--    <?php if (isset($_SESSION["mssv"])) {echo $_SESSION["mssv"];} ?>    -->
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-lg-6 text-right">Ngày sinh </div>
                                        <!-- <label class="col-lg-6 text-center form-control-label">Ngày sinh</label> -->
                                        <div class="col-lg-6 text-left">
                                        <!--    <?php if (isset($_SESSION["ngaysinh"])) {echo $_SESSION["ngaysinh"];} ?>    -->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-6 text-right">Giới tính</div>
                                        <!-- <label class="col-lg-6 text-center form-control-label">Giới tính</label> -->
                                        <div class="col-lg-6 text-left">
                                        <!--    <?php if (isset($_SESSION["gioitinh"])) {echo $_SESSION["gioitinh"];} ?>    -->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-6 text-right">Quê quán</div>
                                        <!-- <label class="col-lg-6 text-center form-control-label">Quê quán</label> -->
                                        <div class="col-lg-6 text-left">
                                        <!--    <?php if (isset($_SESSION["quequan"])) {echo $_SESSION["quequan"];} ?>  -->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-6 text-right">Lớp khóa học</div>
                                        <!-- <label class="col-lg-6 text-center form-control-label">Lớp khóa học</label> -->
                                        <div class="col-lg-6 text-left">
                                        <!--    <?php if (isset($_SESSION["lopkhoahoc"])) {echo $_SESSION["lopkhoahoc"];} ?>    -->
                                        </div>
                                    </div>
                                </form>

                            </ul>

                        </div><!-- intro -->
                    </div><!-- col-sm-8 -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- intro-section -->

        <section class="btn-section section">
            <div class="container">

                <div class="row">
                    <div class="col-sm-12">
                        <div class="heading ">
                            <div class="btn btn-bg-yellow" style="width:65px;height:1px;"></div>
                            <h4><b><a href="ho-so-sinh-vien">Hồ sơ</a></b></h4>

                        </div>
                    </div>
                </div><!-- col-sm-4 -->
            </div><!-- row -->
            <div class="nav justify-content-center">

                <div class="card card-outline-secondary" style="width:450px;">
                    <div class="card-header" style="background-color: #FFA804;">
                        <h4 class="mb-0">Thay đổi mật khẩu</h4>
                    </div>
                    <div class="card-body">
                        <form class="user" method="post" action="<?php echo $formAction; ?>">
                            <div class="form-group row">
                                <div class="col-lg-5 col-form-label form-control-label">Mật khẩu cũ</div>
                                <!-- <label for="inputPasswordOld" class="col-lg-5 col-form-label form-control-label">Mật khẩu cũ</label> -->
                                <div class="col-lg-7">
                                    <input type="password" class="form-control" id="pass" required="" name="pass">
                                    <span id="checkpass"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-5 col-form-label form-control-label">Mật khẩu mới</div>
                                <!-- <label for="inputPasswordNew" class="col-lg-5 col-form-label form-control-label">Mật khẩu mới</label> -->
                                <div class="col-lg-7">
                                    <input type="password" class="form-control" id="newpass" name="newpass" required="">
                                    <span class="form-text small text-muted"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-5 col-form-label form-control-label">Nhập lại mật khẩu mới</div>
                                <!-- <label for="inputPasswordNewVerify" -->
                                    <!-- class="col-lg-5 col-form-label form-control-label">Xác thực</label> -->
                                <div class="col-lg-7">
                                    <input type="password" class="form-control" id="repass" name="repass" required="">
                                    <span id="checkrepass" class="form-text small text-muted"></span>
                                </div>
                            </div>
                            <div class="form-group">

                                <button id="submit" type="submit"
                                    style="background-color: green;color:white; margin: 0 10px 10px; padding: 12px 30px; border-radius: 5px;"
                                    class="btn btn-bg-yellow btn-sm  float-right">Xác nhận</button>
                                <button type="reset" class="btn btn-sm float-right"
                                    style="background-color: red;color: white; margin: 0 10px 10px; padding: 12px 30px; border-radius: 5px;">Hủy bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div><!-- container -->

</template>

<script>
</script>

<style>
</style>