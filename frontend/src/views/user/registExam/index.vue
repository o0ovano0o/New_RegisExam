<template>
<div class="exam-registration text-left">
    <div class="breadcrumbs">
        <div class="breadcrumbs-inner">
            <div class="row m-0">
                <div class="col-sm-4">
                    <div class="page-header float-left">
                        <div class="page-title">
                            <h1><strong>ĐĂNG KÝ MÔN THI</strong></h1>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="page-header float-right">
                        <div class="page-title">
                            <ol class="breadcrumb text-right">
                                <li><a href="#">Trang chủ</a></li>
                                <li class="active">Đăng ký môn thi</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- Content -->
    <div class="content">
        <!-- Animated -->
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Danh sách môn</strong>
                        </div>
                        <div class="table-stats order-table ov-h">
                            <table class="table" id="dataTable1">
                                <thead>
                                    <tr >
                                        <th class="serial">Chọn</th>
                                        <th class="avatar">Học phần</th>
                                        <th>Mã môn học</th>
                                        <th>Ngày thi</th>
                                        <th>Phòng thi</th>
                                        <th>Giờ bắt đầu</th>
                                        <th>Giờ kết thúc</th>
                                        <th>Số lượng sinh viên</th>
                                        <th>Đã đăng ký</th>
                                        <th>Ca thi</th>
                                    </tr>
                                </thead>
                                <tbody id="ddReferences">
                                    <tr class="fixketqua" v-for="(item, index) in classeslist" :key="index">
                                        <td style="text-align: center;" :value="item.subjectid"><input type="checkbox" :value="item.studentregis" :id="item.id" @click="handleCheck(item)" v-model="selectedItems" style="display: block;"></td>
                                        <td data-target="hocphan">{{item.subjecname}}</td>
                                        <td data-target="mahocphan">{{item.subjectcode}}</td>
                                        <td data-target="ngaythi">{{getFormatDate(item.date)}}</td>
                                        <td data-target="phongthi">{{item.room}}</td>
                                        <td data-target="giobatdau">{{item.start}}</td>
                                        <td data-target="gioketthuc">{{item.end}}</td>
                                        <td style="text-align: center;" data-target="soluong"><b>{{item.amount}}</b></td>
                                        <td style="color: #e53935; text-align: center;" data-target="dadangky"><b>{{item.studentregis}}</b></td>
                                        <td style="text-align: center;" data-target="cathi">{{item.examid}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> <!-- /.table-stats -->

                    </div>
                </div>
                
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Danh sách môn đã đăng ký hoặc đã chọn</strong>
                        </div>
                        <div class="table-stats order-table ov-h">
                            <table class="table" id="dataTable2">
                                <thead>
                                    <tr>
                                        <th class="serial">STT</th>
                                        <th class="avatar">Học phần</th>
                                        <th>Mã môn học</th>
                                        <th>Ngày thi</th>
                                        <th>Phòng thi</th>
                                        <th>Giờ bắt đầu</th>
                                        <th>Giờ kết thúc</th>
                                        <th>Ca thi</th>
                                        <th>Xóa/Hủy</th>
                                    </tr>
                                </thead>
                                <tbody id="ketqua">
                                    <tr  v-for="(item, index) in listresult" :key="index" :id="item.id">
                                        <td>{{index + 1}}</td>
                                        <td>{{item.subjecname}}</td>
                                        <td>{{item.subjectcode}}</td>
                                        <td>{{getFormatDate(item.date)}}</td>
                                        <td>{{item.room}}</td>
                                        <td>{{item.start}}</td>
                                        <td>{{item.end}}</td>
                                        <td style="text-align:center;" data-target="cathi">{{item.examid}}</td>
                                        <td style="text-align:center;"><a :id="item.id" data-role='delete' :data-id="item.examid" href="" class="btn btn-warning" @click="deleteResult(item)" style="color: red; padding: 1px 5px;">xóa</a></td>                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div> <!-- /.table-stats -->
                    </div>
                    <hr class="hr-normal">
                    <div class="row">
                        <div class="col-md-4">Tổng số môn học đã đăng ký: {{listresult.length}}</div>
                        <div class="col-md-6"> </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-success" id="save" @click="registExam"><i class="fa fa-save"></i>&nbsp; Ghi Nhận</button>
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
    import API from "@/services/modules/account.services.js";
    import moment from 'moment';
    import $ from "jquery";
    export default {
        data() {
            return {
                selectedItems:[],
                classeslist: [
                    {
                        id: 16,
                        subjectid: 349,
                        subjecname: 'Hệ Quản Trị Cơ Sở Dữ Liệu',
                        subjectcode: 'INT3202 9',
                        date: '2020-01-12',
                        room:'103 G2',
                        start: 9,
                        end: 11,
                        amount:20,
                        studentregis: 15,
                        examid:1
                    },
                    {
                        id: 13,
                        subjectid: 451,
                        subjecname: 'Hệ Quản Trị Cơ Sở Dữ Liệu',
                        subjectcode: 'INT3202 9',
                        date: '2020-01-12',
                        room:'103 G2',
                        start: 9,
                        end: 11,
                        amount:20,
                        studentregis: 19,
                        examid:1
                    }
                ],
                listresult: null,
                registexam:{
                    classesid:'',
                    subjectid:''
                },
                componentKey: 0
            }
        },
        methods: {
            async getClasslist(){
                try {                
                    let res = await API.getHomeStudent();
                    res = res.data;
                    if(res.success) {
                        this.classeslist = res.classeslist;
                    }
                } catch (error) {
                    this.$toasted.show('Lỗi lấy danh sách môn', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'error'
                        });
                }
            },

            handleCheck : function(item){
                var mythis = this;
                var checkbox = $("#ddReferences #" + item.id);
                if($(checkbox).is(":checked"))
                {
                    mythis.listresult.push(item);
                }
                else
                {
                    for (var i=0; i<mythis.listresult.length; i++)
                    {
                        if(mythis.listresult[i].classesid == item.id){
                            mythis.listresult.splice(i, 1);
                            break;
                        }
                    }
                }
                
            },

            checkboxValid : function(){
                var mythis = this;
                var listCheckbox = $("#ddReferences input[type=checkbox]");
                $.each(listCheckbox, function(index, checkbox){
                    var checkboxID = checkbox.id;
                    $.each(mythis.listresult, function(index, result){
                        if (result.classesid == checkboxID){
                            $("#ddReferences #"+checkboxID).attr('disabled', true);
                            $(checkbox).parent().parent().css("background-color", "rgb(255, 252, 187)");
                            $(checkbox).parent().parent().attr('title', 'Ca thi đã đăng ký!');
                        }
                        else if(checkbox.value >= mythis.classeslist[index].amount){
                            $("#ddReferences #"+checkboxID).attr('disabled', true);
                            $(checkbox).parent().parent().css("background-color", "rgb(255, 252, 187)");
                            $(checkbox).parent().parent().attr('title', 'Ca thi đã đủ số lượng sinh viên!');
                        }
                    })
                })
            },

            registExam(){
                var mythis = this;
                var checkedExam = $("#ddReferences input[type=checkbox]:checked");
                $.each(checkedExam, function(index, obj){
                    mythis.registexam.classesid = obj.id; 
                    for (var i=0; i<mythis.classeslist.length; i++)
                    {
                        if(mythis.classeslist[i].id == obj.id){
                            mythis.registexam.subjectid = mythis.classeslist[i].subjectid;
                            break;
                        }
                    }
                    try 
                    {      
                        let res = API.registExamStudent(mythis.registexam);
                        if(res.data.success){
                            this.$toasted.show(res.data.msg, {
                                theme: "toasted-primary",
                                position: "top-right",
                                duration : 5000,
                                type: 'success'
                            });
                            
                        }
                    } 
                    catch (error) {
                        this.$toasted.show('Lỗi không thể đăng ký ca thi', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'error'
                        });
                    }
                })
            },
            async getResultStudent(){
                try {                
                    let res = await API.getResultStudent();
                    res = res.data;
                    if(res.success) {
                        this.listresult = res.data;
                    }
                } catch (error) {
                    this.$toasted.show('Lỗi lấy danh sách môn học đã đăng ký', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
                }
            },

            async deleteResult(item){
                try {
                    await API.deleteResult(item.id);                    
                    this.$toasted.show('Xóa ca thi thành công', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'success'
                        });
                    //await this.getResultStudent();
                } catch (error) {
                    this.$toasted.show('Lỗi không xóa được ca thi', {
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
        },
        
        async created() {
            await this.getClasslist();
            await this.getResultStudent();
            this.checkboxValid();
        },

        mounted(){
            
        }
    }

</script>

<style>
input[type=checkbox]:hover{
    cursor: pointer;
}
</style>