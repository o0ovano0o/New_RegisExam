<template>
<div class="print-exam text-left">
    <div class="breadcrumbs">
        <div class="breadcrumbs-inner">
            <div class="row m-0">
                <div class="col-sm-4">
                    <div class="page-header float-left">
                        <div class="page-title">
                            <h1><strong>IN DANH SÁCH THI</strong></h1>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="page-header float-right">
                        <div class="page-title">
                            <ol class="breadcrumb text-right">
                                <li><a href="#">Trang chủ</a></li>
                                <li class="active">In Danh Sách Thi</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="animated fadeIn">
    <div class="col-md-8" style="margin: auto; background: #fff; border: 1px solid #ccc; border-radius: 4px; padding: 10px;">
        <div style="margin-bottom: 20px; margin-top:0;" class="form-actions form-actions-padding-sm form-actions-padding-md form-actions-padding-lg">
            <div class="d-inline-block">
                <button name="btm" class="btn btn-success btn-icon-split " @click="exportHTML">
                    <span class="icon text-white-50">
                        <i class="fas fa-file-word"></i>
                    </span>
                    <span class="text"> Xuất giấy dự thi</span>
                </button>
            </div>
            <div class="d-inline-block">
                <button href="#" class="btn btn-secondary btn-icon-split" @click="printDiv">
                    <span class="icon text-white-50">
                        <i class="fas fa-print"></i>
                    </span>
                    <span class="text">In giấy dự thi</span>
                </button>
            </div>
        </div>
        <div id="printableTable">
            <div class="print-area">
                <table style="width: 100%; border: none; border-collapse: collapse; color: black;">
                    <tbody>
                        <tr>
                            <td style="width: 40%; text-align: center; vertical-align: top;">
                                <p style="text-transform: uppercase; font-weight: normal; margin: 0; padding: 0; font-size: 12pt;">ĐẠI HỌC QUỐC GIA HÀ NỘI</p>
                                <p style="text-transform:uppercase; margin: 0; padding: 0; font-size:12pt; font-weight:bold;">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ</p>
                            </td>
                            <td style="width: 60%; text-align: center; vertical-align: top;">
                                <p style="text-transform: uppercase; font-weight: bold; margin: 0; padding: 0; font-size: 12pt;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                                <p style="margin: 0; padding: 0; font-weight: bold;">Độc lập - Tự do - Hạnh phúc</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 style="text-align: center; text-transform: uppercase; font-weight: bold; font-size: 14pt; margin: 30px 0 0 0; padding: 0; color: black;">PHIẾU BÁO DỰ THI HỌC KÌ I 2019-2020</h1>
                <p style="text-align: center; font-weight: bold; margin: 0; padding: 0; font-size: 14pt; color: black;">

                    Ngày {{(new Date()).getDate()}} tháng {{(new Date()).getMonth() + 1}} năm {{(new Date()).getFullYear()}}
                   
                </p>
                <table style="width: 100%; border: none; border-collapse: collapse; margin-top: 30px; color: black;">
                    <tbody>
                        <tr>
                            <td>Họ và tên</td>
                            <td><b>{{profilestudent.fullname}}</b></td>
                            <td>Ngày sinh</td>
                            <td><b>{{getFormatDate(profilestudent.datebirth)}}</b></td>
                            <td>Mã sinh viên</td>
                            <td><b>{{profilestudent.studentcode}}</b></td>
                        </tr>
                        <tr>
                            <td>Chương trình đào tạo</td>
                            <td><b>Công nghệ Thông tin</b></td>
                            <td>Khóa</td>
                            <td><b>{{profilestudent.class}}</b></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <table style="border: 1px solid #000; width: 100%; border-collapse:collapse; color: black;">

                    <tbody>
                        <tr>
                            <th style="border: 1px solid #000; text-align:center;">STT</th>
                            <th style="border: 1px solid #000; text-align: center;">Môn học</th>
                            <th style="border: 1px solid #000; text-align: center;">Mã môn</th>
                            <th style="border: 1px solid #000; text-align: center;">Lịch thi</th>
                            <th style="border: 1px solid #000; text-align: center;">Phòng thi</th>

                        </tr>
                        <tr v-for="(item, index) in listresult" :key="index" :id="item.id">
                            <td style="border: 1px solid #000; text-align: center;">{{index + 1}}</td>
                            <td style="border: 1px solid #000; ">{{item.subjecname}}</td>
                            <td style="border: 1px solid #000; ">&nbsp;{{item.subjectcode}}</td>
                            <td style="border: 1px solid #000;  text-align: center;">{{item.start}} - {{item.end}} | {{getFormatDate(item.date)}}</td>
                            <td style="border: 1px solid #000;  text-align: center;">{{item.room}}</td>
                        </tr>
                    </tbody>
                </table>
                <table style="width: 100%; border: none; border-collapse: collapse; margin-top: 30px; color: black;">
                    <tbody>
                        <tr>
                            <td style="width: 50%; vertical-align: top; text-align: center;">
                                <p style="font-weight: bold; margin: 0; padding: 0; font-size: 12pt; text-transform:uppercase;">SINH VIÊN</p>
                                <p style="margin: 0; padding: 0; font-size: 11pt; font-style: italic;">(Ký và ghi rõ họ tên)</p>
                                <p style="margin-top:80px;"><b>{{profilestudent.fullname}}</b></p>
                            </td>
                            <td style="width: 50%; text-align: center; vertical-align: top; ">
                                <p style="font-size: 12pt; margin:0; padding:0;">Hà Nội, ngày ..... tháng ..... năm 2020</p>
                                <p style="font-weight: bold; margin: 0; padding: 0; text-transform: uppercase; font-size: 12pt;">XÁC NHẬN CỦA PHÒNG ĐÀO TẠO</p>
                                <p style="font-weight: bold; margin-top: 80px;">&nbsp;</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <iframe name="print_frame" width="0" height="0" frameborder="0" src="about:blank"></iframe>
        </div>

    </div>
    </div>
    </div>
</div>
</template>

<script>
    import API from "@/services/modules/account.services.js";
    import moment from 'moment';
    export default {
        data() {
            return {
                listresult: null,
                profilestudent: null
            }
        },

        methods: {
            async getResultStudent(){
                try {                
                    let res = await API.getResultStudent();
                    res = res.data;
                    if(res.success) {
                        this.listresult = res.data;
                    }
                } catch (error) {
                    this.$toasted.show('Đã có lỗi xảy ra', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'error'
                        });
                }
            },

            async getProfileStudent(){
                try {                  
                    const res = await API.getProfileStudent();
                    this.profilestudent = res.data.data[0];
                    console.log(this.profilestudent);
                } catch (error) {
                    this.$toasted.show('Đã có lỗi xảy ra', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'error'
                        });
                }
            },

            getFormatDate : function (date) {
                return moment(date).format('DD/MM/YYYY');
            },

            exportHTML() {
                var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                    "xmlns='http://www.w3.org/TR/REC-html40'>" +
                    "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title><style>@page Section1{margin:0.75in 0.40in 0.75in 0.40in ;} div.Section1 {page:Section1;}</style></head><body><div class='Section1'>";
                var footer = "</div></body></html>";
                var sourceHTML = header + document.getElementById("printableTable").innerHTML + footer;

                var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
                var fileDownload = document.createElement("a");
                document.body.appendChild(fileDownload);
                fileDownload.href = source;
                fileDownload.download = 'giayduthi.doc';
                fileDownload.click();
                document.body.removeChild(fileDownload);
            },

            printDiv() {
                window.frames["print_frame"].document.body.innerHTML = document.getElementById("printableTable").innerHTML;
                window.frames["print_frame"].window.focus();
                window.frames["print_frame"].window.print();
            }
        },

        watch: {
        },

        async created() {
            await this.getResultStudent();
            await this.getProfileStudent();
        }
    }

</script>


<style>
</style>