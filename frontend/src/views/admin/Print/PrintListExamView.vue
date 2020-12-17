<template>
  <div>
    <div class="breadcrumbs">
      <div class="breadcrumbs-inner">
        <div class="row m-0">
          <div class="col-sm-4">
            <div class="page-header float-left">
              <div class="page-title">
                <h1><strong>IN DANH SÁCH PHÒNG THI</strong></h1>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="page-header float-right">
              <div class="page-title">
                <ol class="breadcrumb text-right">
                  <li><a href="/admin/home">Trang chủ</a></li>
                  <li class="active">In Danh Sách Phòng Thi</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="animated fadeIn">
        <div class="container-fluid">
          <div class="row justify-content-md-center">
            <div class="col-md-7">
              <label class="sr-only" for="mahocphan"></label>
              <div class="input-group ">
                <div class="input-group-prepend">
                  <div class="input-group-text">Nhập mã học phần</div>
                </div>
                <input
                  id="mahocphan"
                  class="form-control"
                  type="text"
                  name="mahocphan"
                  v-model="item.subjectcode"
                  placeholder="Mã học phần"
                  required
                />
              </div>
            </div>
            <div class="col-md-3">
              <select
                name="cathi"
                id="cathi"
                class="custom-select"
                v-model="item.typeclasses"
              >
                <option value="" selected>Chọn ca thi</option>
                <option value="1">Ca 1</option>
                <option value="2">Ca 2</option>
                <option value="3">Ca 3</option>
                <option value="4">Ca 4</option>
              </select>
            </div>
            <div class="col-md-2">
              <button
                class="btn btn-primary"
                type="submit"
                id="button1"
                @click="getListPrint"
              >
                Xác nhận
              </button>
            </div>
          </div>
          <br />
          <div class="d-inline-block">
            <button
              name="btm"
              class="btn btn-success btn-icon-split "
              v-on:click="exportHTML"
            >
              <span class="icon text-white-50">
                <i class="fas fa-file-word"></i>
              </span>
              <span class="text">Xuất danh sách phòng</span>
            </button>
          </div>
          <div class="d-inline-block">
            <button
              href="#"
              class="btn btn-secondary btn-icon-split"
              v-on:click="printHTML"
            >
              <span class="icon text-white-50">
                <i class="fa fa-print"></i>
              </span>
              <span class="text">In danh sách phòng</span>
            </button>
          </div>
          <div style="height:10px"></div>
          <div class="row justify-content-md-center tablein">
            <div
              id="printableTableAdmin"
              style="border: 1px solid; padding: 5px; border-radius: 4px; background-color: #fff;"
            >
              <table
                style="width: 100%; border: none; border-collapse: collapse; color: black;"
              >
                <tbody>
                  <tr>
                    <td
                      style="width: 40%; text-align: center; vertical-align: top;"
                    >
                      <p
                        style="text-transform: uppercase; font-weight: normal; margin: 0; padding: 0; font-size: 12pt;font-weight:bold;"
                      >
                        ĐẠI HỌC QUỐC GIA HÀ NỘI
                      </p>
                      <p
                        style="text-transform:uppercase; margin: 0; padding: 0; font-size:12pt; font-weight:bold;"
                      >
                        TRƯỜNG ĐẠI HỌC CÔNG NGHỆ
                      </p>
                    </td>
                    <td
                      style="width: 60%; text-align: center; vertical-align: top;"
                    >
                      <p
                        style="text-transform: uppercase; font-weight: bold; margin: 0; padding: 0; font-size: 12pt;"
                      >
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </p>
                      <p style="margin: 0; padding: 0; font-weight: bold;">
                        Độc lập - Tự do - Hạnh phúc
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h1
                style="text-align: center; text-transform: uppercase; font-weight: bold; font-size: 14pt; margin: 30px 0 0 0; padding: 0; color: black;"
                v-for="(item1, index1) in listprint"
                :key="index1"
              >
                DANH SÁCH THI MÔN {{ item1.subjecname }}
              </h1>
              <p
                style="text-align: center; font-weight: bold; margin: 0; padding: 0; font-size: 14pt; color: black;"
              ></p>
              <table
                style="width: 100%; border: none; border-collapse: collapse; margin-top: 30px; color: black;"
              >
                <tbody></tbody>
              </table>
              <table
                class="tableAdmin"
                style="border: 1px solid #000; width: 100%; border-collapse:collapse; color: black;"
              >
                <thead>
                  <tr style="text-align: center;">
                    <th style="width: 50px; border: 1px solid;">STT</th>
                    <th style="width: 200px; border: 1px solid;">Họ và tên</th>
                    <th style="width: 150px; border: 1px solid;">
                      Mã sinh viên
                    </th>
                    <th style="width: 150px; border: 1px solid;">Ngày sinh</th>
                    <th style="width: 100px; border: 1px solid;">Chữ ký</th>
                    <th style="width: 100px; border: 1px solid;">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                  <tr
                    style="text-align: center;"
                    v-for="(item, index) in listprint"
                    :key="index"
                  >
                    <td style="width: 50px; border: 1px solid;">
                      {{ index + 1 }}
                    </td>
                    <td style="width: 200px; border: 1px solid;">
                      {{ item.fullname }}
                    </td>
                    <td style="width: 150px; border: 1px solid;">
                      {{ item.studentcode }}
                    </td>
                    <td style="width: 150px; border: 1px solid;">
                      {{ item.datebirth }}
                    </td>
                    <td style="width: 100px; border: 1px solid;"></td>
                    <td style="width: 100px; border: 1px solid;"></td>
                  </tr>
                </tbody>
              </table>
              <table
                style="width: 100%; border: none; border-collapse: collapse; margin-top: 30px; color: black;"
              >
                <tbody>
                  <tr>
                    <td
                      style="width: 50%; vertical-align: top; text-align: center;"
                    >
                      <p
                        style="font-weight: bold; margin: 0; padding: 0; font-size: 12pt; text-transform:uppercase;"
                      >
                        Cán bộ coi thi
                      </p>
                      <p
                        style="margin: 0; padding: 0; font-size: 11pt; font-style: italic;"
                      >
                        (Ký và ghi rõ họ tên)
                      </p>
                    </td>
                    <td
                      style="width: 50%; text-align: center; vertical-align: top; "
                    >
                      <p style="font-size: 12pt; margin:0; padding:0;">
                        Hà Nội, ngày ..... tháng ..... năm 2020
                      </p>
                      <p
                        style="font-weight: bold; margin: 0; padding: 0; text-transform: uppercase; font-size: 12pt;"
                      >
                        XÁC NHẬN CỦA PHÒNG ĐÀO TẠO
                      </p>
                      <p style="font-weight: bold; margin-top: 80px;">&nbsp;</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <iframe
                name="print_frame"
                width="0"
                height="0"
                frameborder="0"
                src="about:blank"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/services/modules/account.services.js'
export default {
  data () {
    return {
      listprint: null,
      item: {
        typeclasses: 1,
        subjectcode: ''
      }
    }
  },

  methods: {
    async getListPrint () {
      try {
        const res = await API.getListPrint(this.item)
        if (res.data.success) {
          this.$toasted.show('Tìm kiếm thành công', {
            theme: 'toasted-primary',
            position: 'top-right',
            duration: 5000,
            type: 'success'
          })
          this.listprint = res.data.data
        }
      } catch (error) {
        this.$toasted.show('Đã có lỗi xảy ra', {
          theme: 'toasted-primary',
          position: 'top-right',
          duration: 5000,
          type: 'error'
        })
      }
    },
    exportHTML: function () {
      var header =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title><style>@page Section1{margin:0.75in 0.40in 0.75in 0.40in ;} div.Section1 {page:Section1;}</style></head><body><div class='Section1'>"
      var footer = '</div></body></html>'
      var sourceHTML =
        header +
        document.getElementById('printableTableAdmin').innerHTML +
        footer

      var source =
        'data:application/vnd.ms-word;charset=utf-8,' +
        encodeURIComponent(sourceHTML)
      var fileDownload = document.createElement('a')
      document.body.appendChild(fileDownload)
      fileDownload.href = source
      fileDownload.download = 'danhsachphongthi.doc'
      fileDownload.click()
      document.body.removeChild(fileDownload)
    },
    printHTML: function () {
      window.frames[
        'print_frame'
      ].document.body.innerHTML = document.getElementById(
        'printableTableAdmin'
      ).innerHTML
      window.frames['print_frame'].window.focus()
      window.frames['print_frame'].window.print()
    }
  }
}
</script>
