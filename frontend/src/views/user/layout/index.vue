<template>

<div id="backtotop">
    <!-- Left Paneal -->
    <aside id="left-panel" class="left-panel text-left">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="">
                        <a href="/student/home"><i class="menu-icon fa fa-laptop"></i>Trang Chủ </a>
                    </li>
                    <li class="">
                        <a class="collapse-item  "
                            href="/student/regist-exam"> <i class="menu-icon fa fa-th-large"></i>Đăng ký môn thi</a>
                    </li>
                    <li class="">
                        <a class="collapse-item "
                            href="/student/print-exam-registration"> <i class="menu-icon fa fa-print"></i>In danh sách thi</a>
                    </li>                   
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </aside>
    <!-- /#left-panel -->
    <!-- Right Panel -->
    <div id="right-panel" class="right-panel" >
        <!-- Header-->
        <header id="header" class="header">
            <div class="top-left">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/student/home"><img src="./assets/images/logo.png" alt="Logo"></a>
                    <a class="navbar-brand hidden" href="./"><img src="./assets/images/logo2.png" alt="Logo"></a>
                    <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
                </div>
            </div>
            <div class="top-right">
                <div class="header-menu">
                    <div class="user-area dropdown float-right">
                        <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                                style="font-weight: bold; font-size: 18px;">Xin chào:
                                </span>
                            <img class="user-avatar rounded-circle" src="./assets/images/admin.jpg" alt="User Avatar">
                        </a>

                        <div class="user-menu dropdown-menu">
                            <a class="nav-link" href="/student/profile"><i class="fa fa-user"></i>Hồ sơ sinh viên</a>

                            <a class="nav-link" href="index.php?controller=Logout" data-toggle="modal" data-target="#logoutModal"><i class="fa fa-power-off"></i>Đăng xuất</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
        <!-- /#header -->
        <!-- Content -->
          <router-view/>
        <!-- /.content -->
        <div class="clearfix">

        </div>
        <!-- Footer -->
        <footer class="site-footer text-left">
            <div class="footer-inner bg-white">
                <div class="row">
                    <div class="col-sm-10">
                        Copyright &copy;
                    </div>
                    <div class="col-sm-2 text-right">
                    </div>
                </div>
            </div>
        </footer>
        <!-- /.site-footer -->
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

@import url("https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css");
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css");
    @import url("https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css");
    @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
    @import url("https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css");
    @import url("./assets/css/cs-skin-elastic.css");
    @import url("./assets/css/lib/datatable/dataTables.bootstrap.min.css");
    @import url("./assets/css/style.css");

    @import url("https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css");
    @import url("https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css");

    @import url("https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css");
    @import url("https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css");

    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');

    a{
        text-decoration: none !important;
    }

  .content {
        min-height: calc(100vh - 231px);
    }
    .autocomplete {
        position: relative;
        display: inline-block;
    }
    li .active {
        color: #e9e9e9;
        align-items: center;
    }
    input {
        border: 1px solid transparent;
        background-color: white;
        font-size: 16px;
    }

    input[type=text] {
        background-color: white;
        width: 100%;
    }


    .autocomplete-items {
        position: absolute;
        border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        z-index: 99;
        /*position the autocomplete items to be the same width as the container:*/
        top: 100%;
        left: 0;
        right: 0;
    }

    .autocomplete-items div {
        padding: 10px;
        cursor: pointer;
        background-color: #fff;
        border-bottom: 1px solid #d4d4d4;
    }

    /*when hovering an item:*/
    .autocomplete-items div:hover {
        background-color: #e9e9e9;
    }

    /*when navigating through the items using the arrow keys:*/
    .autocomplete-active {
        background-color: DodgerBlue !important;
        color: #ffffff;
    }
</style>