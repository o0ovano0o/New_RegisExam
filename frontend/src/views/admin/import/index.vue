<template>
<div>
<div class="breadcrumbs">
    <div class="breadcrumbs-inner">
        <div class="row m-0">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1><strong>TÀI KHOẢN SINH VIÊN</strong></h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Nhập liệu</a></li>
                            <li class="active">Thêm tài khoản sinh viên</li>
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
                <strong class="card-title">Nhập danh sách sinh viên được cấp tài khoản</strong>
            </div>
            <div class="card-body">

                    <div class="custom-file">
                        <input name="file" type="file" class="custom-file-input" id="validatedCustomFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" required>
                        <label class="custom-file-label" for="validatedCustomFile">Chọn file excel</label>
                        <div class="invalid-feedback">Tệp không hợp lệ</div>
                    </div>
                    <button style="margin-top:10px;" @click="getData" name="btnGui" class="btn btn-primary">Nhập danh sách</button>
                    <div class="modal fade bd-example-modal-lg" data-backdrop="static" data-keyboard="false" tabindex="-1">
                        <div class="modal-dialog modal-sm">
                            <div class="lds-hourglass"></div>
                        </div>
                    </div>

            </div>
        </div>
    </div>
    <!-- .animated -->
</div>
</div>
</template>
<script>
import readXlsxFile from 'read-excel-file'
export default {
  methods:{
    getData(){
      var input = document.getElementById('validatedCustomFile');
      readXlsxFile(input.files[0]).then(async (rows) => {
        rows = await rows.map(element =>
            element.map(item=>{
              if(typeof item.getMonth == 'function' || typeof item.getMonth == 'function'){
               return item.toISOString().split('T')[0].split('-').reverse().join('-');
              }
              return item;
              })

          );
        console.log(JSON.stringify(rows));

      })
    }
  }
}
</script>
<style scoped>

</style>