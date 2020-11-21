<template>
  <div>
    <div class="breadcrumbs">      
      <div class="breadcrumbs-inner">
          <div class="row m-0">
              <div class="col-sm-4">
                  <div class="page-header float-left">
                      <div class="page-title">
                          <h1><strong>TRANG CHỦ</strong></h1>
                      </div>
                  </div>
              </div>
              <div class="col-sm-8">
                  <div class="page-header float-right">
                      <div class="page-title">
                          <ol class="breadcrumb text-right">
                              <li class=""><a href="#">Trang chủ</a></li>
                          </ol>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div class="content" style="height: calc(100vh - 266px);">
    <!-- Animated -->
      <div class="animated fadeIn">
          <div class="row">
              <div class="col-sm-6 col-lg-3">
                  <div class="card text-white bg-flat-color-1">
                      <div class="card-body">
                          <div class="card-left pt-1 float-left">
                              <h3 class="mb-0 fw-r">
                                  <!-- <span class="currency float-left mr-1">$</span> -->
                                  <span class="count">12</span>
                              </h3>
                              <p class="text-light mt-1 m-0">Kì Thi</p>
                          </div><!-- /.card-left -->
                          <div class="card-right float-right text-right">
                              <i class="icon fade-5 icon-lg pe-7s-display2"></i>
                          </div><!-- /.card-right -->
                      </div>
                  </div>
              </div>

              <div class="col-sm-6 col-lg-3">
                  <div class="card text-white bg-flat-color-3">
                      <div class="card-body">
                          <div class="card-left pt-1 float-left">
                              <h3 class="mb-0 fw-r">
                                  <span class="count">500</span>
                              </h3>
                              <p class="text-light mt-1 m-0">Sinh viên</p>
                          </div><!-- /.card-left -->
                          <div class="card-right float-right text-right">
                              <i class="icon fade-5 icon-lg pe-7s-users"></i>
                          </div><!-- /.card-right -->
                      </div>
                  </div>
              </div>

              <div class="col-sm-6 col-lg-3">
                  <div class="card text-white bg-flat-color-2">
                      <div class="card-body">
                          <div class="card-left pt-1 float-left">
                              <h3 class="mb-0 fw-r">
                                  <span class="count">20</span>
                              </h3>
                              <p class="text-light mt-1 m-0">Admin</p>
                          </div><!-- /.card-left -->
                          <div class="card-right float-right text-right">
                              <i class="icon fade-5 icon-lg pe-7s-config"></i>
                          </div><!-- /.card-right -->
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                  <div class="card text-white bg-flat-color-5">
                      <div class="card-body">
                          <div class="card-left pt-1 float-left">
                              <h3 class="mb-0 fw-r">
                                  <span class="count">30</span><span>  /  </span> <span class="count">100</span>
                              </h3>
                              <p class="text-light mt-1 m-0">Cấm Thi / Được Thi</p>
                          </div><!-- /.card-left -->
                          <div class="card-right float-right text-right">
                              <i class="icon fade-5 icon-lg pe-7s-study"></i>
                          </div><!-- /.card-right -->
                      </div>
                  </div>
              </div>
          </div>
          <hr class="hr-normal">         
          <div class="row" style="margin-top: 20px;">
            
          </div>

      </div>
      <!-- .animated -->
    </div>
  </div>
</template>
<script>
// import layout from '@/views/layout/index'
export default {
  components:{

  }

}
</script>
<style lang="scss" scoped>
  .bg-flat-color-1 {
  background: #00c292; }

  .bg-flat-color-2 {
    background: #ab8ce4; }

  .bg-flat-color-3 {
    background: #03a9f3; }

  .bg-flat-color-4 {
    background: #fb9678; }

  .bg-flat-color-5 {
    background: #66bb6a; }

  .bg-flat-color-6 {
    background: #5c6bc0; }

</style>